import { browserHistory } from 'react-router';
import { setFlash } from './flash';
import request from 'superagent';
require('superagent-rails-csrf')(request);

export const getUser = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/logged_in_user',
      type: 'GET',
      dataType: 'JSON',
    }).done( user => {
      dispatch({ type: 'SHOW_USER', user })
    }).fail( data => {
      dispatch(setFlash('Error Finding User.', 'error'))
    });
  }
}

export const deleteUser = (router) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/delete_user',
      type: 'DELETE', 
      dataType: 'JSON'
    }).done( user => {
      dispatch({ type: 'DELETE_USER' });
      router.push('/');
      dispatch(setFlash('You Have Succesfully Deleted Your Account', 'success'))
    }).fail( data => {
      dispatch(setFlash('Error Deleting Account', 'error'))
    })
  }
}

export const updateUser = (first_name, last_name, avatar) => {
  return(dispatch) => {
    $.ajax({
      url: '/api/update_user',
      type: 'PUT',
      dataType: 'JSON', 
      data: { user: { first_name, last_name }}
    }).done( user => {
      request.put('/api/users/avatar')
      .setCsrfToken()
      .attach(avatar.name, avatar)
      .end( (error, res) => {
        dispatch({ type: 'UPDATE_USER', user: res.body })
        browserHistory.push('/user_profile')
      })
    }).fail( data => {
      dispatch(setFlash('Error Updating User', 'error'))
    })
  }
}