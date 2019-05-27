import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            object: '',
            message: '',
            msg: ''
        }
        this.postContact = this.postContact.bind(this);
    }

    postContact(event) {
        event.preventDefault();
        fetch("/contactpost", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
            if (data == "success") {
                this.setState({ msg: "Thanks for registering" });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }


    render() {
        return (
            <form ClassName="ContactForm" autoComplete="off" onSubmit={this.postContact} method="POST">
                <label> Pseudo : </label>
                <input id="pseudo" name="pseudo" onChange={e => this.setState({ pseudo: e.target.value })} value={this.state.pseudo} type="text" />

                <label> Objet du message : </label>
                <input id="object" name="object" onChange={e => this.setState({ object: e.target.value })} value={this.state.object} type="text" />

                <label> Message : </label>
                <input id="message" name="message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="textarea" />
                <input type="submit" value="valider" />
            </form>
        );
    }

}
export default Contact;