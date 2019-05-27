import React, {Component} from 'react';
import './ImgGallery.css';

class ImgGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {films: []};
  }

  handleClick = () => {
    
  };

  componentDidMount() {
    fetch('/films')
      .then(res => res.json())
      .then(films => this.setState({ films }));
  }

  render() {
    return (
      <div className="App">
        <h1>Image Gallery</h1>
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
