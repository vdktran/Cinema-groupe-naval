import React, {Component} from 'react';  


export default class SelectFormFilm extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            film: '',
        };
        this.state = {films: []};
    }

    componentDidMount(){
        fetch('/films')
          .then(res => res.json())
          .then(films => this.setState({ films }));
    }

    render(){
        return (
            <div>
                <label> Film : </label>
                <select onChange={e => this.setState({ film: e.target.value })} value={this.state.value} name="film">
                    {this.state.films.map(Film =>
                        <option key={Film.film_id} value={Film.film_id}> {Film.titre} </option>
                )}
                    </select>
            </div>
        )
    }
}