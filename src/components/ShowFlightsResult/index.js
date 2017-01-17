import React, { Component } from 'react';
// import moment from 'moment';

import library from "../../lib/library";
import meal from './../../images/meal.png';
import wifi from './../../images/wifi.png';
import seat from './../../images/seat.png';
import lounge from './../../images/lounge.png';
import bag from './../../images/bag.png';

import Button from '../button';

class ServicesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showHide: false,
			choose: 0,
			filterAdd: [],
			filterIncl: [],
		}
	}

	componentDidMount() {
		this.refreshFilter();
	}

	refreshFilter = () => {
		this.setState({
			filterAdd: this.createFilterItem(this.props.additional),
			filterIncl: this.createFilterItem(this.props.include),
		})
	};


	createFilterItem = (serviceList) => {
		let filterList = [];
		let filterListObj = {};

		serviceList.forEach(item => {
			filterListObj[item.type] = {
				choose: false,
				name: item.type,
			}
		});

		for (let item in filterListObj) {
				if ({}.hasOwnProperty.call(filterListObj, item)) {
					filterList.push(filterListObj[item])
				}
		}

		serviceList.forEach(service => {
			filterList.forEach(type => {
				if (service.choose && service.type === type.name) {
					type.choose = true
				}
			})
		});

		return filterList;
	};

	showHideServices = () => {
		this.setState({
			showHide: !this.state.showHide,
		})
	};

	componentWillReceiveProps(nextProps) {
		let count = 0;

		nextProps.additional.forEach(service => {
			if (service.choose) {
				count++
			}
		});

		this.setState({
			choose: count
		}, this.refreshFilter)

	}

	render() {
		const { include, additional, segment, segmentId } = this.props;

		return (
			<div>
				{!!include.length
					? (
					<div>
						<span className="like-link" onClick={this.showHideServices}>
							{include.length} included in price extra{include.length > 1 ? 's' : ''}
						</span>

						<ul className="filter-list">
							{this.state.filterIncl.map((type, id) => {
								let imageUrl = '';

								if (type.name === 'lounge') {
									imageUrl = lounge;
								}
								if (type.name === 'wifi') {
									imageUrl = wifi;
								}
								if (type.name === 'seat') {
									imageUrl = seat;
								}
								if (type.name === 'meal') {
									imageUrl = meal;
								}
								if (type.name === 'bag') {
									imageUrl = bag;
								}

								return (
									<li key={id}
									    title={type.name}
									    className={[type.name, type.choose ? 'active' : ''].join(' ')}
									>
										<img src={imageUrl} alt="type.name"/>
									</li>
								)
							})}
						</ul>
					</div>)
					: (<p>Included in price extras not available</p>)
				}

				{!!additional.length
					? (<div>
						Available&nbsp;
						<span className="like-link" onClick={this.showHideServices}>
								{additional.length} optional extra{additional.length > 1 ? 's' : ''}
							</span>

						<ul className="filter-list">
							{this.state.filterAdd.map((type, id) => {
								let imageUrl = '';

								if (type.name === 'lounge') {
									imageUrl = lounge;
								}
								if (type.name === 'wifi') {
									imageUrl = wifi;
								}
								if (type.name === 'seat') {
									imageUrl = seat;
								}
								if (type.name === 'meal') {
									imageUrl = meal;
								}
								if (type.name === 'bag') {
									imageUrl = bag;
								}

								return (
									<li key={id}
									    title={type.name}
									    className={[type.name, type.choose ? 'active' : ''].join(' ')}
									>
										<img src={imageUrl} alt="type.name"/>
									</li>
								)
							})}
						</ul>

						{this.state.choose
							? <small>( Choosed {this.state.choose} of {additional.length} )</small>
							: <small>&nbsp;</small>
						}
					</div>)
					: (<p>Optional extras not available</p>)
				}


				<div className={['services-editor', this.state.showHide ? 'active' : ' '].join(' ')}>
					<span className="done" onClick={this.showHideServices}>&times;</span>
					<div className="content">
						<p className="title-service-list">Included in price extras </p>

						<Service data={include}
						         text="included in price extras"
						/>

						<p className="title-service-list">Optional extras </p>

						<Service data={additional}
						         text="optional extras"
						         onChange={(service, serviceId) =>
							         this.props.onChange(service, segment, segmentId, serviceId)
						         }
						/>
					</div>
				</div>
			</div>
		)
	}
}

