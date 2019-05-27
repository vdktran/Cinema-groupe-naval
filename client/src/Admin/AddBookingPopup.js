import React, { Component } from 'react';


class AddBookingPopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: 1,
            film_id: 0,
            seance_id: 1,
            quantite: 1,
            prix_id: 1,
        };
        this.state = {
            users: [],
            films: [],
            seances: [],
            prix: [],
            quantites: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        };
        this.postBooking = this.postBooking.bind(this);
        /*         this.getdata = this.getdata.bind(this); */
    }

    /*         getdata(event) {
                this.setState({ seance_id: event.target.value });
                console.log(this.state.seance_id);
                this.state.seances.map(sea =>
                    if (this.state.seance_id == sea.seance_id) {
                    return this.setState({ film_id: sea.film_id })
                } else {
                    console.log(this.state.seance_id)
                })
                console.log(this.state.film_id); */


    postBooking(event) {
        event.preventDefault();
        fetch("/reservationsInsert", {
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

    componentDidMount() {
        Promise.all([
            fetch('/users'),
            fetch('/seances'),
            fetch('/prix'),
            fetch('/films')
        ])
            .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
            .then(([data1, data2, data3, data4]) => this.setState({
                users: data1,
                seances: data2,
                prix: data3,
                films: data4
            }));
    }
    render() {
        return (
            <div className='popup'>
                <div className='innerPopup'>
                    <h1>{this.props.text}</h1>
                    <form autoComplete="off" onSubmit={this.postBooking} method="POST">
                        <label> Client : </label>
                        <select onChange={e => this.setState({ user_id: e.target.value })} value={this.state.user_id} name="user">
                            {this.state.users.map(use =>
                                <option key={use.users_id} value={use.users_id}> {use.users_nom} {use.users_prenom}</option>
                            )}
                        </select>


                        <label> Seances : </label>
                        <select onChange={e => this.setState({ seance_id: e.target.value })} value={this.state.seance_id}>
                            {this.state.seances.map(sea =>
                                <option key={sea.seance_id} value={sea.seance_id}> {sea.titre} {sea.date_du_jour} </option>
                            )}
                            {console.log(this.state.seance_id)}
                        </select>

                        <label> Film : </label>
                        <select onChange={e => this.setState({ film_id: e.target.value })} value={this.state.film_id}>
                            {this.state.films.map(fil =>
                                <option key={fil.film_id} value={fil.film_id}>{fil.titre} </option>
                            )}
                        </select>

                        <label> Tarif : </label>
                        <select onChange={e => this.setState({ prix_id: e.target.value })} value={this.state.prix_id}>
                            {this.state.prix.map(pri =>
                                <option key={pri.prix_id} value={pri.prix_id}>{pri.nom_du_tarif} {pri.tarif} € </option>
                            )}
                        </select>

                        <label> quantite : </label>
                        <select onChange={e => this.setState({ quantite: e.target.value })} value={this.state.quantite}>
                            {this.state.quantites.map((qua, index) =>
                                <option key={index} value={index + 1}> {index + 1} </option>
                            )}
                        </select>
                        <input type="submit" value="Valider" />
                    </form>
                    <button className="btn green rounded" onClick={this.props.closePopup}>Quitter</button>
                </div>
            </div >
        );
    }
}

export default AddBookingPopup;