import React, { Component } from 'react';

// stylings
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styling
import { Provider } from 'react-redux'; // redux container
// custom components
import SearchBar from './components/SearchBar'; 
import WeatherList from './components/WeatherList';
import store from './store'; // redux store


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <SearchBar />
            <WeatherList />
        </div>
      </Provider>
    );
  }
}


export default App;
