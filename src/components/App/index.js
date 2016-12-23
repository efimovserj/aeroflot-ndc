import React, { Component } from 'react';
import './../../css/bootstrap.css';
import './../../css/main.css';
import library from "../../lib/library";
import request from "../../data/reqres/request.json";
import response from "../../data/reqres/response.json";

// import Components
import SearchFlights from '../SearchFlights'
import PreLoader from '../PreLoader';
import ShowFlightsResult from '../ShowFlightsResult';
import PassengersDetail from '../PassengersDetail';
import PaymentInfo from '../PaymentInfo';
import Navigation from '../Navigation';

// import static data
import airports from '../../data/airports';
import offers from '../../data/reqres/offer-small';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: {
				search: true,
				chooseFlight: false,
				passengers: false,
				payment: false,
				final: false,
				waiting: false,
			},
			searchResult: offers || {},
		};
	}

	setSearchParams = (searchParams) => {
		let status = Object.create(this.state.status);
		const self = this;

		status.waiting = true;

		this.setState({ status });

		/*library.lib.getResponse({
		 method: 'POST',
		 data: searchParams,
		 url: library.lib.urlsLibrary.oneway,
		 callback: (response) => {
		 status.search = 'done';
		 status.chooseFlight = true;
		 status.waiting = false;

		 self.setState({
		 searchParams: searchParams,
		 searchResult: JSON.parse(response),
		 status,
		 })
		 }
		 });*/

		status.search = 'done';
		status.chooseFlight = true;
		status.waiting = false;

		this.setState({
			searchParams: request,
			searchResult: response,
			status,
		})

	};

	setPassengers = (data) => {
		this.setState({ passengers: data })
	}

	setPaymentInfo = (data) => {
		this.setState({ paymentInfo: data })
	}

	render() {
		const { status, searchResult, searchParams } = this.state;

		return (
			<div className="App">

				<Navigation status={this.state.status}/>

				<div className="container">
					{(status.search && status.search !== 'done') && <SearchFlights airports={airports} callback={this.setSearchParams}/>}

					{status.chooseFlight &&
					<ShowFlightsResult
						offersGroup={searchResult.offersGroup.airlineOffers[0]}
						dataLists={searchResult.dataLists}
						searchParams={searchParams.coreQuery.originDestinations[0]}
					/>
					}

					{status.passengers && <PassengersDetail
						dataLists={searchResult.dataLists}
						callback={this.setPassengers}
					/>}

					{status.payment && <PaymentInfo
						callback={this.setPaymentInfo}
					/>}
				</div>

				{status.waiting && <PreLoader />}
			</div>
		);
	}
}

export default App;
