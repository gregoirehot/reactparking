import React, { Component } from 'react';
import TableParking from './containers/TableParking';
import ScoreBoard from './containers/ScoreBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableParking />
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
