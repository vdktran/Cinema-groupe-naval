import React, { Component } from 'react';


class AddLanguePopup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='innerPopup'>
                    <h1>{this.props.texte}</h1>
                    <button onClick={this.props.closePopup}>Quitter</button>
                </div>
            </div>
        );
    }
}

export default AddLanguePopup;