import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Container,
	Table,
} from 'reactstrap';
import uuid from 'uuid';
import styled from 'styled-components';

import Chart from './Chart';

const StyledTableHead = styled.thead`
	color: #3763B7 !important;
`;

class WeatherList extends Component{
	constructor(props){
		super(props);

		// binding context 
		this.renderWeatherList = this.renderWeatherList.bind(this);
		this.state = {
			displayWeather: false
		}
	}

	// render weather list
	renderWeatherList(weatherData){
		if(this.props.weather_data !== []){
		const city = weatherData.city.name;
		const temps = weatherData.list.map(data => data.main.temp);
		const humidities = weatherData.list.map(data => data.main.humidity);
		const pressures = weatherData.list.map(data => data.main.pressure);

		console.log(temps)
		console.log(humidities)
		console.log(pressures)

		// javascript unit symbols
		const celsius = '℃';
		const humidity = '%';
		const pressure = 'hPa';
		
			return(
				<tr key={uuid()}>
					<td>{city}</td>
					<td><Chart data={temps} color="orange" units={celsius}/></td>
					<td><Chart data={humidities} color="green" units={humidity} /></td>
					<td><Chart data={pressures} color="black" units={pressure} /></td>
				</tr>
			);
		}else{
			return false;
		}
	}

	render(){
		return(
			<div>
				<Container>
					<Table striped style={{textAlign: 'center'}}>
						<StyledTableHead>
							<tr>
								<th>City</th>
								<th>Temperature &#8451; (Celsius)</th>
								<th>Humidity (%)</th>
								<th>Pressure (hPa)</th>
							</tr>
						</StyledTableHead>
						<tbody>
							{this.props.weather_data.map(this.renderWeatherList)}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}
}


const actions = {
	//
};

const mapStateToProps = ({ weather_data }) => ({
	weather_data: weather_data
});


export default connect(mapStateToProps, actions)(WeatherList);