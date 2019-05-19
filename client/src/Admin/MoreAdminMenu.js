import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class MoreAdminMenu extends Component {
  
    render() {
      return (
        <ul class="header-menu horizontal-list">
              <li>
                  <Link to='/' class="header-menu-tab" href="#1"><span class="icon entypo-cog scnd-font-color"></span>Ajouter</Link>
              </li>
              <li>
                  <Link to='/update' class="header-menu-tab" href="#2"><span class="icon entypo-cog scnd-font-color"></span>Modifier</Link>
              </li>
              <li>
                  <Link to='remove' class="header-menu-tab" href="#3"><span class="icon entypo-cog scnd-font-color"></span>Supprimer</Link>
{/*                         <a class="header-menu-number" href="#4">5</a> */}
              </li>
          </ul>
      );
    }
}