import React, {Component} from 'react';
import './App.css';
import ImgGallery from './components js/ImgGallery';
import Contact from './components js/Contact.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {films: []};
  }

  componentDidMount() {
    fetch('/films')
      .then(res => res.json())
      .then(films => this.setState({ films }));
  }

  render() {
    return (
      <div className="App">
        <Contact/>
      </div>
    );
  }
}

export default App;
