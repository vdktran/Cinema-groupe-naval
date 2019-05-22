import React, { Component } from 'react';
import './App.css';
import SlickSlider from './components js/SliderHero';

//import ImgGallery from './components js/ImgGallery';
import Navigation from './components js/Navigation/Navigation';

import ImgGallery from './components js/ImgGallery';
import Nav from './components js/Nav';
import Footer from './components js/Footer';
import Cinema from './components js/Cinema';


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

        <Navigation />
        <SlickSlider/>
            
      </div>
    );
  }
}

export default App;
