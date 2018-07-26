import { combineReducers } from 'redux';
import WeatherData from './weather_data';

export default combineReducers({
	weather_data: WeatherData
});