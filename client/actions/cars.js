import { setFlash } from './flash';
import { history, router, browserHistory } from 'react-router';
import Cars from '../components/Cars';
import { push } from 'react-router-redux';

export const getCars = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/cars',
      type: 'GET'
    }).done( cars => {
      dispatch({ type: 'GET_CARS', cars});
    }).fail( data => {
      console.log(data);
    })
  }
}

export const addCar = (make, model, four_by_four, chains) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/cars',
      type: 'POST',
      data: { car: { make, model, four_by_four, chains }}
    }).done( car => {
      dispatch({ type: 'ADD_CAR', car });
      browserHistory.push('/cars');
      dispatch(setFlash('Car Added Successfully', 'success'));
    }).fail( data => {
      dispatch(setFlash('Car Was Not Added', 'error'));
      console.log(data);
    });
  }
}

export const updateCar = ( id, make, model, four_by_four, chains ) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/cars/${id}`,
      type: 'PUT',
      data: { car: { id, make, model, four_by_four, chains }}
    }).done( car => {
      dispatch({ type: 'UPDATE_CAR', car });
      browserHistory.push('/cars');
      dispatch(setFlash('Car Updated', 'success'));
    }).fail( err => {
      dispatch(setFlash(err.errors, 'error'));
    });
  }
}

export const deleteCar = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/cars/${id}`,
      type: 'DELETE'
    }).done( () => {
      dispatch({ type: 'DELETE_CAR', id });
      browserHistory.push('/user_profile');
      dispatch(setFlash('Car Deleted', 'success'));
    }).fail( data => {
      dispatch(setFlash('Car Delete Unsuccessful', 'error'))
      console.log(data);
    });
  }
}