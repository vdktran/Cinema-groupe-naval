import React, {Component} from 'react';
import './App.css';
import SeancesTab from './components js/SeancesTab.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <SeancesTab></SeancesTab>
      </div>
    );
  }
}

export default App;
