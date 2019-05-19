import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewsletterAdminMenu from './NewsletterAdminMenu';
import AddNewsletter from './AddNewsletter';
import UpdateNewsletter from './UpdateNewsletter';
import RemoveNewsletter from './RemoveNewsletter';

export default class NewsletterAdmin extends Component {
  
    render() {
      return (
        <div>
        <div class="titleAdmin"> <p class="titlep">Newsletter</p>
        </div>
        <header class="block">
        <Router>
          <NewsletterAdminMenu/>
          <Route exact path='/' component={AddNewsletter}/>
          <Route path='/update' component={UpdateNewsletter}/>
          <Route path='/remove' component={RemoveNewsletter}/>
        </Router>
        </header>
      </div>
      );
    }
  }