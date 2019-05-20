import React, { Component } from 'react';
import Logo from '../img/clapperboard.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component {
    

    render() {
        return (
        
        
            <div className="Header">
          

                    <header>

                        <ul className="HeaderList">

                            <img id="navLogo" src={Logo} alt="A logo" />
                            <li className="HeaderLink"><Link to="/">Home</Link></li>
                            <li className="HeaderLink"><Link to="/Movies/">Movies</Link></li>
                            <li className="HeaderLink"><Link to="/InTheaters/">In theaters</Link></li>
                            <li className="HeaderLink"><Link to="/Premiere/">Premiere</Link></li>
                            <li className="HeaderLink"><Link to="/Category/">Category</Link></li>
                            <li className="HeaderLink"><Link to="/Seances/">Seances</Link></li>
                            <li className="HeaderLink"><Link to="/TchiTcha/">Tchi Tcha</Link></li>
                            <li className="HeaderLink"><Link to="/Contact/">Contact</Link></li>
                        
                        </ul>

              
     

                    </header>
            </div>


          
        );
    }

}
              
export default Header;