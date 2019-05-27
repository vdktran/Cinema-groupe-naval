import React, { Component } from 'react';

import AddGenrePopup from './AddGenrePopup.js';
import AddSallePopup from './AddSallePopup.js';
import AddPrixPopup from './AddPrixPopup.js';

export default class AddMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      prix: [],
      salles: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch('/genres'),
      fetch('/prix'),
      fetch('/salles'),
    ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([data1, data2, data3]) => this.setState({
        genres: data1,
        prix: data2,
        salles: data3
      }));
  }

  togglePopupGenre() {
    this.setState({
      showPopupGenre: !this.state.showPopupGenre
    });
  }

  togglePopupSalle() {
    this.setState({
      showPopupSalle: !this.state.showPopupSalle
    });
  }

  togglePopupPrix() {
    this.setState({
      showPopupPrix: !this.state.showPopupPrix
    });
  }

  render() {
    return (
      <div className="cardsContainer">
        <div className="cards">
          <h1 className="titleCompo" >Tout les genres : </h1>
          <div className="ListAdminCards scrollbar" id="style-1">
            {this.state.genres.map((genre, index) =>
              <div key={index + 1} className="DataListAdmin"><p> {index + 1}. {genre.genre_name} </p> <div className="placeimg"><input className="imgAdmin" type='image' src="images/PannelAdmin/pen.png" /> <input className="imgAdmin" type='image' src="images/PannelAdmin/trash.png" /></div> </div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopupGenre.bind(this)}> Ajouter </button>
          {this.state.showPopupGenre ?
            <AddGenrePopup
              text='Ajouter un genre'
              closePopup={this.togglePopupGenre.bind(this)}
            />
            : null
          }
        </div>
        <div className="cards">
          <h1 className="titleCompo"> Toutes les salles : </h1>
          <div className="ListAdminCards scrollbar" id="style-1">
            {this.state.salles.map((sal, index) =>
              <div key={index + 1} className="DataListAdmin"><p> Salle {sal.salle_name}</p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopupSalle.bind(this)}> Ajouter </button>
          {this.state.showPopupSalle ?
            <AddSallePopup
              text='Ajouter une salle'
              closePopup={this.togglePopupSalle.bind(this)}
            />
            : null
          }
        </div>
        <div className="cards">
          <h1 className="titleCompo">Tout les tarifs</h1>
          <div className="ListAdminCards scrollbar" id="style-1">
            {this.state.prix.map((pri, index) =>
              <div key={index + 1} className="DataListAdmin"><p> {pri.nom_du_tarif} {pri.tarif} € </p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopupPrix.bind(this)}> Ajouter </button>
          {this.state.showPopupPrix ?
            <AddPrixPopup
              text='Ajouter un tarif'
              closePopup={this.togglePopupPrix.bind(this)}
            />
            : null
          }
        </div>
      </div>
    );
  }
}