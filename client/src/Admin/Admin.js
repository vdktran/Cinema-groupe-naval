import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AdminMenu from './AdminMenu';
import SessionsAdmin from './SessionsAdmin';
import FilmsAdmin from './FilmsAdmin';
import BookingAdmin from './BookingAdmin';
import NewsletterAdmin from './NewsletterAdmin';
import MoreAdmin from './MoreAdmin';
import ArticleAdmin from './ArticleAdmin';
import './Admin.css';

export default class Admin extends Component {
  
    render() {
      return (
        <div className="AdminMenu">
        <Router>
          <AdminMenu/>
            <Route exact path='/' component={SessionsAdmin} />
            <Route path ='/Films' component={FilmsAdmin}/>
            <Route path='/Reservations' component={BookingAdmin}/>
            <Route path='/News' component={NewsletterAdmin}/>
            <Route path='/Articles' component={ArticleAdmin}/>
            <Route path='/Stats' component={MoreAdmin}/>
        </Router>
        </div>
      );
    }
  }
  