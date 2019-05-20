import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Footer.css';

class Footer extends Component {
    

    render() {
        return (
        
        
            <div className="Footer">
          
              

                    <footer>

                        <ul className="FooterList">

                            <li className="FooterLink"><Link to="/">Home</Link></li>
                            <li className="FooterLink"><Link to="/Movies/">Movies</Link></li>
                            <li className="FooterLink"><Link to="/Seances/">Seances</Link></li>
                            <li className="FooterLink"><Link to="/TchiTcha/">Tchi Tcha</Link></li>
                            <li className="FooterLink"><Link to="/Contact/">Contact</Link></li>
                        
                        </ul>



                    </footer>
              
            </div>


          
        );
    }

}
              
export default Footer;