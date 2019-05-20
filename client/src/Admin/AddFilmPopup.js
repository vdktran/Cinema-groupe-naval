import React, {Component} from 'react';  


class AddFilmPopup extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            pseudo: '',
            object: '',
            message: '',
        }
        this.postContact = this.postContact.bind(this);
    }

    postContact(event) {
        event.preventDefault();
        fetch("/film", {
            method: 'POST',
            /* headers: {'Content-Type': 'application/json'}, */
            body: JSON.stringify(this.state)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data === "success"){
               this.setState({msg: "CA MARCHE"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    } 

  render() {  
    return (  
    <div className='popup'>  
        <div className='innerPopup'>  
            <h1>{this.props.text}</h1>
            <form autoComplete="off" onSubmit={this.postContact} method="POST">
                <label> Titre : </label>
                <input id="pseudo"  name="pseudo" onChange={e => this.setState({ pseudo: e.target.value })} value={this.state.pseudo} type="text"/>

                <label> Genre : </label>
                <input id="object"  name="object" onChange={e => this.setState({ object: e.target.value })} value={this.state.object} type="text"/>

                <label> Langue : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Dimension : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Date de sortie : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Synopsis : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Langue : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Status : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Langue : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Image Affiche : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Image Background : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <label> Image Slider : </label>
                <input id="message"  name= "message" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} type="text"/>

                <input type="submit" value="valider"/>
            </form>
            <button className="btn green rounded" onClick={this.props.closePopup}> Quitter </button>  
        </div>  
    </div>  
);  
}  
}  

export default AddFilmPopup;