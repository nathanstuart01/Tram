import React from 'react';
import { connect } from 'react-redux';
import { joinATrip } from '../actions/trips';
import { Link } from 'react-router';

class ShowTrip extends React.Component {
state = { car: {} }

 joinTrip = (id) => {
   this.props.dispatch(joinATrip(id))
 }

 render () {
    let trip = this.props.trip || {};
    if(trip.user_id != this.props.user.id ) {
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
         <p>Seats Available: {trip.available_seats}</p>
         <p>Driver: {trip.user_id}</p>
         <button onClick={ () =>{this.joinTrip(trip.id)} } className='btn blue-grey darken-3'>Join This Trip</button>
         <Link to={'/trips'} className='btn blue-grey darken-3'>Back to All trips</Link>
         </div>
       );
     } else {
       return (
         <div>
           <h3>No Current Rides Available, Please Check Back Soon</h3>
         </div>
       );
     }
   }
}

const mapStateToProps = (state, props) => {
return { user: state.user, trip: state.trips.find( t => t.id == props.params.id ) }
}

export default connect(mapStateToProps)(ShowTrip);
