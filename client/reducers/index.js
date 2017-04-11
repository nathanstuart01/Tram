import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth'
import flash from './flash';
import user from './user';
import trips from './trips';
import cars from './cars';
import messages from './messages';
import reports from './reports';
import remember from './remember';

const rootReducer = combineReducers({ routing: routerReducer, auth, flash, user, trips, cars, messages, reports, remember });

export default rootReducer;
