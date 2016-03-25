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
import cars               from '../data/cars.json';
import person             from '../data/person.json';

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

const server = new Server(app => {

  //----------------------------------------------------------------------------// Express Configuration
  //----------------------------------------------------------------------------

  app

    // Port

    .set('port', process.env.PORT || 3000)

    // Cookie parser

    .use(cookieParser())

    // Body parsers

    .use(
      bodyParser.urlencoded({ extended: true }),
      bodyParser.json()
    )

    // User

    .get('/', identify)

    .get('/step/:step', identify)

    // Sign in

    .post(
      '/sign-in',
      signIn,
      setCookie,
      (req, res) => res.send(req.user)
    )

    // Sign up

    .post(
      '/sign-up',
      signUp,
      setCookie,
      (req, res) => res.send(req.user)
    )

    // Sign out

    .get('/sign-out', signOut, (req, res) => res.send({ out : true }))

    // Home page

    .get('/', render)

    // Home page with steps

    .get('/step/:step', render)

    // Static assets

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

    rockets.users = [];

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

      // Identify socket user by cookie

      .use(WebRocketsCookie('fullStack12345', false, (cookie, socket, next) => {
        if ( ! cookie ) {
          return next();
        }

        User
          .find(cookie)
          .then(users => {
            const [ user ] = users;
            socket.user = user;

            const socketUser = findSocketUser(user);

            if ( ! socketUser ) {
              rockets.users.push(Object.assign(user, {
                data : {
                  household,
                  persons : [person]
                }
              }));
            }

            next();
          })
          .catch(next);
      }))

      .listen('getData', (socket, cb) => {
        cb(findSocketUser(socket.user).data);
      })

      .listen('changeData', (socket, domain, section, value) => {
        const socketUser = findSocketUser(socket.user);

        socketUser.data[domain][section] = value;
      });
  })

  //----------------------------------------------------------------------------
  // On server error
  //----------------------------------------------------------------------------

  .on('error', error => console.log(error.stack));
