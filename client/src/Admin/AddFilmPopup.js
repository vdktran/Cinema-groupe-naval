import React, { Component } from 'react';


export default class AddFilmPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            date: '',
            gender_id: 1,
            dimension_id: 1,
            statut_id: 1,
            langage_id: 1,
            synopsis: '',
            imgPoster: '',
            imgBackground: '',
            imgSlider: ''
        };
        this.state = {
            genres: [],
            langues: [],
            dimensions: [],
            status: []
        };
        this.postContact = this.postContact.bind(this);
    }

    postContact(event) {
        event.preventDefault();
        fetch("/films", {
            method: 'POST',
            /* headers: {'Content-Type': 'application/json'}, */
            body: JSON.stringify(this.state)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
            if (data === "success") {
                this.setState({ msg: "CA MARCHE" });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }

    componentDidMount() {
        Promise.all([
            fetch('/genres'),
            fetch('/langues'),
            fetch('/dimension'),
            fetch('/status')
        ])
            .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
            .then(([data1, data2, data3, data4]) => this.setState({
                genres: data1,
                langues: data2,
                dimensions: data3,
                status: data4
            }));
    }

    render() {
        return (
            <div className='popup'>
                {console.log(this.state.genres)}
                <div className='innerPopup'>
                    <h1>{this.props.text}</h1>
                    <form autoComplete="off" onSubmit={this.postContact} method="POST">
                        <label> Titre : </label>
                        <input id="titreAddFilm" name="titre" onChange={e => this.setState({ title: e.target.value })} value={this.state.title} type="text" />

                        <label> Genre : </label>
                        <select onChange={e => this.setState({ gender: e.target.value })} value={this.state.gender} name="genre">
                            {this.state.genres.map(genre =>
                                <option key={genre.genre_id} value={genre.genre_id}> {genre.genre_name}</option>
                            )}
                        </select>

                        <label> Langue : </label>
                        <select onChange={e => this.setState({ langage: e.target.value })} value={this.state.langage} name="langue">
                            {this.state.langues.map(langue =>
                                <option key={langue.langue_id} value={langue.langue_id}> {langue.langues_name} </option>
                            )}
                        </select>

                        <label> Dimension : </label>
                        <select onChange={e => this.setState({ dimension: e.target.value })} value={this.state.dimension} name="dimension">
                            {this.state.dimensions.map(dim =>
                                <option key={dim.dimension_id} value={dim.dimension_id}> {dim.dimension_name} </option>
                            )}
                        </select>

                        <label> Date de sortie : </label>
                        <input id="dateDeSortieAddFilm" name="dateSortie" onChange={e => this.setState({ date: e.target.value })} value={this.state.date} type="text" />

                        <label> Synopsis : </label>
                        <input id="synopsisAddFilm" name="synopsis" onChange={e => this.setState({ synopsis: e.target.value })} value={this.state.synopsis} type="text" />

                        <label> Status : </label>
                        <select onChange={e => this.setState({ statut: e.target.value })} value={this.state.statut} name="genre">
                            {this.state.status.map(stat =>
                                <option key={stat.statut_id} value={stat.statut_name}> {stat.statut_name}</option>
                            )}
                        </select>

                        <label> Image Affiche : </label>
                        <input id="imgAfficheAddFilm" name="imgAffiche" onChange={e => this.setState({ imgPoster: e.target.value })} value={this.state.imgPoster} type="file" />

                        <label> Image Background : </label>
                        <input id="imgBackgroundAddFilm" name="imgBackground" onChange={e => this.setState({ imgBackground: e.target.value })} value={this.state.imgBackground} type="file" />

                        <label> Image Slider : </label>
                        <input id="imgSliderAddFilm" name="imgSlider" onChange={e => this.setState({ imgSlider: e.target.value })} value={this.state.imgSlider} type="file" />

                        <input type="submit" value="valider" />
                    </form>
                    <button className="btn green rounded" onClick={this.props.closePopup}> Quitter </button>
                </div>
            </div>
        );
    }
};