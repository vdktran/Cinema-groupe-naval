import React, { Component } from 'react';

import AddStatusPopup from './AddStatusPopup.js';
import AddDimensionPopup from './AddDimensionPopup.js';
import AddLanguePopup from './AddLanguePopup.js';

export default class UpdateMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      dimensions: [],
      langues: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch('/status'),
      fetch('/dimension'),
      fetch('/langues'),
    ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([data1, data2, data3]) => this.setState({
        status: data1,
        dimensions: data2,
        langues: data3
      }));
  }

  togglePopupStatu() {
    this.setState({
      showPopupStatu: !this.state.showPopupStatu
    });
  }

  togglePopupDim() {
    this.setState({
      showPopupDim: !this.state.showPopupDim
    });
  }

  togglePopupLan() {
    this.setState({
      showPopupLan: !this.state.showPopupLan
    });
  }

  render() {
    return (
      <div className="cardsContainer">
        <div className="cards">
          <h1 className="titleCompo" >Tout les statut : </h1>
          <div className="ListAdminCards scrollbar" id="style-1">
            {this.state.status.map((stat, index) =>
              <div key={index + 1} className="DataListAdmin"><p> {index + 1}. {stat.statut_name}</p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopupStatu.bind(this)}> Ajouter </button>
          {this.state.showPopupStatu ?
            <AddStatusPopup
              texte='Ajouter un statut'
              closePopup={this.togglePopupStatu.bind(this)}
            />
            : null
          }
        </div>
        <div className="cards">
          <h1 className="titleCompo"> Les Dimension : </h1>
          <div className="ListAdminCards scrollbar" id="style-1">
            {this.state.dimensions.map((dim, index) =>
              <div key={index + 1} className="DataListAdmin"><p> 1. {dim.dimension_name}</p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopupDim.bind(this)}> Ajouter </button>
          {this.state.showPopupDim ?
            <AddDimensionPopup
              text='Ajouter une dimension'
              closePopup={this.togglePopupDim.bind(this)}
            />
            : null
          }
        </div>
        <div className="cards">
          <h1 className="titleCompo">Toutes les langues : </h1>
          <div className="ListAdminCards scrollbar" id="style-1">
            {this.state.langues.map((lan, index) =>
              <div key={index + 1} className="DataListAdmin"><p>  {index + 1}. {lan.langues_name} </p></div>
            )}
          </div>
          <button className="btn green rounded" onClick={this.togglePopupLan.bind(this)}> Ajouter </button>
          {this.state.showPopupLan ?
            <AddLanguePopup
              texte='Ajouter une langue'
              closePopup={this.togglePopupLan.bind(this)}
            />
            : null
          }
        </div>
      </div>
    );
  }
}