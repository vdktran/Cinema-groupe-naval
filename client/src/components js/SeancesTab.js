import React, { Component } from 'react';
import './SeancesTab.css';

class SeancesTab extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            films: [],
            whatday: 'Lundi'
         };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        this.setState({
            whatday: e.target.value
        },function() {
            this.props.handlerFromParent(this.state.whatday);
        });
    };



    componentDidMount() {
        fetch('/films')
            .then(res => res.json())
            .then(films => this.setState({ films }));
    }

    render() {
        return (
            <div className="SeancesTab">
                <div className="SeancesNav">
                    <button className="seancesItems" value="Lundi" onClick={this.clickHandler}>Lundi</button>
                    <button className="seancesItems" value="Mardi" onClick={this.clickHandler}>Mardi</button>
                    <button className="seancesItems" value="Mercredi" onClick={this.clickHandler}>Mercredi</button>
                    <button className="seancesItems" value="Jeudi" onClick={this.clickHandler}>Jeudi</button>
                    <button className="seancesItems" value="Vendredi" onClick={this.clickHandler}>Vendredi</button>
                    <button className="seancesItems" value="Samedi" onClick={this.clickHandler}>Samedi</button>
                    <button className="seancesItems" value="Dimanche" onClick={this.clickHandler}>Dimanche</button>
                </div>
                <div className="versions">
                <div className="seancesItems">
                    Versions
                </div>
                <form>
                    <label className="container">VO
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">VF
                        <input type="checkbox"></input>
                        <span className="checkmark"></span>
                    </label>
                </form>
                </div>
            </div>
        );
    }
}

export default SeancesTab;
