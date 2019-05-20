import React, { Component } from 'react';
import './Footer.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends Component {
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
        
        
          <div className="Footer">
          
          <Router>
                  <footer>
                      <h1>Tchi Tcha</h1>
          <ul>
              
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/Movies/">Movies</Link></li>
              <li><Link to="/Seances/">Seances</Link></li>
            <li><Link to="/TchiTcha/">Tchi Tcha</Link></li>
            <li><Link to="/Contact/">Contact</Link></li>
                          
            </ul>
                      
                     
                  
                      <label for="Newsletter">Newsletter</label>
                      <input type="text" id="email" name="email" required minlength="8" maxlength="20" size="30"></input>
                    
         
                  </footer>
                  </Router>
          </div>
            
          );
        }

}

export default Footer;