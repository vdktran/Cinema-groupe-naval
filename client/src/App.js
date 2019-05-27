import React, { Component } from 'react';
import './App.css';
import LoadingPage from './LandingPage/LoadingPage';
import Admin from './Admin/Admin'

class App extends Component {

  render() {
    return (
      <div className="App">
        <LoadingPage />
      </div>
    );
  }
}

export default App;
