import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { google_api } from '../config/keys';


class GoogleMap extends Component{

	render(){
		const { lon, lat, city } = this.props;
		const center = {
			lat: lat,
			lng: lon
		}
		const zoom = 12;
		return(
			<div style={{width: '250px', height: '200px'}}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: google_api }}
					defaultCenter={center}
					defaultZoom={zoom}
				>
					<div lat={lat} lng={lon} text={city} />
				</GoogleMapReact>
			</div>
		);
	}
}


export default GoogleMap;