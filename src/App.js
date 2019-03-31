import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './TracfficLight.scss';
import TrafficLight from './components/TracfficLight';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <TrafficLight />
      </div>
    );

  }
}

export default App;
