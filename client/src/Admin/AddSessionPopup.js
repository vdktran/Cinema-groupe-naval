import React, {Component} from 'react';
import SelectFormSalle from './SelectFormSalle';
import SelectFormFilm from './SelectFormFilm';
import DateSelectHoraire from './DateSelectHoraire';
import SelectFormDimension from './SelectFormDimension';
import SelectFormLangue from './SelectFormLangue';


export default class AddSessionPopup extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            dayweek: '',
            msg: ''
        };
        this.postContact = this.postContact.bind(this);
    }

    postContact(event) {
        console.log(this.state.dayweek);
        event.preventDefault();
        fetch("/seancesPost", {
            method: 'POST',
             headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        }).then(function(response) {
            if (response.status >= 400) {
                console.log(response);
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

            <SelectFormSalle/>

            <SelectFormFilm/>

            <DateSelectHoraire/> 

            <label> Jour : </label>
            <select onChange={e => this.setState({ dayweek: e.target.value })} value={this.state.dayweek}>
                <option value ="Lundi">Lundi</option>
                <option value="Mardi">Mardi</option>
                <option value="Mercredi">Mercredi</option>
                <option value="Jeudi">Jeudi</option>
                <option value="Vendredi">Vendredi</option>
                <option value="Samedi">Samedi</option>
                <option value="Dimanche">Dimanche</option>
            </select>            
            
            <SelectFormDimension/>

            <SelectFormLangue/>
            
            <input type="submit" value="valider"/>

            </form>
            <button className="btn green rounded" onClick={this.props.closePopup}> Quitter </button>  
        </div>  
    </div>  
);  
}  
};