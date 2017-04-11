import React from 'react';
import NewCarForm from './NewCarForm';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getCars, deleteCar } from '../actions/cars';
import EditCarForm from './EditCarForm';


class Cars extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCars());
  }

  removeCar = (id) => {
    this.props.dispatch(deleteCar(id));
  }

  showChains = (id) => {
    let chains = this.props.car.chains
    if (chains === true)  {
      return 'Chains'
    } else {
      return 'No Chains'
    }
  }

  showFourWheelDrive = (id) => {
    let fourWheelDrive = this.props.car.four_by_four
    if (fourWheelDrive === true) {
      return '4WD'
    } else {
      return 'No 4WD'
    }
 }


  render() {
    let car = this.props.car || {};
    if(Object.keys(car).length !== 0) {
      return (
        <div className='body_width'>
          <ul>
            <div className='cars_header'>
              <h4 className='cars_header'>Manage Your Car</h4>
            </div>
            <hr />
            <div className='body_width'>
              <li><h5><u>{car.make} {car.model}</u></h5></li>
              <li><h6>{this.showChains(car.id)}</h6></li>
              <li><h6>{this.showFourWheelDrive(car.id)}</h6></li>
              <br />
              <Link to={`/editcarform/${car.id}`} className='btn blue-grey darken-3'>Edit Car</Link>
              <button onClick={ () => {this.removeCar(car.id)}} className='btn grey darken-2'>Delete</button><br /><br />
            </div>
          </ul>
        </div>
        )
      } else {
        return(<div><h4 className='cars_header center'>Add A Car</h4><br /><Link to='/newcarform' className='center cars_header manage_car btn blue-grey darken-3'>Add A Car</Link></div>);
      }

    }
  }

 

const mapStateToProps = (state) => {
  return { car: state.cars[0] }
}

export default connect(mapStateToProps)(Cars);