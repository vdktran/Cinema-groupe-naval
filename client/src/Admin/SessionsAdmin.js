import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SeancesAdminMenu from './SessionsAdminMenu';
import AddSessions from './AddSessions';
import UpdateSessions from './UpdateSessions';
import RemoveSessions from './RemoveSessions';

export default class SessionsAdmin extends Component {

  render() {
    return (
      <div>
        <div className="titleAdmin"> <p className="titlep">Séances</p>
        </div>
        <header className="block">
          <Router>
            <SeancesAdminMenu />
            <Route path='/add' component={AddSessions} />
            <Route path='/update' component={UpdateSessions} />
            <Route path='/remove' component={RemoveSessions} />
          </Router>
        </header>
      </div>
    );
  }
}