class Service extends Component {
	constructor(props) {
		super(props);
		this.state = {
			serviceList: this.props.data,
			filteredServiceList: this.props.data,
			filterList: [],
		};
	}

	componentDidMount() {
		let filterList = [];
		let filterListObj = {};

		this.state.serviceList.forEach(item => {
			filterListObj[item.type] = {
				choose: true,
				name: item.type,
			}
		});

		for (let item in filterListObj) {
			if ({}.hasOwnProperty.call(filterListObj, item)) {
				filterList.push(filterListObj[item])
			}
		}

		this.setState({
			filterList
		}, this.filterServiceList)
	}

	filterServiceList = () => {
		let tmpServiceList = this.state.serviceList.slice();
		let emptyList = [];

		this.state.filterList.forEach(type => {
			if (type.choose) {
				tmpServiceList.forEach(service => {
					if (service.type === type.name) {
						emptyList.push(service)
					}
				})
			}
		});

		this.setState({
			filteredServiceList: emptyList
		})
	};

	changeFilterItemStatus = (changeType) => {
		let tmpFilterList = this.state.filterList.slice();

		tmpFilterList.forEach((type, id) => {
			if (type.name === changeType.name) {
				tmpFilterList[id].choose = !tmpFilterList[id].choose;
			}
		});

		this.setState({
			filterList: tmpFilterList
		}, this.filterServiceList)
	};

	changeServiceStatus = (serviceId) => {
		let tmpServiceList = this.state.filteredServiceList.slice();

		tmpServiceList[serviceId].choose = !tmpServiceList[serviceId].choose;

		this.setState({
				filteredServiceList: tmpServiceList
			}, () => {
				this.props.onChange(this.state.filteredServiceList[serviceId])
			}
		)
	};

