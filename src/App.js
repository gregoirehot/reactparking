import React, { Component } from 'react';
import Table from './composants/Table'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { parkings: [] };
  }

  componentDidMount() {
    this.fetchJson().then(p => {
      if (p) {
        this.setState({
          parkings: p
        })
      }
    }
    );

  }

  fetchJson() {
    return fetch("http://localhost:3001/parkings").then(response =>
      response.json()
    ).catch(e => console.error(e))
  }

  render() {
    return (
      <div className="App">
        <Table parkings={this.state.parkings} />
      </div>
    );
  }
}

export default App;
