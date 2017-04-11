const trips = ( state = [], action ) => {
  switch ( action.type ) {
    case 'SHOW_TRIPS':
      return action.trips;
    case 'ADD_TRIP':
      return [action.trip, ...state];
    case 'DELETE_TRIP':
      return state;
    case 'EDIT_TRIP':
      return state;
    case 'ADD_RIDER':
      return [action.trip, ...state];
    case 'REMOVE_RIDER':
      return state;
    case 'FILTER_TRIPS':
      return state.filter( trip => {
        if(trip.name.toLowerCase().includes(action.term.toLowerCase()))
          return true;
      });
    default:
      return state;
  }
}

export default trips;
