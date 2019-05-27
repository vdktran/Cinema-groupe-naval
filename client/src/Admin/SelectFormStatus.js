import React, { Component } from 'react';


export default class SelectFormStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.state = { status: [] };
    }

    componentDidMount() {
        fetch('/status')
            .then(res => res.json())
            .then(status => this.setState({ status }));
    }

    render() {
        return (
            <div>
                <label> Status : </label>
                <select onChange={e => this.setState({ statut: e.target.value })} value={this.state.value} name="genre">
                    {this.state.status.map(stat =>
                        <option key={stat.statut_id} value={stat.statut_name}> {stat.statut_name}</option>
                    )}
                </select>
            </div>
        )
    }
}