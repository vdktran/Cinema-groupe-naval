import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewsletterAdminMenu from './NewsletterAdminMenu';
import SendNewsletter from './AddNewsletter';
import UpdateNewsletter from './UpdateNewsletter';
import RemoveNewsletter from './RemoveNewsletter';

export default class NewsletterAdmin extends Component {

  render() {
    return (
      <div>
        <div className="titleAdmin"> <p className="titlep">Newsletter</p>
        </div>
        <header className="block">
          <Router>
            <NewsletterAdminMenu />
            <Route exact path='/' component={SendNewsletter} />
            <Route path='/update' component={UpdateNewsletter} />
            <Route path='/remove' component={RemoveNewsletter} />
          </Router>
        </header>
      </div>
    );
  }
}