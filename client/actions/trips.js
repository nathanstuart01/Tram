import { browserHistory } from 'react-router';
import UserProfile from '../components/UserProfile';
import { setFlash } from './flash';

export const getTrips = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/trips',
      type: 'GET'
    }).done( trips => {
      dispatch({ type: 'SHOW_TRIPS', trips })
    }).fail( data => {
      console.log(data)
    });
  }
}

export const addTrip = (name, date, pickup_time, departure_time,
                           start_address, end_address,
                           available_seats, driver_username) => {
 return(dispatch) => {
   $.ajax({
     url: '/api/trips',
     type: 'POST',
     dataType: 'JSON',
     data: { trip: { name, date, pickup_time, departure_time,
                      start_address, end_address,
                     available_seats, driver_username } }
   }).done( trip => {
     dispatch({ type: 'ADD_TRIP', trip })
     browserHistory.push('/user_profile');
     dispatch(setFlash('Trip Created!', 'success'));
   }).fail(data => {
     dispatch(setFlash("Creating Your Trip Was Unsuccessfull", 'error'))
     console.log(data);
   });
 }
}

export const deleteTrip = (id) => {
 return (dispatch) => {
   $.ajax({
     url: `/api/trips/${id}`,
     type: 'DELETE',
     dataType: 'JSON'
   }).done( id => {
     dispatch({ type: 'DELETE_TRIP', id });
     browserHistory.push('/user_profile');
     dispatch(setFlash("You Have Deleted Your Trip", 'success'))
   }).fail( data => {
     dispatch(setFlash("Delete Was Unsuccessfull", 'error'))
     console.log(data);
   })
 }
}

export const updateTrip = (name, date, pickup_time, departure_time,
start_address, end_address, available_seats, id) => {
 return(dispatch) => {
   $.ajax({
     url: `/api/trips/${id}`,
     type: 'PUT',
     dataType: 'JSON',
     data: { trip: { name, date, pickup_time, departure_time,
     start_address, end_address, available_seats }}
   }).done( trip => {
     dispatch({ type: 'EDIT_TRIP', trip });
     browserHistory.push('/user_profile');
     dispatch(setFlash("Edit Was Successfull!", 'success'));
   }).fail( data => {
     dispatch(setFlash("Error While Editing Trip", 'error'))
     console.log(data);
   })
 }
}

export const joinATrip = (id, rider_username) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/add_rider/${id}`,
      type: 'PUT',
      dataType: 'JSON'
    }).done( trip => {
      dispatch({ type: 'ADD_RIDER', trip });
      dispatch(removeSeat(id));
      browserHistory.push('/user_profile')
      dispatch(setFlash('You Joined The Trip!', 'success'));
    }).fail( data => {
      dispatch(setFlash("Join Trip Was Unsuccessfull", 'error'))
      console.log(data);
    });
  }
}

export const removeRider = (id) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/remove_rider/${id}`,
      type: 'PUT',
      dataType: 'JSON'
    }).done( trip => {
      dispatch({ type: 'REMOVE_RIDER', trip });
      browserHistory.push('/user_profile')
      dispatch(setFlash("You Have Cancelled Your Pickup", 'success'))
    }).fail( data => {
      dispatch(setFlash("Trip was already deleted by driver", 'error'))
      browserHistory.push('/user_profile')
    })
  }
}

export const removeSeat = (id) => {
  return(dispatch) => {
    $.ajax({
      url: `/api/remove_seat/${id}`,
      type: 'PUT',
      dataType: 'JSON'
    }).done( trip => {
      dispatch({ type: 'REMOVE_SEAT', trip });
    }).fail( data => {
      console.log(data);
    });
  }
}

// action that will dispatch a new action 'FILTER_TRIPS' pass in the searched term
export const setFilter = (term) => {
  return(dispatch) => { dispatch({ type: 'FILTER_TRIPS', term }); }
}
