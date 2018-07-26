import { FETCH_WEATHER } from './types';
import axios from 'axios';
import { weather_api } from '../config/keys';

// weather fetching action
export const weatherFetch = term => async dispatch => {

	// querying setup
	const city = term;
	const apikey = weather_api;
	const unit = 'metric';
	const apiQuery = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=${unit}`;

	// start axios request
	try{
		const respones = await axios.get(apiQuery);
		console.log('axios request success');
		const list = respones.data.list;
		const city = respones.data.city;

		const extractedData = {
			list: [...list],
			city: {...city}
		};

		console.log(extractedData);

		dispatch({
			type: FETCH_WEATHER,
			payload: extractedData
		});


	}catch(err){
		console.log('fetching weather data failed...');
	}

} // END OF 'weatherFetch()' action