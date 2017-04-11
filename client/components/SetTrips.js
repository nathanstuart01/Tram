import React from 'react';
import { connect } from 'react-redux';
import { getTrips } from '../actions/trips';
import { getMessages } from '../actions/messages';

class SetTrips extends React.Component {
  constructor(props) {
    super(props);
    this.subscriptions = [];
    window.beforeunload = () => { this.killSubcriptions() }
  }

  componentWillMount() {
    this.props.dispatch(getTrips());
    this.props.dispatch(getMessages());
  }

  componentDidMount() {
    this.createSubscriptions();
  }

  componentDidUpdate() {
    this.createSubscriptions();
  }

  componentWillUnmount() {
    this.killSubcriptions();
  }

  killSubcriptions = () => {
    this.subscriptions.forEach( (sub) => {
      MessageBus.unsubscribe(`trip_${sub}`);
    });


    while (MessageBus.callbacks.length) {
      MessageBus.callbacks.map( b => {
        MessageBus.unsubscribe(b.channel)
      })
    }

    this.subscriptions = [];
  }

  createSubscriptions = () => {
    let { trips, user } = this.props;
    let myTrips = trips.filter( t => t.user_id === user.id || t.rider_ids.includes(user.id) ).map( t => { return t.id })
    myTrips.forEach( id => {
      if (!this.subscriptions.includes(id)) {
       this.subscriptions.push(id);
        MessageBus.subscribe(`trip_${id}`, data => {
          switch(Object.keys(data)[0]) {
            case 'message': {
              let { messages } = this.props
              let messageIds = messages.map( m => { return m.id })
              if (!messageIds.includes(data.message.id)) {
                this.props.dispatch({ type: 'ADD_MESSAGE', message: data.message });
              }
            }
          }
        })
      }
    })
  }

  render() {
    return(
      <div className='body_width'>
        { this.props.children }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { trips: state.trips, user: state.user, messages: state.messages };
}

export default connect(mapStateToProps)(SetTrips);
