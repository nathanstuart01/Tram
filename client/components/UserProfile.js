import React from 'react';
import { connect } from 'react-redux';
import { getUser, deleteUser, updateUser } from '../actions/user';
import { getTrips } from '../actions/trips';
import { Link } from 'react-router';
import UserTrips from './UserTrips';
import DriverTrips from './DriverTrips';
import RiderTrips from './RiderTrips';
import SnowReports from './SnowReports';
import { getCars } from '../actions/cars';

class UserProfile extends React.Component {
  state = { avatar: null }

  componentDidMount() {
    $(".button-collapse").sideNav();
    this.props.dispatch(getCars());
    this.props.dispatch(getUser(), updateUser());
    this.props.dispatch(getTrips());
  }

  deleteAccount = () => {
    this.props.dispatch(deleteUser(this.props.history));
  }

  render() {
    let user = this.props.user;
    return(
      <div className='body_width'>
        <div className='user_header_name'>
          <div className='col s6 user_image_div'>
            <img className='responsive-img user_image' width='200px' src={user.avatar_url} alt='User Avatar Image' /><br />
          </div>
          <h3><b>Hello {user.first_name} {user.last_name}!</b></h3>
        <div>
          <ul id="slide-out" className="side-nav">
            <li><div className="userView">
              <div className="background">
              </div>
              <div>
                {user.first_name} {user.last_name}<hr />
              </div>
              <div>
              </div>
              </div></li><br />
            <li><a className="subheader">ACCOUNT SETTINGS</a></li>
            <li><div className="divider"></div></li>
            <Link to={'/cars'}>MANAGE CARS</Link>
            <Link to={'/user_update'}>UPDATE ACCOUNT</Link>
            <li><a className="waves-effect" onClick={ () => {this.deleteAccount()} }>CANCEL ACCOUNT</a></li>
          </ul>
            <a data-activates="slide-out" className="button-collapse btn blue-grey darken-2"><h6 className=" user_header">USER SETTINGS/ADD CAR</h6></a>
            <Link to='/snowreports' className='btn blue-grey darken-2'>Snow Reports</Link>
          </div>
        </div>
        <br />
        <div className='rider_loop z-depth-3'>
          <div className='col s6'>
            <h5 className='rider_header'>My Joined Trips</h5>
            <Link to='/trips' className='btn blue-grey darken-2 ride_btn'>Join A Trip</Link>
          <div>
            <RiderTrips />
          </div>
        </div>
        </div>
        <br />
        <div className='trip_loop z-depth-3'>
          <div className='col s6'>
            <h5 className='trip_header'>My Created Trips</h5>
            {
              this.props.car? <Link to='/newtrip' className='btn blue-grey darken-2 ride_btn'>Create A Ride</Link> : <Link to='/newcarform' className=' btn blue-grey darken-2'>Add A Car First</Link>
            }
          <div>
            {
              this.props.car? <DriverTrips /> : ""
            }
          </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { user: state.user, trips: state.trips, car: state.cars[0] }
}

export default connect(mapStateToProps)(UserProfile);
