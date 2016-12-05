import React, { Component } from 'react';
import './App.css';
import './../../css/bootstrap.css';

// import Components
import SearchFlights from '../SearchFlights'

// import static data
import airports from '../../data/airports';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: {
				search: true,
				chooseFlight: false,
				passengers: false,
				confirmInfo: false,
				buyTicket: false,
				final: false,
			},
			airports,
		};
	}

	setSearchParams = (searchParams) => {
		console.log(searchParams);
	}

	render() {
		const { airports } = this.state;

		return (
			<div className="App">
				{status.search && <SearchFlights airports={airports} callback={this.setSearchParams} />}
			</div>
		);
	}
}

export default App;
