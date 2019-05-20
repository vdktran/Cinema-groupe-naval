import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';
import Home from '../Home';
import Movies from '../Movies';
import InTheaters from '../InTheaters';
import Premiere from '../Premiere';
import Category from '../Category';
import Seances from '../Seances';
import TchiTcha from '../TchiTcha';
import Contact from '../Contact';
import Footer from './Footer';

import'./Navigation.css';

class Navigation extends Component {
    

    render() {
      return (
        
        
          <div className="Navigation">
          
          <Router>

            <Header/>
            
            <Route exact path="/" component={Home}/>
            <Route path="/Movies/" component={Movies} />
            <Route path="/InTheaters/" component={InTheaters} />
            <Route path="/Premiere/" component={Premiere} />
            <Route path="/Category/" component={Category}/>
            <Route path="/Seances/" component={Seances}/>
            <Route path="/TchiTcha/" component={TchiTcha}/>
            <Route path="/Contact/" component={Contact} />
               
            <Footer/>
            
            
          </Router>
        </div>
        
            
          );
        }

}

export default Navigation;