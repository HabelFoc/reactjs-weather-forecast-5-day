import { FETCH_WEATHER } from '../actions/types';


const initialState = [

];


export default (state = initialState, action) => {
	switch(action.type){
		case FETCH_WEATHER:
			return [ action.payload, ...state ];
		default:
			return state;
	}
}