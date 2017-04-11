import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getCars } from '../actions/cars';

class TripCar extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCars())
  }

  render() {
    return cars = this.props.cars.map( car => {
      return (
        <div key={car.id} className='body_width'>
          <li><h5><u>{car.make} {car.model}</u></h5></li>
          <br /><br />
        </div>
      );
    });
  }
}

const mapStateToProps = (state, props) => {
  return { cars: state.cars,
           car: state.cars.find(c => c.id == props.params.id) }
}

export default connect(mapStateToProps)(TripCar);