import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BookingAdminMenu from './BookingAdminMenu';
import AddBooking from './AddBooking';
import UpdateBooking from './UpdateBooking';
import RemoveBooking from './RemoveBooking';

export default class BookingAdmin extends Component {

  render() {
    return (
      <div>
        <div className="titleAdmin"> <p className="titlep">Reservations</p>
        </div>
        <header className="block">
          <Router>
            <BookingAdminMenu />
            <Route exact path='/' component={AddBooking} />
            <Route path='/update' component={UpdateBooking} />
            <Route path='/remove' component={RemoveBooking} />
          </Router>
          {/*   <div class="profile-menu">
            <p>Me <a href="#26"><span class="entypo-down-open scnd-font-color"></span></a></p>
            <div class="profile-picture small-profile-picture">
                <img width="40px" alt="Anne Hathaway picture" src="http://upload.wikimedia.org/wikipedia/commons/e/e1/Anne_Hathaway_Face.jpg"/>
            </div>
        </div> */}
        </header>
      </div>
    );
  }
}