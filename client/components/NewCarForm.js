import React from 'react';
import { connect } from 'react-redux';
import { addCar, updateCar } from '../actions/cars';
import { Link } from 'react-router'

class NewCarForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = { chains: false, four_by_four: false }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let make = this.refs.make.value;
    let model = this.refs.model.value;
    let four_by_four = this.state.four_by_four; 
    let chains = this.state.chains;
    this.props.dispatch(addCar(make, model, four_by_four, chains));
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value  })
  }

  render() {
    let car = this.props.car || {};
    return(
      <div className='body_width'>
        <form className="center" onSubmit={this.handleSubmit} ref={ c => this.form = c }>
          <label>Make</label>
            <input ref='make' placeholder="Your Car Make?" required />
          <label>Model</label>
            <input ref='model' placeholder="Your Car Model?" required />
            <input
              type="checkbox"
              name="four_by_four"
              onChange={this.handleInputChange}
              id="test5"
            />
            <label htmlFor='test5'>Four Wheel Drive</label>
              <input 
                type="checkbox" 
                name="chains"
                onChange={this.handleInputChange}
                id="test6"
              />
              <label htmlFor='test6'>Chains On Wheels?</label>
            <div>
              <button className="btn blue-grey darken-3">Submit</button>
              <Link to='user_profile' className='btn grey darken-2'>Cancel</Link>
            </div>
        </form>
      </div>
    )
  }
}

export default connect()(NewCarForm);