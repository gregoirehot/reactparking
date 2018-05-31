import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TableParking from './containers/TableParking';
import ScoreBoard from './containers/ScoreBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Parking App</Link>
              </li>
              <li>
                <Link to="/ScoreBoard">ScoreBoard App</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={TableParking} />
            <Route path="/ScoreBoard" component={ScoreBoard} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
