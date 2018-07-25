import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';

const initialState = {};

const middlewares = [ReduxThunk];

const store = createStore(
	Reducers,
	initialState,
	applyMiddleware(...middlewares)
);


export default store;

