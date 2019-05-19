import React, {Component} from 'react';


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            object: '',
            message: ''
        }
        this.postContact = this.postContact.bind(this)
    }

    postContact(event) {
        event.preventDefault()
        var data = {
            pseudo: this.state.pseudo,
            object: this.state.object,
            message: this.state.message,
            msg: this.state.msg
        }
        console.log(data)
        fetch("/contact", {
            method: 'POST',
/*             headers: {'Content-Type': 'application/json'}, */
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data === "success"){
               this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }

    stockData(e) {
        this.setState({
            [e.target.name]: e.target.value
        })  
    }


    render() {
        return (
            <form autoComplete="off" onSubmit={this.postContact} method="POST">
                <label> Pseudo : </label>
                <input id="pseudo"  name="pseudo" onChange={this.stockData} value='' type="text"/>

                <label> Objet du message : </label>
                <input id="object"  name="object" onChange={this.stockData} value='' type="text"/>

                <label> Message : </label>
                <input id="message"  name= "message" onChange={this.stockData} value='' type="textarea"/>
                <input type="button" value="valider"/>
            </form>
        );
    }

}
export default Contact;