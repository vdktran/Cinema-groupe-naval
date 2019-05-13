import React, { Component } from 'react';
import './SeancesTab.css';

class ImgGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { films: [] };
    }

    handleClick = () => {

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
                    <div className="seancesItems">Lundi</div>
                    <div className="seancesItems">Mardi</div>
                    <div className="seancesItems">Mercredi</div>
                    <div className="seancesItems">Jeudi</div>
                    <div className="seancesItems">Vendredi</div>
                    <div className="seancesItems">Samedi</div>
                    <div className="seancesItems">Dimanche</div>
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

export default ImgGallery;
