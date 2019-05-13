import React, {Component} from 'react';
import './SeanceCard.css';

class SeanceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {seances: []};
  }

  componentDidMount() {
    fetch('/seances')
      .then(res => res.json())
      .then(seances => this.setState({ seances }));
  }

  render() {
    return (
      <div className="Seances_wrapper">
        <div className="Seances_gallery">
        {this.state.seances.map(film =>
          <div key={film.film_id} className="Seances_card">
          <img key={film.film_id} src={film.img_affiche}></img>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default SeanceCard;