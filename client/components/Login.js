import React from 'react';
import { handleLogin } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    this.props.dispatch(handleLogin(email, password));
  }

  render() {
    return(
      <div className='body_width login_page'>
        <h2>Login</h2>
        <form className='form_login' onSubmit={ this.handleSubmit }>
          <input ref='email' type='text' required placeholder='Email' />
          <br />
          <input ref='password' type='password' required placeholder='Password' />
          <br />
          <input type='submit' className='btn blue-grey darken-3' />
        </form><br />
      </div>
    );
  }
}

export default connect()(Login);