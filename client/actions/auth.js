import { browserHistory } from 'react-router';
import { setFlash } from './flash';
import { Link } from 'react-router';
import UserProfile from '../components/UserProfile';

const logout = () => {
  return { type: 'LOGOUT' }
}

const login = (user) => {
  return { type: 'LOGIN', user }
}

export const handleLogin = (email, password) => {
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_in',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, password } }
    }).done( user => {
      dispatch(login(user));
      browserHistory.push('/user_profile')
      dispatch(setFlash('You Have Successfully Logged In', 'success'));
    }).fail( data => {
      dispatch(setFlash('Incorrect Username and/or Email', 'error'));
    });
  }
}

export const handleLogout = () => {
  return(dispatch) => {
    $.ajax({
      url: '/users/sign_out',
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      dispatch(logout());
      browserHistory.push('/');
      dispatch(setFlash('You Have Successfully Logged Out', 'success'))
    }).fail( data => {
      dispatch(setFlash('Error Logging Out.', 'error'));
    });
  }
}

export const refreshLogin = () => {
  return(dispatch) => {
    $.ajax({
      url: '/api/logged_in_user',
      type: 'GET',
      dataType: 'JSON'
    }).done( user => {
      if(user.id)
        dispatch(login(user))
      else
        dispatch(logout());
    }).fail( data => {
      dispatch(setFlash('Error Refreshing User Data.', 'error'));
    });
  }
}

export const handleSignUp = (email, password, username, first_name, last_name) => {
  return(dispatch) => {
    $.ajax({
      url: '/users',
      type: 'POST',
      dataType: 'JSON',
      data: { user: { email, password, username, first_name, last_name } } 
    }).done( user => {
      dispatch(login(user));
      browserHistory.push('/user_profile');
      dispatch(setFlash('You Have Successfully Signed Up. Welcome To T R A M!', 'success'))
    }).fail(data => {
      dispatch(setFlash('Username and/or Email Have Already Been Taken', 'error'));
    });
  }
}