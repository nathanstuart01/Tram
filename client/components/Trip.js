import React from 'react';
import { connect } from 'react-redux';
import { getTrips, deleteTrip } from '../actions/trips';
import { Link } from 'react-router';

class Trip extends React.Component {


componentDidMount() {
    this.props.dispatch(getTrips())
}


cancelTrip = (id) => {
 this.props.dispatch(deleteTrip(id));
}

render() {
  let trip = this.props.trip
  if(trip) {
    return (
      <div className='body_width'>
      <h1>Trip Details</h1>
      <hr />
      <h4>Name: {trip.name}</h4>
      <p>Date: {trip.date}</p>
      <p>Pick Up Time: {trip.pickup_time}</p>
      <p>Departure Time: {trip.departure_time}</p>
      <p>Start Address: {trip.start_address}</p>
      <p>End Address: {trip.end_address}</p>
      <p>Driver: {trip.user_id}</p>
      <button>Join This Trip</button>
      <Link to={'/trips'}>Back to All trips</Link>
      <button onClick={ () =>{this.cancelTrip(trip.id)} } className='btn grey darken-2'>Delete Trip</button>
      </div>
    );
  } else {
    return(<h1>Loading...</h1>)
  }
}
}

const mapStateToProps = (state, props) => {

return { trip: state.trips.find( t => t.id == props.params.id) }
}

export default connect(mapStateToProps)(Trip);
