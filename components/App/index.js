import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: {
				search: true,
				chooseFlight: false,
				passengers: false,
				payment: false,
				booking: false,
				travel: false,
				waiting: false,
			},
		}
	}

	render() {
		const { status } = this.state;

		return (
			<div className="App">
				Hello World!132
				<img src="../../images/1.jpg" alt=""/>
			</div>
		);
	}
}

export default App;
