import React, { Component } from 'react';
// import moment from 'moment';

import library from "../../lib/library";

import Button from '../button';

class ServicesList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showHide: false,
			choose: 0,
		}
	}

	showHideServices = () => {
		this.setState({
			showHide: !this.state.showHide,
		})
	}

	componentWillReceiveProps(nextProps) {
		let count = 0;

		nextProps.additional.forEach(service => {
			if (service.choose) {
				count++
			}
		})

		this.setState({
			choose: count
		})

	}

	render() {
		const { include, additional, segment, segmentId } = this.props;

		return (
			<div>
				{!!include.length
					? (<p><span className="like-link" onClick={this.showHideServices}>
							{include.length} included in price extra{include.length > 1 ? 's' : ''}
						</span></p>)
					: (<p>Included in price extras not available</p>)
				}

				{!!additional.length
					? (<div>
						<p>Available
							<span className="like-link" onClick={this.showHideServices}>
								{additional.length} optional extra{additional.length > 1 ? 's' : ''}
							</span>
							{this.state.choose
								? <small>( Choosed {this.state.choose} of {additional.length} )</small>
								: null
							}
						</p>
					</div>)
					: (<p>Optional extras not available</p>)
				}


				<div className={['services-editor', this.state.showHide ? 'active' : ' '].join(' ')}>
					<div className="content">
						<p>Included in price extras </p>

						<Service data={include}
						         text="included in price extras"
						/>

						<p>Optional extras </p>

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
		};
	}

	changeServiceStatus = (serviceId) => {

		let tmpServiceList = this.state.serviceList.slice();

		tmpServiceList[serviceId].choose = !tmpServiceList[serviceId].choose;

		this.setState({
				serviceList: tmpServiceList
			}, () => {
				this.props.onChange(this.state.serviceList[serviceId])
			}
		)
	}

	render() {
		let { serviceList } = this.state;


		return (
			<div className="service row">
				{serviceList.map((service, id) => {

					console.log('service',service);
					return (
						<div className="col-xs-4">
							<div className="row">
								<div className="col-xs-8">
									<img key={id}
									     className={["service_img", service.choose ? 'active' : ''].join(' ')}
									     src={service.description.img}
									     alt={service.description.text}
									     title={service.name}
									     onClick={service.changeable ? () => this.changeServiceStatus(id) : library.lib.noop }
									/>
								</div>

								<div className="col-xs-4">
									<div className="row">
										<div className="col-xs-12">
											{service.name}
										</div>
										<div className="col-xs-12">
											{service.price} {}
										</div>
									</div>
								</div>

							</div>

						</div>
					)
				})
				}
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

	}

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
	}

	chooseOffer = () => {
		this.setState({
			data: {
				...this.state.data,
				choose: !this.state.data.choose,
			}
		}, () => this.props.onChange(this.state.data))
	}

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
									<p className="flightNumber">{segment.flightNumber}</p>
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
											<p>{segment.flightDuration}</p>
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

				<div className="col-xs-2">
					<p>{data.totalPrice} {data.currency}</p>

					<p onClick={this.chooseOffer} className={data.choose ? 'active' : ''}>
						{data.choose ? 'Unselect' : 'Select'}
					</p>
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
				id: offer.offerID.value,
				originDestinationKey: offer.pricedOffer.associations[0].applicableFlight.originDestinationReferences[0].originDestinationKey,
				totalPrice: Number(offer.totalPrice.detailCurrencyPrice.total.value),
				currency: offer.totalPrice.detailCurrencyPrice.total.code,
				segments: this.getSegments(offer.pricedOffer.associations[0]),
				choose: false,
			};

			offersGroup[flight.originDestinationKey].push(flight);

			this.setState({
				customOffers: offersGroup,
			})
		})

	}

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
	}

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

	}

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
	}

	render() {
		// const { offersGroup } = this.props;
		const { customOffers, chosenFlight } = this.state;

		return (
			<div className="search-result">
				{/*<p>Всего найдено <strong>{offersGroup.totalOfferQuantity}</strong> рейса.</p>*/}

				<h2>Туда</h2>
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

				<h2>Сюда</h2>
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

				<Button title='Оплатить'
				        onChange={this.sendData}
				        type="button"
				        class="btn btn-primary"
				/>

			</div>
		)
	}
}

export default ShowFlightsResult;
