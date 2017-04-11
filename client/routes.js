import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App.js';
import NoMatch from './components/NoMatch.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import Home from './components/Home.js';
import AboutUs from './components/AboutUs';
import UserProfile from './components/UserProfile.js';
import UserUpdate from './components/UserUpdate.js';
import Trips from './components/Trips.js';
import Trip from './components/Trip.js';
import NewTrip from './components/NewTrip.js';
import ShowTrip from './components/ShowTrip.js';
import Cars from './components/Cars.js';
import NewCarForm from './components/NewCarForm.js';
import EditCarForm from './components/EditCarForm.js';
import SetTrips from './components/SetTrips';
import UserTrips from './components/UserTrips';
import DriverTrips from './components/DriverTrips';
import SetUser from './components/SetUser';
import ShowDriverTrips from './components/ShowDriverTrips';
import SearchTrips from './components/SearchTrips';
import RiderTrips from './components/RiderTrips';
import ShowRiderTrips from './components/ShowRiderTrips';
import SnowReports from './components/SnowReports';
import GoogleMap from './components/GoogleMap';



const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state,
  predicate: state => state.remember || state.auth.isAuthenticated,
});

export default (
  <Route>
    <Route component={SetUser} >
      <Route path="/" component={App}>
        <IndexRoute component = {Home} />
        <Route path='/login' component={Login} />
        <Route path='/sign_up' component={SignUp} />
        <Route path='/about_us' component={AboutUs} />
        <Route path='/snowreports' component={UserIsAuthenticated(SnowReports)} />
        <Route path='/user_update' component={UserIsAuthenticated(UserUpdate)} />
        <Route path='/user_profile' component={UserIsAuthenticated(UserProfile)} history={browserHistory} />
        <Route component={SetTrips}>
          <Route path='/searchtrips' component={UserIsAuthenticated(SearchTrips)} />
          <Route path='/trips' component={UserIsAuthenticated(Trips)} />
          <Route path='/trips/:id' component={UserIsAuthenticated(Trip)} />
          <Route path='/showtrip/:id' component={UserIsAuthenticated(ShowTrip)} />
          <Route path='/newtrip' component={UserIsAuthenticated(NewTrip)} />
          <Route path='/usertrips' component={UserIsAuthenticated(UserTrips)} />
          <Route path='/drivertrips' component={UserIsAuthenticated(DriverTrips)} />
          <Route path='/showdrivertrips/:id' component={UserIsAuthenticated(ShowDriverTrips)} />
          <Route path='/ridertrips' component={UserIsAuthenticated(RiderTrips)} />
          <Route path='/showridertrips/:id' component={UserIsAuthenticated(ShowRiderTrips)} />
          <Route path='/map' component={UserIsAuthenticated(GoogleMap)} />
        </Route>
        <Route path='/cars' component={UserIsAuthenticated(Cars)} />
        <Route path='/newcarform' component={UserIsAuthenticated(NewCarForm)} />
        <Route path='/editcarform/:id' component={UserIsAuthenticated(EditCarForm)} />
      </Route>
    </Route>
    <Route path="*" status={404} component={NoMatch} />
  </Route>
)
