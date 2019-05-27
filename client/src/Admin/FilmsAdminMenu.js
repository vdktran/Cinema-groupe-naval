import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class FilmsAdminMenu extends Component {

    render() {
        return (
            <ul className="header-menu horizontal-list">
                <li>
                    <Link to='/add' className="header-menu-tab" href="#1"><span className="icon entypo-cog scnd-font-color"></span>Ajouter</Link>
                </li>
                <li>
                    <Link to='/update' className="header-menu-tab" href="#2"><span className="icon entypo-cog scnd-font-color"></span>Modifier</Link>
                </li>
                <li>
                    <Link to='remove' className="header-menu-tab" href="#3"><span className="icon entypo-cog scnd-font-color"></span>Supprimer</Link>
                    {/*                         <a className="header-menu-number" href="#4">5</a> */}
                </li>
            </ul>
        );
    }
}