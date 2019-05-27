import React, { Component } from 'react';


class AddDimensionPopup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='innerPopup'>
                    <h1>{this.props.text}</h1>
                    <button onClick={this.props.closePopup}>Quitter</button>
                </div>
            </div>
        );
    }
}

export default AddDimensionPopup;