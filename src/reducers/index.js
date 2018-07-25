import { combineReducers } from 'redux';
import WeatherData from './weatherData';

export default combineReducers({
	weather_data: WeatherData
});