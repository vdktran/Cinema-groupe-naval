import React, { Component } from 'react';


export default class SelectFormGenre extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.state = { genres: [] };
    }

    componentDidMount() {
        fetch('/genres')
            .then(res => res.json())
            .then(genres => this.setState({ genres }));
    }

    render() {
        return (
            <div>
                <label> Genre : </label>
                <select onChange={e => this.setState({ gender: e.target.value })} value={this.state.gender} name="genre">
                    {this.state.genres.map(gender =>
                        <option key={gender.genre_id} value={gender.genre_id}> {gender.genre_name}</option>
                    )}
                    {console.log(this.state.gender)}
                </select>
            </div>
        )
    }
}