import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Footer.css';
import '../Newsletter.css';
import Newsletter from '../Newsletter';

class Footer extends Component {
    

    render() {
        return (
        
        
            <div className="Footer">
          
              

                    <footer>

                        <ul className="FooterList">

                            <Newsletter className="NewsletterLi"></Newsletter>
                            <li className="FooterLi"><Link to="/" className="FooterLink">Home</Link></li>
                            <li className="FooterLi"><Link to="/Movies/" className="FooterLink">The Movies</Link></li>
                            <li className="FooterLi"><Link to="/Seances/" className="FooterLink">Seances</Link></li>
                            <li className="FooterLi"><Link to="/TchiTcha/" className="FooterLink">About Us</Link></li>
                            <li className="FooterLi"><Link to="/Contact/" className="FooterLink">Contact Us</Link></li>
                            
                            
                    </ul>
                   

                    </footer>
              
            </div>


          
        );
    }

}
              
export default Footer;