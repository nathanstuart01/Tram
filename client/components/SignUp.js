import React from 'react';
import { Link } from 'react-router';
import { handleSignUp } from '../actions/auth';
import { connect } from 'react-redux';

class SignUp extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let username = this.refs.username.value;
    let first_name = this.refs.first_name.value;
    let last_name = this.refs.last_name.value;
    this.props.dispatch(handleSignUp(email, password, username, first_name, last_name));
  }

  render() {

    return(
        <div className='row body_width signup_page'>
        <div className='col s6'>
          <h2 className='tram_title'><b>T R A M</b></h2>
          <h5>Find a carpool to Ski Resorts in Big and Little Cottonwood Canyon</h5>
        </div>
          <div className='col s6'>
            <h3>Sign Up For A New Account</h3>
              <form ref='signupForm' onSubmit={ this.handleSubmit }>
                <input className='input' ref='email' type='text' required placeholder='Email' />
                <br />
                <input className='input' ref='first_name' type='text' required placeholder='First Name' />
                <br />
                <input className='input' ref='last_name' type='text' required placeholder='Last Name' />
                <br />
                <input className='input' ref='username' type='text' required placeholder='Username' />
                <br />
                <input className='input' ref='password' type='password' required placeholder='Password' />
                <br />
                <input type='submit' className='btn blue-grey darken-3' value='Sign Up' />
                <Link to='/login' className='btn grey darken-2'>Cancel</Link>
              </form>
            </div>
        </div>
    );
  }
}

export default connect()(SignUp);
