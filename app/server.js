'use strict';

/*    FullStack Labs | HTTP Server
 *
 */

import path               from 'path';
import fs                 from 'fs';
import Server             from 'express-emitter';
import express            from 'express';
import cookieParser       from 'cookie-parser';
import bodyParser         from 'body-parser';
import WebRockets         from 'web-rockets';
import WebRocketsCookie   from 'web-rockets-cookie';
import User               from './models/user';
import signIn             from './routes/sign-in';
import signOut            from './routes/sign-out';
import signUp             from './routes/sign-up';
import setCookie          from './routes/set-cookie';
import household          from '../data/household.json';
import car                from '../data/car.json';
import person             from '../data/person.json';

//------------------------------------------------------------------------------
/** Render index
 *
 *  @arg {IncomingMessage} req
 *  @arg {HttpResponse} res
 *  @arg {Function} next
 *  @return null
 */
//------------------------------------------------------------------------------

function render (req, res, next) {
  let source = '';

  fs
    .createReadStream('index.html')
    .on('error', next)
    .on('data', data => { source += data.toString() })
    .on('end', () => {
      source = source.replace(
        /window\.props = \{\};/,
        'window.props = ' + JSON.stringify(
          {
            user : req.user,
            path : req.path
          },
          null,
          2
        ) + ';'
      );
      res.send(source);
    })
}

//------------------------------------------------------------------------------
/** Identify user in stack so front-end knows if user is logged in
 *
 *  @arg {IncomingMessage} req
 *  @arg {HttpResponse} res
 *  @arg {Function} next
 *  @return null
 */
//------------------------------------------------------------------------------

function identify (req, res, next) {
  if ( req.cookies.fullStack12345 ) {
    User
      .find(req.cookies.fullStack12345)
      .then(users => {
        if ( ! users.length ) {
          return next(new Error('Cookie not matching any user'));
        }

        const [ user ] = users;

        req.user = user;

        console.log({ user });

        next();
      })
      .catch(next);
  }
  else {
    next();
  }
}

// The HTTP server

const server = new Server(app => {

  //----------------------------------------------------------------------------// Express Configuration
  //----------------------------------------------------------------------------

  app

    //--------------------------------------------------------------------------
    // Port
    //--------------------------------------------------------------------------

    .set('port', process.env.PORT || 3000)

    //--------------------------------------------------------------------------
    // Cookie parser
    //--------------------------------------------------------------------------

    .use(cookieParser())

    //--------------------------------------------------------------------------
    // Body parsers
    //--------------------------------------------------------------------------

    .use(
      bodyParser.urlencoded({ extended: true }),
      bodyParser.json()
    )

    //--------------------------------------------------------------------------
    // User
    //--------------------------------------------------------------------------

    .get('/', identify)

    .get('/step/:step', identify)

    //--------------------------------------------------------------------------
    // Sign in
    //--------------------------------------------------------------------------

    .post(
      '/sign-in',
      signIn,
      setCookie,
      (req, res) => res.send(req.user)
    )

    //--------------------------------------------------------------------------
    // Sign up
    //--------------------------------------------------------------------------

    .post(
      '/sign-up',
      signUp,
      setCookie,
      (req, res) => res.send(req.user)
    )

    //--------------------------------------------------------------------------
    // Sign out
    //--------------------------------------------------------------------------

    .get('/sign-out', signOut, (req, res) => res.send({ out : true }))

    //--------------------------------------------------------------------------
    // Home page
    //--------------------------------------------------------------------------

    .get('/', render)

    //--------------------------------------------------------------------------
    // Home page with steps
    //--------------------------------------------------------------------------

    .get('/step/:step', render)

    //--------------------------------------------------------------------------
    // Static assets
    //--------------------------------------------------------------------------

    .use('/bower_components/', express.static('bower_components/'))

    .use('/assets/', express.static('assets/'));
})

  //----------------------------------------------------------------------------
  // On server listening
  //----------------------------------------------------------------------------

  .on('listening', () => {
    console.log('Server is listening', server.app.get('port'));

    //--------------------------------------------------------------------------
    // Web Sockets
    //--------------------------------------------------------------------------

    const rockets = new WebRockets(server.server);

    // The users

    rockets.users = [];

    // Small ID system for DB

    rockets.id = 0;

    /** Find Socket User - Find a user by email
     *
     *  @arg {Object} user - the user from DB to compare with RAM users
     *  @return {Object}
     */

    const findSocketUser = user => {
      return rockets.users.reduce(
        (match, socketUser) => {
          if ( socketUser.email === user.email ) {
            match = socketUser;
          }
          return match;
        },
        null
      );
    };

    rockets
      .on('error', server.emit.bind(server, 'error'))

      .on('listening', () => console.log('Web Sockets up!'))

      // Get user cookie if exists

      .use(WebRocketsCookie('fullStack12345', false, (cookie, socket, next) => {

        // No cookie? Keeps on going

        if ( ! cookie ) {
          return next();
        }

        // Find user matching cookie in Users DB

        User
          .find(cookie)
          .then(users => {
            const [ user ] = users;

            socket.user = user;

            const socketUser = findSocketUser(user);

            // If user not in RAM DB, then add them

            if ( ! socketUser ) {
              rockets.users.push(Object.assign(user, {
                // Default data
                data : {
                  household,
                  persons : [Object.assign({}, person, { id : rockets.id ++ })],
                  cars    : [Object.assign({}, car, { id : rockets.id ++ })]
                }
              }));
            }

            next();
          })
          .catch(next);
      }))

      .use((socket, next) => {
        // catch errors

        socket.on('error', error => console.log(error.stack));
        next();
      })

      // Hand data to client

      .listen('getData', (socket, cb) => {
        cb(findSocketUser(socket.user).data);
      })

      // Save data changes

      .listen('changeData', (socket, domain, section, value, index) => {
        const socketUser = findSocketUser(socket.user);

        // if index is set, than data is an array

        if ( typeof index === 'number' ) {

          // if no such item in array, then create it

          if ( ! socketUser.data[domain][index] ) {
            if ( domain === 'persons' ) {
              socketUser.data[domain][index] = Object.assign({}, person);
            }

            else if ( domain === 'cars' ) {
              socketUser.data[domain][index] = Object.assign({}, car);
            }

            socketUser.data[domain][index].id = rockets.id++;
          }

          // update data

          socketUser.data[domain][index][section] = value;
        }

        else {
          socketUser.data[domain][section] = value;
        }

        // Emit back to client
        socket.emit('changedData', socketUser.data);
      });
  })

  //----------------------------------------------------------------------------
  // On server error
  //----------------------------------------------------------------------------

  .on('error', error => console.log(error.stack));
