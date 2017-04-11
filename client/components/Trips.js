import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import { joinATrip } from '../actions/trips';
import SearchTrips from './SearchTrips';


class Trips extends React.Component {

  setCollapsible() {
    setTimeout(function(){
      $('.collapsible').collapsible();
    }, 500);
  }

  joinTrip = (id) => {
    this.props.dispatch(joinATrip(id))
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState = { term: ''}
  }

  render() {
    this.setCollapsible()
    let trips = this.props.trips.map( trip => {
      if(trip.user_id !== this.props.user.id  && trip.available_seats != 0 && !trip.rider_ids.includes(this.props.user.id) ) {
        return (
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header">
                <b className='blue-grey-text text-darken-1'>{trip.name}</b>
                <h6 className='toggle'>Click to view details</h6>
                <br />
                <h6>Date: {trip.date}</h6>
              </div>
              <div className="collapsible-body">
                <span>
                  <p>Resort/Drop Off Location: {trip.end_address}</p>
                  <br />
                  <p>Pickup Time: {trip.pickup_time}</p>
                  <br />
                  <p>Departure Time: {trip.departure_time}</p>
                  <br />
                  <p>Pickup Location: {trip.start_address}</p>
                  <br />
                  <p>Available Seats Left: {trip.available_seats}</p>
                  <br />
                  <p>Car For Trip: {trip.trip_car.length !== 0? trip.trip_car[0].make : "No car"} {trip.trip_car.length !== 0? trip.trip_car[0].model : ""}</p>
                  <p>{trip.trip_car.length !== 0? trip.trip_car[0].four_by_four : ""}</p>
                  <p>{trip.trip_car.length !== 0? trip.trip_car[0].chains : ""}</p>
                  <br />
                  <button onClick={ () =>{this.joinTrip(trip.id)} } className='btn blue-grey darken-3'>Join This Trip</button>
                </span>
              </div>
            </li>
          </ul>
        )
      }
    });
    if(trips.length !== 0 ) {
      return (
        <div>
          <SearchTrips />
          <br />
          {trips}
        </div>
      )
    } else {
      return (
        <div>
        <h5>Your search did not find any available trips.
          Try searching again for a different destination.</h5>
        <Link to='/trips' onClick={ () => {this.resetForm()} } className='search_btn btn grey darken-1'>Search Again</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { trips: state.trips, user: state.auth}
}
export default connect(mapStateToProps)(Trips);
