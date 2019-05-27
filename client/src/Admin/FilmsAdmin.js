import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FilmsAdminMenu from './FilmsAdminMenu';
import AddFilms from './AddFilms';
import UpdateFilms from './UpdateFilms';
import RemoveFilms from './RemoveFilms';

export default class FilmsAdmin extends Component {

  render() {
    return (
      <div>
        <div className="titleAdmin"> <p className="titlep">Films</p>
        </div>
        <header className="block">
          <Router>
            <FilmsAdminMenu />
            <Route path='/add' component={AddFilms} />
            <Route path='/update' component={UpdateFilms} />
            <Route path='/remove' component={RemoveFilms} />
          </Router>
        </header>
      </div>
    );
  }
}