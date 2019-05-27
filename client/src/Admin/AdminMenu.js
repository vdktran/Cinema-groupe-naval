import React, {Component} from 'react';
import './AdminMenu.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class AdminMenu extends Component {

    render(){
        return (
            <div className="menu-box block">
                <h2 className="titular">MENU</h2>
                    <ul className="menu-box-menu">
                        <li>
                            <Link to='/' className="menu-box-tab" href="#6"><span className="icon fontawesome-envelope scnd-font-color"></span>Seances{/* <div className="menu-box-number">24</div> */}</Link>                            
                        </li>
                        <li>
                            <Link to='/Films' className="menu-box-tab" href="#8"><span className="icon entypo-paper-plane scnd-font-color"></span>Films{/* <div className="menu-box-number">3</div> */}</Link>                            
                        </li>
                        <li>
                            <Link to='/Reservations' className="menu-box-tab" href="#10"><span className="icon entypo-calendar scnd-font-color"></span>Reservations{/* <div className="menu-box-number">5</div> */}</Link>                            
                        </li>
                        <li>
                            <Link to='/News' className="menu-box-tab" href="#12"><span className="icon entypo-cog scnd-font-color"></span>Newsletter</Link>
                        </li>
                        <li>
                            <Link to='/Articles' className="menu-box-tab" href="#12"><span className="icon entypo-cog scnd-font-color"></span>Article</Link>
                        </li>
                        <li>
                            <Link to='/Stats' className="menu-box-tab" href="#13"><span className="icon entypo-chart-line scnd-font-color"></span>Autres</Link>
                        </li>                        
                    </ul>
            </div>
        )
    }
}