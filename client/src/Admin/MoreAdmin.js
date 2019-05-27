import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MoreAdminMenu from './MoreAdminMenu';
import AddMore from './AddMore';
import UpdateMore from './UpdateMore';
import RemoveMore from './RemoveMore';

export default class MoreAdmin extends Component {

  render() {
    return (
      <div>
        <div className="titleAdmin"> <p className="titlep titleStat">Autres</p>
        </div>
        <header className="block">
          <Router>
            <MoreAdminMenu />
            <Route exact path='/' component={AddMore} />
            <Route path='/update' component={UpdateMore} />
            <Route path='/remove' component={RemoveMore} />
          </Router>
        </header>
      </div>
    );
  }
}