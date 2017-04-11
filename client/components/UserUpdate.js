import React from 'react';
import { Link } from 'react-router';
import { updateUser} from '../actions/user';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

class UserUpdate extends React.Component {
  state = { avatar: null };

  handleSubmit = (e) => {
    e.preventDefault();
    let first_name = this.refs.first_name.value;
    let last_name = this.refs.last_name.value;
    let avatar = this.state.avatar;
    this.props.dispatch(updateUser(first_name, last_name, avatar));
  }

  displayAvatar = (avatarUrl) => {
    if(avatarUrl)
      return(
        <div className='center'>
          <img className= 'responsive-img circle' width='300px' src={avatarUrl} alt='User Avatar Image' />
        </div>
      )
  }


  render() {
    let user = this.props.user;
    if(Object.keys(user).length) {
      let { first_name, last_name, avatar_url } = user;
      return(
        <div className='row body_width'>
          <div className='container'>
            <h3>Update Your Account</h3>
            { this.displayAvatar(avatar_url) }
            <form ref='signupForm' onSubmit={ this.handleSubmit }>
              <input ref='first_name' type='text' required placeholder='First Name' style={{fontSize:'25px'}} defaultValue={user.first_name} />
              <br />
              <input ref='last_name' type='text' required placeholder='Last Name' style={{fontSize:'25px'}} defaultValue={user.last_name} />
              <br />
              <h6>Upload a Photo of Yourself:</h6>
              <Dropzone
               multiple={false}
               onDrop={ (avatar) => this.setState({ avatar: avatar[0]} ) }>
                 {this.state.avatar ? <img className='responsive-img' src={this.state.avatar.preview} /> : 'drop or click to select avatar'}
               </Dropzone>
              <input type='submit' className='btn blue-grey darken-3' value='Update Profile'/>
              <Link to={'/user_profile'} className='btn grey darken-2'>Cancel</Link>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserUpdate);
