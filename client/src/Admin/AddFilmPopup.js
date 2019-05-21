import React, {Component} from 'react';  
import SelectFormGenre from './SelectFormGenre';
import SelectFormLangue from './SelectFormLangue';
import SelectFormDimension from './SelectFormDimension';
import SelectFormStatus from './SelectFormStatus';


export default class AddFilmPopup extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            title: '', 
            date: '',
            synopsis: '',
            imgPoster: '',
            imgBackground: '',
            imgSlider: ''
        };
        this.postContact = this.postContact.bind(this);
    }

    postContact(event) {
        event.preventDefault();
        fetch("/films", {
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
                <input id="titreAddFilm"  name="titre" onChange={e => this.setState({ title: e.target.value })} value={this.state.title} type="text"/>

                <SelectFormGenre/>
           
                <SelectFormLangue/>
                    
                <SelectFormDimension/>

                <label> Date de sortie : </label>
                <input id="dateDeSortieAddFilm"  name= "dateSortie" onChange={e => this.setState({ date: e.target.value })} value={this.state.message} type="text"/>

                <label> Synopsis : </label>
                <input id="synopsisAddFilm"  name= "synopsis" onChange={e => this.setState({ synopsis: e.target.value })} value={this.state.message} type="text"/>

                <SelectFormStatus/>

                <label> Image Affiche : </label>
                <input id="imgAfficheAddFilm"  name= "imgAffiche" onChange={e => this.setState({ imgPoster: e.target.value })} value={this.state.message} type="text"/>

                <label> Image Background : </label>
                <input id="imgBackgroundAddFilm"  name= "imgBackground" onChange={e => this.setState({ imgBackground: e.target.value })} value={this.state.message} type="text"/>

                <label> Image Slider : </label>
                <input id="imgSliderAddFilm"  name= "imgSlider" onChange={e => this.setState({ imgSlider: e.target.value })} value={this.state.message} type="text"/>

                <input type="submit" value="valider"/>
            </form>
            <button className="btn green rounded" onClick={this.props.closePopup}> Quitter </button>  
        </div>  
    </div>  
);  
}  
};