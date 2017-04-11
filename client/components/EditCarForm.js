import React from 'react';
import { updateCar } from '../actions/cars';
import { connect } from 'react-redux';
import { Link } from 'react-router'


class EditCarForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = { car: {} };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url:`/api/cars/${this.props.params.id}`,
      type: 'GET'
    }).done( car => {
      this.setState({ car });
    })
  }

  editCar = (id) => {
    this.props.dispatch(updateCar(id));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let make = this.refs.make.value;
    let model = this.refs.model.value;
    let four_by_four = this.refs.four_by_four.value; 
    let chains = this.refs.chains.value;
    let id = this.props.params.id;
    this.props.dispatch(updateCar( id, make, model, four_by_four, chains));
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({car: {...this.state.car, [name]: value } })
  }
  render() {
    let car = this.state.car;
    if(Object.keys(car).length) {
      return(
        <div className='body_width'>
          <form className="center" onSubmit={this.handleSubmit} ref={ c => this.form = c }>
            <label>Make</label>
              <input ref='make' placeholder="Your Car Make?" defaultValue={car.make} required />
            <label>Model</label>
              <input ref='model' placeholder="Your Car Model?" defaultValue={car.model} required />
            <input
              defaultValue={car.four_by_four}
              type="checkbox"
              name="four_by_four"
              checked={this.state.car.four_by_four}
              onChange={this.handleInputChange}
              ref='four_by_four'
              id="test5"
            />
            <label htmlFor='test5'>Four Wheel Drive? </label><br />
            <input 
              type="checkbox" 
              name="chains"
              defaultValue={car.chains}
              checked={this.state.car.chains}
              onChange={this.handleInputChange}
              ref='chains'
              id="test6"
            />
            <label htmlFor='test6'>Chains On Wheels? </label>
              <div>
                <Link to='/cars' className='btn grey darken-2'>Cancel</Link>
                <button className="btn blue-grey darken-3">Submit</button>
              </div>
          </form>
        </div>
      )
    } else {
      return(<h3>Loading Car...</h3>);
    }
  }
}



export default connect()(EditCarForm);