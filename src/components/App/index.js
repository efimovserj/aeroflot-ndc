import React, {Component} from 'react';
import './App.css';
import './../../css/bootstrap.css';
import './../../css/main.css';
// import library from "../../lib/library";

// import Components
import SearchFlights from '../SearchFlights'
import PreLoader from '../PreLoader';
import ShowFlightsResult from '../ShowFlightsResult';

// import static data
import airports from '../../data/airports';
import offers from '../../data/offers';
// import request from '../../data/request';

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
			searchResult: {},
		};
	}

	setSearchParams = (searchParams) => {
		/*let status = Object.create(this.state.status);
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

		 self.setState({
		 searchParams: JSON.parse(response),
		 status,
		 }, () => {
		 console.log('after');
		 })
		 }})*/
		let status = Object.create(this.state.status);
		status.search = false;
		status.chooseFlight = true;

		this.setState({
			searchResult: offers,
			status,
		})
	};

	render() {
		const {status, searchResult} = this.state;

		return (
			<div className="App">
				{status.search && <SearchFlights airports={airports} callback={this.setSearchParams}/>}

				{status.chooseFlight &&
					<ShowFlightsResult
						offersGroup={searchResult.offersGroup.airlineOffers[0]}
						dataLists={searchResult.dataLists}
					/>
				}

				{status.waiting && <PreLoader />}
			</div>
		);
	}
}

export default App;
