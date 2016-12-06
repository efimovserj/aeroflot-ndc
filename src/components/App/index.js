import React, { Component } from 'react';
import './App.css';
import './../../css/bootstrap.css';
import './../../css/main.css';
import library from "../../lib/library";

// import Components
import SearchFlights from '../SearchFlights'

// import static data
import airports from '../../data/airports';
// import request from '../../data/request';
import preloader from '../../images/loader-plane.gif'

console.log(preloader);

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
				waiting: false,
			},
			airports,
		};
	}

	setSearchParams = (searchParams) => {
		let status = Object.create(this.state.status);
		const self = this;

		status.waiting = true;

		this.setState({status});

		library.lib.getResponse({
			method: 'POST',
			data: searchParams,
			url: library.lib.urlsLibrary.oneway,
			callback: (response) => {
				status.search = false;
				status.chooseFlight = true;
				status.waiting = false;

				console.log('oh-oh', JSON.parse(response));

				self.setState({
					searchParams: JSON.parse(response),
					status,
				}, () => {
					console.log('after');
				})
			}})
	}

	render() {
		const { airports, status } = this.state;

		return (
			<div className="App">
				{status.search && <SearchFlights airports={airports} callback={this.setSearchParams} />}

				{status.chooseFlight && <p>YEP</p>}

				{status.waiting && <p className="preloader"><img src={preloader} /></p>}
			</div>
		);
	}
}

export default App;
