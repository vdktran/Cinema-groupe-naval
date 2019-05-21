import React, {Component} from 'react';

import AddMorePopup from './AddMorePopup.js';

export default class AddMore extends Component {
  constructor(props) {
    super(props);
    this.state = {reservations: []};
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
              <h1 className="titleCompo">Liste des films : </h1>
              <div className="ListAdmin scrollbar" id="style-1">
                {this.state.reservations.map(resa =>
                  <div key={resa.reservations_id} className="DataListAdmin"><p> {resa.titre} {resa.users_nom} {resa.users_prenom} {resa.date_du_jour}</p></div>
                )}
              </div>
              <button className="btn green rounded" onClick={this.togglePopup.bind(this)}> Ajouter </button>  
              {this.state.showPopup ?
                <AddMorePopup   
                  text='Ouais le popup ouais'  
                  closePopup={this.togglePopup.bind(this)}
                />  
                : null  
              }  
            </div>
        </div>
      );
    }
  }