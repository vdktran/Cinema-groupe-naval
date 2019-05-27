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
               
            </div>
        )
    }
}