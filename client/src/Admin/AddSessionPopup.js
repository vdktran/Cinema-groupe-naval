import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default class AddSessionPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            salle: '',
            film: '',
            startdate: new Date(),
            dayweek: '',
            dimension: '',
            langue: '',
            capacite: 0,
            msg: ''
        };
        this.state = {
            films: [],
            salles: [],
            dimensions: [],
            language: []
        };
        this.postSession = this.postSession.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlesalle = this.handlesalle.bind(this);
    }

    componentDidMount() {
        Promise.all([
            fetch('/salles'),
            fetch('/films'),
            fetch('/dimension'),
            fetch('/langues')
        ])
            .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
            .then(([data1, data2, data3, data4]) => this.setState({
                salles: data1,
                films: data2,
                dimensions: data3,
                language: data4
            }));
    }

    handleChange(date) {
        this.setState({
            startdate: date
        });
    }

    postSession(e) {
        e.preventDefault();
        fetch("/seancesInsert", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            if (response.status >= 400) {
                console.log(response);
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
        console.log(this.state);
    }

    handlesalle(event) {
        this.setState({ salle: event.target.value })
    }

    render() {
        return (
            <div className='popup'>
                <div className='innerPopup'>
                    <h1>{this.props.text}</h1>
                    <form autoComplete="off" onSubmit={this.postSession} method="POST">
                        {console.log(this.state.salle)}
                        <label> Salle : </label>
                        <select onChange={this.handlesalle} value={this.state.salle}>
                            {this.state.salles.map(Salles =>
                                <option key={Salles.salle_id} name={Salles.capacite} value={Salles.salle_name}>{Salles.salle_name}</option>
                            )}
                        </select>

                        <label> Film : </label>
                        <select onChange={e => this.setState({ film: e.target.value })} value={this.state.film} name="film">
                            {this.state.films.map(Film =>
                                <option key={Film.film_id} value={Film.film_id}> {Film.titre} </option>
                            )}
                        </select>

                        <DatePicker
                            selected={this.state.startdate}
                            onChange={this.handleChange}
                            showTimeSelect
                            dateFormat="Pp" />

                        <label> Jour : </label>
                        <select onChange={e => this.setState({ dayweek: e.target.value })} value={this.state.dayweek}>
                            <option value="Lundi">Lundi</option>
                            <option value="Mardi">Mardi</option>
                            <option value="Mercredi">Mercredi</option>
                            <option value="Jeudi">Jeudi</option>
                            <option value="Vendredi">Vendredi</option>
                            <option value="Samedi">Samedi</option>
                            <option value="Dimanche">Dimanche</option>
                        </select>

                        <label> Dimension : </label>
                        <select onChange={e => this.setState({ dimension: e.target.value })} value={this.state.dimension} name="dimension">
                            {this.state.dimensions.map(dim =>
                                <option key={dim.dimension_id} value={dim.dimension_id}> {dim.dimension_name} </option>
                            )}
                        </select>

                        <label> Langue : </label>
                        <select onChange={e => this.setState({ langue: e.target.value })} value={this.state.langue} name="langue">
                            {this.state.language.map(langue =>
                                <option key={langue.langue_id} value={langue.langue_id}> {langue.langues_name} </option>
                            )}
                        </select>

                        <input type="submit" value="valider" />

                    </form>
                    <button className="btn green rounded" onClick={this.props.closePopup}> Quitter </button>
                </div>
            </div>
        );
    }
};