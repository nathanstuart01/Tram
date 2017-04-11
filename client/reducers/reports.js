const reports = ( state = [], action ) => {
  switch ( action.type ) {
    case 'SHOW_SNOW_REPORTS':
     return action.reports;
     default:
       return state;
     }
   }

export default reports;
