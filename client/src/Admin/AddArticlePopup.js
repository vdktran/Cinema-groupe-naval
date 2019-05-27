import React, { Component } from 'react';


class AddArticlePopup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            article: '',
            autor: '',
            img: '',
            data: ''
        };
        this.postArticle = this.postArticle.bind(this);
    }

    postArticle(event) {
        event.preventDefault();
        var ladate = new Date
        var Year = ladate.getFullYear();
        var Month = ladate.getMonth();
        Month = (Month.length === 1) ? parseInt(Month + 1) : '0' + parseInt(Month + 1);
        var Day = ladate.getDate();
        var date = Year + '-' + Month + '-' + Day;
        this.state.data = date
        fetch("/articleInsert", {
            method: 'POST',
            /* headers: {'Content-Type': 'application/json'}, */
            body: JSON.stringify(this.state)
        }).then(function (response) {
            if (response.status >= 400) {
                console.log(response);
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            console.log(data)
            if (data === "success") {
                this.setState({ msg: "CA MARCHE" });
            }
        }).catch(function (err) {
            console.log(err)
        });
    }
    render() {
        return (
            <div className='popup'>
                <div className='innerPopup'>
                    <h1>{this.props.text}</h1>
                    <form autoComplete='off' onSubmit={this.postArticle} method="POST">

                        <label> Titre : </label>
                        <input onChange={e => this.setState({ title: e.target.value })} value={this.state.title} type="text" />

                        <label> Auteur : </label>
                        <input onChange={e => this.setState({ autor: e.target.value })} value={this.state.autor} type="text" />

                        <label> Article : </label>
                        <input onChange={e => this.setState({ article: e.target.value })} value={this.state.article} type="textarea" />

                        <label> Image article : </label>
                        <input onChange={e => this.setState({ image: e.target.value })} value={this.state.image} type="file" />

                        <input type="submit" />
                    </form>
                    <button onClick={this.props.closePopup}>Quitter</button>
                </div>
            </div>
        );
    }
}

export default AddArticlePopup;