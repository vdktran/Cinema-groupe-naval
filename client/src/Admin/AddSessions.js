import React, {Component} from 'react';
import AddSessionPopup from './AddSessionPopup.js';

export default class AddSession extends Component {
  constructor(props) {
    super(props);
    this.state = {films: []};
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
              <h1 className="titleCompo">Liste des films : </h1>
              <div className="ListFilmAdmin scrollbar" id="style-1">
                {this.state.films.map(film =>
                  <div key={film.film_id} className="DataListFilmAdmin"><p> {film.film_id} {film.titre}</p></div>
                )}
              </div>
              <button className="btn green rounded" onClick={this.togglePopup.bind(this)}> Ajouter </button>  
              {this.state.showPopup ?
                <AddSessionPopup   
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