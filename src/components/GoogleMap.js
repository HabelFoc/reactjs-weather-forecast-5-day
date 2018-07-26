import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


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
					bootstrapURLKEY={{ key: '<YOUR_GOOGLE_MAP_API_KEY>' }}
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