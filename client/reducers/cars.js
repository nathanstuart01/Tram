const cars = (state = [], action) => {
  switch (action.type) {
    case 'GET_CARS':
      return action.cars;
    case 'ADD_CAR':
      return [action.car, ...state];
    case 'DELETE_CAR':
      return state.filter( car => {
        return car.id !== action.id;
      }) ;
    case 'UPDATE_CAR':
      return state;
    default:
      return state;
  }
}

export default cars;