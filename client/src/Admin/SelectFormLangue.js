import React, {Component} from 'react';  


export default class SelectFormLangue extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            langage: '',
        };
        this.state = {langues: []};
    }

    componentDidMount(){
        fetch('/langues')
          .then(res => res.json())
          .then(langues => this.setState({ langues }));
    }

    render(){
        return (
            <div>
                <label> Langue : </label>
                <select onChange={e => this.setState({ langage: e.target.value })} value={this.state.value} name="langue">
                    {this.state.langues.map(langue =>
                        <option key={langue.langue_id} value={langue.langues_name}> {langue.langues_name} </option>
                )}
                    </select>
            </div>
        )
    }
}