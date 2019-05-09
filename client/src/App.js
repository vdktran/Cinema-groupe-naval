import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {films: []};
  }

  componentDidMount() {
    fetch('/data')
      .then(res => res.json())
      .then(films => this.setState({ films }));
  }

  render() {
    return (
      <div className="App">
        <h1>Film</h1>
        {this.state.films.map(film =>
          <div key={film.film_id}>{film.titre}</div>
        )}
      </div>
    );
  }
}

export default App;
