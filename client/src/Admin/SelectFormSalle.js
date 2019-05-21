import React, {Component} from 'react';  


export default class SelectFormSalle extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            salle: '',
        };
        this.state = {salles: []};
    }

    componentDidMount(){
        fetch('/salles')
          .then(res => res.json())
          .then(salles => this.setState({ salles }));
    }

    render(){
        return (
            <div>
                <label> Salle : </label>
                <select onChange={e => this.setState({ salle: e.target.value })} value={this.state.value} name="salle">
                    {this.state.salles.map(Salles =>
                        <option key={Salles.salle_id} value={Salles.salle_name}> {Salles.salle_name}</option>
                    )}
                </select>
            </div>
        )
    }
}