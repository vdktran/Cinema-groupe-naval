import React, { Component } from 'react';
import AddSessionPopup from './AddSessionPopup.js';

export default class AddSession extends Component {
  constructor(props) {
    super(props);
    this.state = { sessions: [] };
  }

  componentDidMount() {
    fetch('/seances')
      .then(res => res.json())
      .then(sessions => this.setState({ sessions }));
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
          <h1 className="titleCompo"> Toutes les séances : </h1>
          <div className="ListAdmin scrollbar" id="style-1">
            {this.state.sessions.map((session, index) =>
              <div key={index + 1} className="DataListAdmin"><p> {index + 1}) {session.titre} | La séance commence le {session.dayweek} {session.date_du_jour}</p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopup.bind(this)}> Ajouter </button>
          {this.state.showPopup ?
            <AddSessionPopup
              text='Ajouter une séance'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      </div>
    );
  }
}