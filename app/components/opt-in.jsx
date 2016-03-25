'use strict';

import React              from 'react';
import superagent         from 'superagent';

class OptIn extends React.Component {
  state = {
    formError : null
  };

  submitHandler (e) {
    e.preventDefault();
  }

  loginHandler (e) {
    const email = document.querySelector('[name="email"]');
    const password = document.querySelector('[name="password"]');

    if ( ! email.value ) {
      this.setState({ formError : 'Please enter your email' });
    }

    else if ( ! email.checkValidity() ) {
      this.setState({ formError : 'Please enter a valid email' });
    }

    else if ( ! password.value ) {
      this.setState({ formError : 'Please enter your password' });
    }

    else {
      superagent
        .post('/sign-in')
        .send({ email : email.value, password : password.value })
        .end((err, res) => {
          if ( err ) {
            this.setState({ formError : err.message });
          }
          else {
            location.href = '';
          }
        });
    }
  }

  joinHandler (e) {
    const email = document.querySelector('[name="email"]');
    const password = document.querySelector('[name="password"]');

    if ( ! email.value ) {
      this.setState({ formError : 'Please enter your email' });
    }

    else if ( ! email.checkValidity() ) {
      this.setState({ formError : 'Please enter a valid email' });
    }

    else if ( ! password.value ) {
      this.setState({ formError : 'Please enter your password' });
    }

    else {
      superagent
        .post('/sign-up')
        .send({ email : email.value, password : password.value })
        .end((err, res) => {
          if ( err ) {
            this.setState({ formError : err.message });
          }
          else {
            location.href = '';
          }
        });
    }
  }

  render () {
    let alert;

    if ( this.state.formError ) {
      alert = (
        <div className="alert alert-danger" role="alert">
          { this.state.formError }
        </div>
      );
    }

    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="text-center">Coding challenge</h1>

          <hr/>

          { alert }

          <form className="form-horizontal" onSubmit={ ::this.submitHandler }>
            <div className="form-group">
              <label htmlFor="email" className="col-xs-2 control-label">
                Email
              </label>

              <div className="col-xs-10">
                <input
                  type            =   "email"
                  name            =   "email"
                  placeholder     =   "Your email"
                  className       =   "form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="col-xs-2 control-label">
                Password
              </label>

              <div className="col-xs-10">
                <input
                  type            =   "password"
                  name            =   "password"
                  placeholder     =   "Your password"
                  className       =   "form-control"
                />
              </div>
            </div>

            <hr/>

            <div className="btn-group" role="group" style={{ marginLeft : 200 }}>
              <a
                className         =   "btn btn-info btn-lg"
                href              =   "#"
                role              =   "button"
                onClick           =   { ::this.loginHandler }
              >
                Log in
              </a>

              <a
                className         =   "btn btn-primary btn-lg"
                href              =   "#"
                role              =   "button"
                onClick           =   { ::this.joinHandler }
              >
                Join
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default OptIn;
