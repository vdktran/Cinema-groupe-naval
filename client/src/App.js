import React, {Component} from 'react';
import './App.css';
import SeanceCard from './components js/SeanceCard.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <SeanceCard></SeanceCard>
      </div>
    );
  }
}

export default App;