	render() {
		let { filteredServiceList, serviceList, filterList } = this.state;

		if (!serviceList.length) {
			return (
				<p className="not-avaible-service-list"><strong>Not available</strong></p>
			)
		}

		return (
			<div className="service-list">
				<ul className="filter-list">
					{filterList.map((type, id) => {
						let imageUrl = '';

						if (type.name === 'lounge') {
							imageUrl = lounge;
						}
						if (type.name === 'wifi') {
							imageUrl = wifi;
						}
						if (type.name === 'seat') {
							imageUrl = seat;
						}
						if (type.name === 'meal') {
							imageUrl = meal;
						}
						if (type.name === 'bag') {
							imageUrl = bag;
						}

						return (
							<li key={id}
							    title={type.name}
							    onClick={() => {
								    this.changeFilterItemStatus(type)
							    }}
							    className={[type.name, type.choose ? 'active' : ''].join(' ')}
							>
								<img src={imageUrl} alt="type.name"/>
							</li>
						)
					})}
				</ul>

				<div className="row head">
					<div className="col-xs-3">Name</div>
					<div className="col-xs-6">Description</div>
					<div className="col-xs-2 price">Price</div>
					<div className="col-xs-1">Info</div>
				</div>

				{filteredServiceList.map((service, id) => {
					return (
						<div key={id}
						     className={["row", "service", service.choose ? 'active' : ''].join(' ')}
						     onClick={service.changeable ? () => this.changeServiceStatus(id) : library.lib.noop }
						>
							<div className="col-xs-3">{service.name}</div>
							<div className="col-xs-6">{service.description.text}</div>
							<div className="col-xs-2 price">{library.lib.formatNumber(service.price)}</div>
							<div className="col-xs-1 info">
								<span>?</span>
								<div className="info-img">
									<img className="service_img"
									     src={service.description.img}
									     alt={service.description.text}
									     title={service.name}
									/>
									<p>{service.name}</p>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		)
	}
}

class Offer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
		};
	}

	changeOfferService = (service, segment, segmentId, serviceId) => {
		let tmpOffer = Object.assign({}, this.state.data);

		tmpOffer.segments[segmentId].services.additional[serviceId] = service;

		this.setState({ data: tmpOffer }, () => this.calculateTotalPrice(service));

	};

	calculateTotalPrice = (service) => {
		let result = this.state.data.totalPrice;

		if (service.choose) {
			result += service.price;
		} else if (!service.choose) {
			result -= service.price;
		}

		this.setState({
			data: {
				...this.state.data,
				totalPrice: result,
			}
		})
	};

	chooseOffer = () => {
		this.setState({
			data: {
				...this.state.data,
				choose: !this.state.data.choose,
			}
		}, () => this.props.onChange(this.state.data))
	};

	render() {
		let { data } = this.state;

		return (
			<div className="row block">
				<div className="col-xs-10 segments-list">
					{data.segments.map((segment, segmentId) => {
						return (
							<div className="row segment" key={segmentId}>
								<div className="col-xs-2 flight">
									<h4>{segment.airlineName}</h4>
									<p className="flightNumber">{segment.airlineID} {segment.flightNumber}</p>
								</div>

								<div className="col-xs-6">
									<div className="row info">
										<div className="col-xs-3">
											<p>{segment.departure.time}</p>
											<p className="airport-code">{segment.departure.airportCode}</p>
										</div>

										<div className="col-xs-3">
											<p>{segment.arrival.time}</p>
											<p className="airport-code">{segment.arrival.airportCode}</p>
										</div>

										<div className="col-xs-3">
											<p>{library.lib.convertTime(segment.flightDuration)}</p>
										</div>
									</div>
								</div>

								<div className="col-xs-4 service">
									<ServicesList include={segment.services.include}
									              additional={segment.services.additional}
									              segment={segment}
									              segmentId={segmentId}
									              onChange={(service, serviceId) =>
										              this.changeOfferService(service, segment, segmentId, serviceId)
									              }
									/>
								</div>
							</div>
						)
					})}
				</div>

				<div className="col-xs-2 total">
					<div className="total-container">
						<p className="total-price">{library.lib.formatNumber(data.totalPrice)}</p>
						<p className="total-currency">{data.currency}</p>
						<p onClick={this.chooseOffer}
						   className={['selector btn btn-primary', data.choose ? 'active' : ''].join(' ')}>
							{data.choose ? 'Unselect' : 'Select'}
						</p>
						<p className="offer-id">Offer Id: <span>{data.id}</span></p>
					</div>
				</div>
			</div>
		)
	}
}

class ShowFlightsResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenFlight: {
				'OD1': {},
				'OD2': {},
			},
			customOffers: {
				'OD1': [],
				'OD2': [],
			},
		};
	}

	componentDidMount() {
		this.createCustomOffers();
	}

	createCustomOffers = () => {
		let offersGroup = {
			'OD1': [],
			'OD2': [],
		};

		this.props.offersGroup.airlineOffer.forEach((offer) => {
			let flight = {
				offerID: offer.offerID,
				id: offer.offerID.value,
				originDestinationKey: offer.pricedOffer.associations[0].applicableFlight.originDestinationReferences[0].originDestinationKey,
				totalPrice: Number(offer.totalPrice.detailCurrencyPrice.total.value),
				currency: offer.totalPrice.detailCurrencyPrice.total.code,
				segments: this.getSegments(offer.pricedOffer.associations[0]),
				flightList: offer.pricedOffer.associations[0].applicableFlight.flightReferences.value,
				originDestinationList: offer.pricedOffer.associations[0].applicableFlight.originDestinationReferences[0],
				flightSegmentList: [],
				choose: false,
				offerItems: [],
			};

			offer.pricedOffer.offerPrice.forEach((item) => {
				flight.offerItems.push({
					"offerItemID": {
						"value": item.offerItemID,
						"owner": offer.offerID.owner,
					},
					"passengers": [
						"<?xml version=\"1.0\" encoding=\"UTF-16\"?>\n<PassengerReference xmlns=\"http://www.iata.org/IATA/EDIST\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">PAX1</PassengerReference>"
					]
				})
			});

			offer.pricedOffer.associations[0].applicableFlight.flightSegmentReference.forEach((item) => {
				flight.flightSegmentList.push(item.ref)
			});

			offersGroup[flight.originDestinationKey].push(flight);

			this.setState({
				customOffers: offersGroup,
			})
		})
	};

	getSegments = (pathToAssociations) => {
		return pathToAssociations.applicableFlight.flightSegmentReference.map((seg) => {
			return {
				id: seg.segmentKey,
				airlineID: seg.ref.marketingCarrier.airlineID.value,
				airlineName: seg.ref.marketingCarrier.name,
				flightNumber: seg.ref.marketingCarrier.flightNumber.value,
				flightDuration: seg.ref.flightDetail.flightDuration.value,
				departure: {
					airportCode: seg.ref.departure.airportCode.value,
					airportName: seg.ref.departure.airportName,
					date: seg.ref.departure.date,
					time: seg.ref.departure.time,
				},
				arrival: {
					airportCode: seg.ref.arrival.airportCode.value,
					airportName: seg.ref.arrival.airportName,
					date: seg.ref.arrival.date,
					time: seg.ref.arrival.time,
				},
				services: {
					include: this.getService(pathToAssociations.includedService.serviceReferences, 'include'),
					additional: this.getService(
						pathToAssociations.associatedService.serviceReferences,
						'addition'
					),
				}
			}
		});
	};

	getService = (pathToServices, type) => {
		pathToServices = pathToServices || [];

		return pathToServices.map((service) => {


			let result = {
				id: service.serviceID.value,
				name: service.name.value,
				description: {
					text: service.descriptions.description[0].text.value,
					img: service.descriptions.description[0].link,
				},
				price: Number(service.price[0].total.value),
				taxes: Number(service.price[0].taxes),
				type: library.lib.determineServiceType(service.name.value)
			};

			if (type === 'include') {
				result['choose'] = true;
				result['changeable'] = false;
			} else {
				result['choose'] = false;
				result['changeable'] = true;
			}

			return result;
		})
	};

	setChosenOffer = (offer, offerId) => {
		let tmpOffers = this.state.customOffers[offer.originDestinationKey].slice();
		tmpOffers[offerId] = offer;

		this.setState({
			chosenFlight: {
				...this.state.chosenFlight,
				[offer.originDestinationKey]: offer.choose ? offer : {}
			},
			customOffers: {
				...this.state.customOffers,
				[offer.originDestinationKey]: tmpOffers,
			}
		})
	};

	sendData = () => {
		if (this.state.chosenFlight['OD1'].choose && this.state.chosenFlight['OD2'].choose) {
			this.props.callback(this.state.chosenFlight);
		}
	};

	render() {
		const { customOffers, chosenFlight } = this.state;

		return (
			<div className="search-result">
				<h2>Forward direction ({customOffers['OD1'].length} offers)</h2>
				{customOffers['OD1'].map((offer, id) => {
					if (chosenFlight['OD1'].id) {
						if (offer.choose) {
							return (
								<Offer data={offer}
								       key={offer.id}
								       onChange={(data) => this.setChosenOffer(data, id)}
								/>
							)
						}
					} else {
						return (
							<Offer data={offer}
							       key={offer.id }
							       onChange={(data) => this.setChosenOffer(data, id)}
							/>
						)
					}

					return false;
				})}

				<h2>Reverse direction  ({customOffers['OD2'].length} offers)</h2>
				{customOffers['OD2'].map((offer, id) => {
					if (chosenFlight['OD2'].id) {
						if (offer.choose) {
							return (
								<Offer data={offer}
								       key={offer.id}
								       onChange={(data) => this.setChosenOffer(data, id)}
								/>
							)
						}
					} else {
						return (
							<Offer data={offer}
							       key={offer.id}
							       onChange={(data) => this.setChosenOffer(data, id)}
							/>
						)
					}

					return false;
				})}

				<div className="row">
					<div className="col-xs-2">
						<Button title='Continue to order'
						        buttonProps={{
							        type: "button",
							        className: "btn btn-primary",
							        disabled: !chosenFlight["OD1"].choose || !chosenFlight["OD2"].choose,
						        }}
						        onChange={this.sendData}
						/>
					</div>
				</div>

			</div>
		)
	}
}

export default ShowFlightsResult;
