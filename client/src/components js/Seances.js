import React, { Component } from 'react';
import './Seances.css';

class Seances extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seances: [],
      whatseance: 1,
      whatday: 'Lundi'
    };

  }

  UpdateSeances() {
    this.setState({
      whatseance: this.props.whatseance
    },
      function () {
        console.log("Seances Didupdate : " + this.props.whatseance + ' ' + this.props.whatday)
        fetch('/seances/seancesoftheday/' + this.props.whatday + '/' + this.props.whatseance)
          .then(res => res.json())
          .then(seances => {
              this.setState({ seances });
              console.log("RIGHT HERE " + this.state.seances)
            
          });
      });

  }

  componentDidMount() {
    this.UpdateSeances();
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevProps.whatday !== this.props.whatday || prevProps.whatseance !== this.props.whatseance) {
        this.UpdateSeances();
      }
 
  }

  render() {
    return (
      <div className="Seances_list">
        {this.state.seances.map(seance =>
          <div key={seance.seance_id} className="Seance_btn">{seance.horaires}</div>
        )}
      </div>
    );
  }
}

Seances.defaultProps = {
  whatday: 'Lundi',
  whatseance: 1
}

export default Seances;
