import React, {Component} from 'react';
import './App.css';
import SeanceCard from './components js/SeanceCard.js';
import SeancesTab from './components js/SeancesTab.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      whatday:'Vendredi'
    };

    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(data){
    this.setState({
      whatday: data
    });
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.whatday !== this.state.whatday;
  }

  render() {
    return (
      <div className="App">
        <SeancesTab handlerFromParent={this.handleTab}></SeancesTab>
        <SeanceCard whatday={this.state.whatday}></SeanceCard>
      </div>
    );
  }
}

export default App;
