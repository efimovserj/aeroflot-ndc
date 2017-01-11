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
import TotalResult from '../TotalResult';

// import static data
import airports from '../../data/airports';
import offers from '../../data/reqres/offer-small';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: {
				search: false,
				chooseFlight: false,
				passengers: true,
				payment: false,
				final: false,
				waiting: false,
			},
			searchResult: offers || {},
		};
	}

	setSearchParamsMock = () => {
		let status = Object.create(this.state.status);
		const self = this;


		this.setState({
			status: {
				...this.state.status,
				waiting: true,
			}
		});

		status.search = 'done';
		status.chooseFlight = true;
		status.waiting = false;

		setTimeout(() => {
			self.setState({
				searchParams: request,
				searchResult: response,
				status,
			})
		}, 1000)
	};

	setSearchParams = (searchParams) => {
		let status = Object.create(this.state.status);
		const self = this;

		this.setState({
			status: {
				...this.state.status,
				waiting: true,
			}
		});

		library.lib.getResponse({
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
		});
	};

	setFlightParams = (flightParams) => {
		let status = Object.create(this.state.status);

		status.chooseFlight = 'done';
		status.passengers = true;

		this.setState({
			flightParams,
			status,
		})
	};

	setPassengers = (data) => {
		let status = Object.create(this.state.status);
		// const self = this;

		this.setState({
			status: {
				...this.state.status,
				waiting: true,
			}
		});

		library.lib.getResponse({
			method: 'POST',
			data,
			url: library.lib.urlsLibrary.orders,
			callback: (response) => {

				let promise = new Promise((resolve) => {
						resolve( this.getOrderId(response) );
				});

				promise.then(
					order => {
						status.passengers = 'done';
						status.payment = true;
						status.waiting = false;

						this.setState({
							order: order,
							status,
						})
					}
				);

			}
		});

		this.setState({ passengers: data })
	}

	getOrderId = (order) => {
		return new Promise((resolve) => {
			library.lib.getResponse({
				method: 'POST',
				data: order,
				url: library.lib.urlsLibrary.processId + order,
				callback: (response) => {
					if (typeof response === 'string') {
						setTimeout(() => this.getOrderId(order), 1000);
					} else {
						resolve(response);
					}
				}
			});
		})
	}

	setPaymentInfo = (data) => {
		this.setState({ paymentInfo: data })
	}

	render() {
		const { status, searchResult, searchParams } = this.state;

		return (
			<div className="App">

				<Navigation status={this.state.status}/>

				<div className={['container', status.waiting ? 'preloading' : ''].join(' ')}>

					{status.chooseFlight &&
					<TotalResult dataLists={searchResult.dataLists}
					             searchParams={searchParams.coreQuery.originDestinations}/>}

					{(status.search && status.search !== 'done') &&
					<SearchFlights airports={airports} callback={this.setSearchParamsMock}/>}

					{(status.chooseFlight && status.chooseFlight !== 'done') &&
					<ShowFlightsResult
						offersGroup={searchResult.offersGroup.airlineOffers[0]}
						dataLists={searchResult.dataLists}
						searchParams={searchParams.coreQuery.originDestinations[0]}
						callback={this.setFlightParams}
					/>
					}

					{status.passengers && <PassengersDetail
						dataLists={searchResult.dataLists}
						callback={this.setPassengers}
					/>}

					{status.payment && <PaymentInfo
						callback={this.setPaymentInfo}
					/>}

					{status.waiting && <PreLoader status={status.waiting}/>}
				</div>

			</div>
		);
	}
}

export default App;

