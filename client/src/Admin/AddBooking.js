import React, { Component } from 'react';

import AddBookingPopup from './AddBookingPopup.js';

export default class AddBooking extends Component {
  constructor(props) {
    super(props);
    this.state = { reservations: [] };
  }

  componentDidMount() {
    fetch('/reservations')
      .then(res => res.json())
      .then(reservations => this.setState({ reservations }));
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <div className="containerMenu">
          <h1 className="titleCompo">Toutes les réservations : </h1>
          <div className="ListAdmin scrollbar" id="style-1">
            {this.state.reservations.map(resa =>
              <div key={resa.reservation_id} className="DataListAdmin"><p> {resa.titre} {resa.users_nom} {resa.users_prenom} {resa.date_du_jour}</p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopup.bind(this)}> Ajouter </button>
          {this.state.showPopup ?
            <AddBookingPopup
              text='Ajouter une reservation'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      </div>
    );
  }
}