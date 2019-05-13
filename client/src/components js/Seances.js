import React, {Component} from 'react';
import './Seances.css';

class Seances extends Component {
  constructor(props) {
    super(props);
    this.state = {films: []};
  }

  handleClick = () => {
    
  };

  componentDidMount() {
    fetch('/seances')
      .then(res => res.json())
      .then(films => this.setState({ films }));
  }

  render() {
    return (
      <div className="Seances_wrapper">
        <div className="Img_gallery">
        {this.state.films.map(film =>
          <div key={film.film_id} className="Img_container">
          <img key={film.film_id} src={film.img_affiche}></img>
          </div>
        )}
        </div>
      </div>
    );
  }
}

export default ImgGallery;
