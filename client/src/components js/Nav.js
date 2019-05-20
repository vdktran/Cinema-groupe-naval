import React, { Component } from 'react';
import './Nav.css';
import Logo from './img/logo_tt.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { films: [] };
    }

    handleClick = () => {

    };

    componentDidMount() {
        fetch('films')
            .then(res => res.json())
            .then(films => this.setState({ films }));
    }

    render() {
      return (
        
        
          <div className="Nav">
          
          <Router>
            <header>
          <ul>
              <img id="navLogo" src={Logo} alt="A logo"/>
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Movies/">Movies</Link></li>
              <li><Link to="/InTheaters/">In theaters</Link></li>
              <li><Link to="/Premiere/">Premiere</Link></li>
              <li><Link to="/Category/">Category</Link></li>
              <li><Link to="/Seances/">Seances</Link></li>
              <li><Link to="/TchiTcha/">Tchi Tcha</Link></li>
              <li><Link to="/Contact/">Contact</Link></li>
              </ul>
              </header>
          </Router>
          </div>
            
          );
        }

}

export default Nav;