import React, { Component } from 'react';
import './SeanceCard.css';
import Seances from './Seances.js';

class SeanceCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      whatday: 'Lundi',
    };

  }

  UpdateSeanceCard() {
    this.setState({
      whatday: this.props.whatday
    }, function () {
      console.log("SeancesCard Didupdate whatday: " + this.state.whatday);

      fetch('/films/filmsoftheday/'+ this.props.whatday)
        .then(res => res.json())
        .then(films => {      
            this.setState({ films })
        });

    });
  }

  componentDidMount() {
    console.log("SeancesCard Didmount " + this.state.whatday);
      this.UpdateSeanceCard();
  }


  componentDidUpdate(prevProps, prevState) {

    console.log("prevstate " + (prevState.whatday !== this.state.whatday))
    if(prevProps.whatday !== this.props.whatday) {
      this.UpdateSeanceCard();
    }

    console.log("SeancesCard Didupdate films" + this.state.films);
  }


  // componentWillReceiveProps({whatday}) {
  //   this.setState({...this.state,whatday})
  // }


  render() {
    return (
      <div className="Seances_gallery">
        {this.state.films.map(film =>
          <div key={film.film_id} className="Seances_card">
            <img key={film.film_id} src={film.img_affiche}></img>
            <div className="Seances_wrapper">
              <div className="Seances_title">{film.titre}</div>
              <Seances whatseance={film.film_id} whatday={this.state.whatday}></Seances>
            </div>
          </div>
        )}
      </div>
    );
  }
}

SeanceCard.defaultProps = {
  whatday: 'Lundi'
}



export default SeanceCard;