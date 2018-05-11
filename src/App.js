import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Container from './Container';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Route>
        <Container />
      </Route>
      </div>
    );
  }
}

export default App;
