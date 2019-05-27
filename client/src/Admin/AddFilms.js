import React, { Component } from 'react';

import AddFilmPopup from './AddFilmPopup.js';

export default class AddFilms extends Component {
  constructor(props) {
    super(props);
    this.state = { films: [] };
  }

  componentDidMount() {
    fetch('/films')
      .then(res => res.json())
      .then(films => this.setState({ films }));
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
          <h1 className="titleCompo">Tout les films : </h1>
          <div className="ListAdmin scrollbar" id="style-1">
            {this.state.films.map((film, index) =>
              <div key={index + 1} className="DataListAdmin"><p> {index + 1} {film.titre}</p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopup.bind(this)}> Ajouter </button>
          {this.state.showPopup ?
            <AddFilmPopup
              text='Ajouter un film'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      </div>
    );
  }
}