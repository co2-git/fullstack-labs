'use strict';

import React from 'react';
import superagent from 'superagent';

class TopBar extends React.Component {

  signOutHandler (e) {
    e.preventDefault();

    superagent
      .get('/sign-out')
      .end((err, res) => {
        if ( err ) {
          console.warn(err.message);
        }
        else {
          location.href = '';
        }
      });
  }

  render () {
    const { user } = this.props;

    let signOut;

    if ( user ) {
      signOut = (
        <div style={{ 'float' : 'right', padding : 10 }}>
          <a
            href        =   "#"
            style       =   {{ color : '#fff' }}
            onClick     =   { ::this.signOutHandler }
          >
            Sign out
          </a>
        </div>
      );
    }

    return (
      <header style={{
        background      :   '#222',
        padding         :   10,
        color           :   '#fff',
        marginBottom    :   20
      }}>

        { signOut }

        <h4>
          FullStack Labs | Coding challenge
        </h4>
      </header>
    );
  }
}

export default TopBar;
