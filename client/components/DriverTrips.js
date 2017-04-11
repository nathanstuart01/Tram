import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import { getUser } from '../actions/user';
import ShowDriverTrips from './ShowDriverTrips';

class DriverTrips extends React.Component {

  componentWillMount() {
    this.props.dispatch(getUser());
  }

  render() {
    let user = this.props.user
        let trips = this.props.trips.map( (trip) => {
          if(trip.user_id === user.id) {
            return (
              <ul key={trip.id} className="collapsible" data-collapsible='accordion'>
                <li>
                  <div className='collapsible-header'>
                    <Link to={`/showdrivertrips/${trip.id}`}><b>{trip.name}</b></Link>
                    <h6>Date: {trip.date}</h6>
                  </div>
                </li>
              </ul>
            );
          }
        });
    if(trips.length !== 0) {
      return (
        <div>
          {trips}
        </div>
      );
    } else {
      return(
        <h5 className='center'>You Haven't Created Any Rides</h5>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { trips: state.trips, user: state.user }
}
export default connect(mapStateToProps)(DriverTrips);
