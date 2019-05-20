import React, { Component } from 'react';
import './App.css';
import SlickSlider from './components js/SliderHero';

class App extends Component {
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
		return (
			<div className="App">
				<SlickSlider></SlickSlider>
				{console.log(this.state)}
			</div>
		);
	}
}

export default App;
