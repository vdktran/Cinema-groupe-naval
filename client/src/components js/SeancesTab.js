import React, {Component} from 'react';
import './SeancesTab.css';

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
      <div className="SeancesTab">
        <div className="SeancesNav">
            <div className="seancesday">Lundi</div>
            <div className="seancesday">Mardi</div>
            <div className="seancesday">Mercredi</div>
            <div className="seancesday">Jeudi</div>
            <div className="seancesday">Vendredi</div>
            <div className="seancesday">Samedi</div>
            <div className="seancesday">Dimanche</div>
        </div>
        <div className="versionsContainer">
            <button className="versionsBtn">Versions</button>
            <div className="versionsMenu">
                <button className="versionsItems">VF</button>
                <button className="versionsItems">VO</button>
            </div>
        </div>
      </div>
    );
  }
}

export default ImgGallery;
