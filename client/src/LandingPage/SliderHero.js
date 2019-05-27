import React, { Component } from "react";
import Slider from "react-slick";
import "C:/Users/nicom/Desktop/Cinema-groupe-naval/client/node_modules/slick-carousel/slick/slick.css";
import "C:/Users/nicom/Desktop/Cinema-groupe-naval/client/node_modules/slick-carousel/slick/slick-theme.css";
import './SliderHero.css';

class SlickSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = { films: [] };
    }

    componentDidMount() {
        fetch('/films')
            .then(res => res.json())
            .then(films => this.setState({ films }));
    }

    render() {
        var settings = {
            arrows: false,
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            slidesToShow: 2,
            slidesToScroll: 1,
            pauseOnHover: true
        };
        return (
            <div id="slider">
                <Slider{...settings}>
                    {this.state.films.map(function (film) {
                        return (
                            <div key={film.film_id}>
                                <img id="imageSlider" key={film.film_id} src={film.img_slider}></img>
                            </div>
                        );
                    })}
                </Slider>
            </div>

        );
    }
}

export default SlickSlider;