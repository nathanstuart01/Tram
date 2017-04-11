import React from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/user';

// use this HOC to verify authentication of user. 


class SetUser extends React.Component {
 componentWillMount() {
   this.props.dispatch(getUser());
 }

 render() {
   return(
     <div>
       { this.props.children }
     </div>
   );
 }
}

export default connect()(SetUser);