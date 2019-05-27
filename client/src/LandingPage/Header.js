import React, { Component } from 'react';
/* import Logo from 'images/ImgLandingPage/lettering.svg'; */
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';

class Header extends Component {


    render() {
        return (


            <div className="Header">

                <header>


                    <ul className="HeaderList">


                        <Link to="/" className="HeaderLink"><img id="navLogo" src='images/ImgLandingPage/lettering.svg' alt="The logo of the Tchi Tcha" /></Link>
                        <li className="HeaderLi"><Link to="/" className="HeaderLink">HOME</Link></li>
                        <li className="HeaderLi"><Link to="/Movies/" className="HeaderLink">MOVIES</Link></li>
                        <li className="HeaderLi"><Link to="/InTheaters/" className="HeaderLink">IN THEATERS</Link></li>
                        <li className="HeaderLi"><Link to="/Premiere/" className="HeaderLink">PREMIERE</Link></li>
                        <li className="HeaderLi"><Link to="/Category/" className="HeaderLink">CATEGORY</Link></li>
                        <li className="HeaderLi"><Link to="/Seances/" className="HeaderLink">SEANCES</Link></li>
                        <li className="HeaderLi"><Link to="/TchiTcha/" className="HeaderLink">TCHI TCHA</Link></li>
                        <li className="HeaderLi"><Link to="/Contact/" className="HeaderLink">CONTACT</Link></li>

                    </ul>
                </header>




            </div>



        );
    }

}

export default Header;