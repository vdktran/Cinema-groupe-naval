import React, { Component } from 'react';


export default class SelectFormDimension extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        };
        this.state = { dimensions: [] };
    }

    componentDidMount() {
        fetch('/dimension')
            .then(res => res.json())
            .then(dimensions => this.setState({ dimensions }));
    }

    render() {
        return (
            <div>
                <label> Dimension : </label>
                <select onChange={e => this.setState({ dimension: e.target.value })} value={this.state.value} name="dimension">
                    {this.state.dimensions.map(dim =>
                        <option key={dim.dimension_id} value={dim.dimension_id}> {dim.dimension_name} </option>
                    )}
                </select>
            </div>
        )
    }
}