import React from 'react';
import GoogleMapReact from 'google-map-react';
import { setFlash } from '../actions/flash';
import { connect } from 'react-redux';
import Icon from '../images/car_share.png';
import TripStartMarker from '../images/trip_start_icon.png';


const Marker = ({ text }) => {
  return (
  <div>
  <img src={Icon} />
  </div>
  )
}


class GoogleMap extends React.Component {
  static defaultProps = {
    center: { lat: 40.7609915, lng: -111.8828799 },
    zoom: 16
  }

  componentDidMount() {
    if(this.props.trip)
      this.setState({center: {lat: this.props.trip.latitude, lng: this.props.trip.longitude}, address: this.props.trip.start_address})
  }

  state = {
    center: this.props.center,
    zoom: this.props.zoom,
    address: ''
  }

  createMapOptions() {
    return {
      panControl: true,
      mapTypeControl: true,
      scrollWheel: true
    }
  }

  findAddress = (e) => {
    e.preventDefault();
    let { dispatch } = this.props;
    let address = this.refs.address.value;

    $.ajax({
      url: '/api/location',
      type: 'GET',
      dataType: 'JSON',
      data: { address }
    }).done( data => {
      this.setState({ address, center: { lat: data[0], lng: data[1] } });
      dispatch(setFlash('Address Found!', 'success'));
    }).fail( data => {
      dispatch(setFlash('Error finding address. Try again!', 'error'));
    });
  }

    render() {
    let { center, zoom, address } = this.state;
    if(this.props.trip.latitude && this.props.trip.longitude) {
      return(
        <div>
          <h5 className='center'>Trip Start Location <img src={TripStartMarker} /> </h5>
          <div className='z-depth-3'style={{ height: '500px', width: '450px', margin: '0 auto' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyBVRhwQzPIXaqsBTdjmDNpL4ouA3na0N6A'
              }}
              options={this.createMapOptions}
              defaultCenter={center}
              defaultZoom={zoom}
              center={center}
            >
              <Marker
                lat={this.props.trip.latitude}
                lng={this.props.trip.longitude}
                text={this.props.trip.name}
              />
            </GoogleMapReact>
          </div>
        </div>
      );
    } else {
      return(<div>Trip Start Address Not Found, Please Re-enter Trip Start Address</div>)
    }

  }
}


export default connect()(GoogleMap);
