import React, {Component} from 'react';
import './Seances.css';

class Seances extends Component {
  constructor(props) {
    super(props);
    this.state = {seances: []};
  }

  handleClick = () => {
    
  };

  componentDidMount() {
    fetch('/seances')
      .then(res => res.json())
      .then(films => this.setState({ seances }));
  }

  render() {
    return (
      <div className="Seances_wrapper">
        <div className="Seances_gallery">
        {this.state.seances.map(film =>
          <div key={film.film_id} className="_container">
          <img key={film.film_id} src={film.img_affiche}></img>
            this.state.seances.map()
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default ImgGallery;
