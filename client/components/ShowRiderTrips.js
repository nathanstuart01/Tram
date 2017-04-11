import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { removeRider } from '../actions/trips';
import { getUser } from '../actions/user';
import GoogleMap from './GoogleMap';

class ShowRiderTrips extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUser());
  }

  cancelRide = (id) => {
    this.props.dispatch(removeRider(id));
  }

 submitMessage = (e) => {
   e.preventDefault();
   $.ajax({
     url: `/api/trips/${this.props.trip.id}/message`,
     type: 'POST',
     data: { message: this.message.value }
   }).done( () => {
     this.form.reset()
   }).fail( err => {
     console.log(data);
   })
 }

messages = () => {
  return this.props.messages.map( (m, i) => {
    return (
      <li key={i} className="collection-item message_collection">
        {m.body}
        <div className="secondary-content">
          {m.name}
        </div>
      </li>
    )
  })
}

  render() {
    let user = this.props.user;
    let trip = this.props.trip || {};
    if(Object.keys(trip).length > 0 && trip.rider_ids.includes(user.id)) {
      return (
        <div className='body_width'>
          <div className='col s6 trip_details'>
            <h1>Trip Details</h1>
            <div> 
              <button onClick={ () => {this.cancelRide(trip.id)} }className='btn grey darken-2'>Cancel Pickup</button>
            </div>
            <hr />
            <h4>Name: {trip.name}</h4>
            <p>Date: {trip.date}</p>
            <p>Pick Up Time: {trip.pickup_time}</p>
            <p>Departure Time: {trip.departure_time}</p>
            <p>Start Address: {trip.start_address}</p>
            <p>End Address: {trip.end_address}</p>
            <p>Car For Trip: {trip.trip_car[0].make} {trip.trip_car[0].model}, {trip.trip_car[0].chains? "Chains" : "No Chains"}, {trip.trip_car[0].four_by_four? "4WD" : "No 4WD"}  </p>
            <p>Driver: {trip.driver_username}</p>
            <div>
              <img className='responsive-img driver_image' src={trip.driver_avatar_url} alt='Driver Profile Picture' width='120px' />
            </div>
            <br />
            <div className='trip_map'>
              <GoogleMap trip={trip} />
            </div>
          </div>
          <div className='col s6 z-depth-3 trip_messages'>
            <h4 className='message_header'>Message driver and other riders:</h4>
            <form ref={n => this.form = n } onSubmit={this.submitMessage}>
              <input ref={ n => this.message = n } style={{color:'white', fontSize:'20px'}} required placeholder='Type message here and hit enter to send' />
            </form>
            <ul className="collection">
              { this.messages() }
            </ul>
          </div>
      </div>
      );
    } else {
      return(
        <h3>You Have Not Joined Any Trips</h3>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
 return {
   user: state.user,
   trip: state.trips.find( t => t.id == props.params.id ),
   messages: state.messages.filter( m => m.trip_id == props.params.id )
 }
}
export default connect(mapStateToProps)(ShowRiderTrips);
