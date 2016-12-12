import React, { Component } from 'react';
import moment from 'moment';

import library from "../../lib/library";

class SearchParams extends Component {
	render() {
		const { dataLists, searchParams } = this.props;

		return (
			<div className="row">
				<div className="col-xs-4">
					<h4>Пассажиры</h4>
					<ul>
						{dataLists.anonymousTravelerList.map((type, id) => {
							let title = '';

							if (type.ptc.value === 'ADT') {
								title = 'Взрослых: '
							}

							if (type.ptc.value === 'CNN') {
								title = 'Детей: '
							}

							if (type.ptc.value === 'INF') {
								title = 'Младенцев: '
							}

							return (
								<li key={id}>{title} {type.ptc.quantity}</li>
							)
						})}
					</ul>
				</div>

				<div className="col-xs-4">
					<h4>Вылет</h4>
					<p>
						{
							/*
							 searchParams.departure.airportName
							 ? searchParams.departure.airportName + ' '
							 : ''
							 */

							`(${searchParams.departure.airportCode.value})
								${moment(searchParams.departure.date).format('YYYY-MM-DD')}`
						}
					</p>
				</div>

				<div className="col-xs-4">
					<h4>Прилет</h4>
					<p>
						{
							/*
							 searchParams.arrival.airportName
							 ? searchParams.arrival.airportName + ' '
							 : ''
							 */

							`(${searchParams.arrival.airportCode.value})
								${moment(searchParams.arrival.date).format('YYYY-MM-DD')}`
						}
					</p>
				</div>

				<hr />
				<hr />
			</div>
		)
	}
}

class Service extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
		};
	}

	changeServiceStatus = () => {
		this.setState({
				data: {
					...this.state.data,
					choose: !this.state.data.choose,
				}
			}, () => {
				this.props.onChange(this.state.data)
			}
		)
	}

	render() {
		let { data } = this.state;

		return (
			<img
				className={["service_img", data.choose ? 'active' : ''].join(' ')}
				src={data.description.img}
				alt={data.description.text}
				title={data.name}
				onClick={data.changeable ? this.changeServiceStatus : library.lib.noop }
			/>
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
			<div className="row">
				<div className="col-xs-10">
					{data.segments.map((segment, segmentId) => {

						return (
							<div className="row" key={segmentId}>
								<div className="col-xs-2">
									{segment.airlineName} <br />
									{segment.flightNumber}
								</div>

								<div className="col-xs-5">
									<div className="row">
										<div className="col-xs-3">
											{moment(segment.departure.date).format("HH:mm")} <br />
											{segment.departure.airportCode}
										</div>

										<div className="col-xs-3">
											{moment(segment.arrival.date).format("HH:mm")} <br />
											{segment.arrival.airportCode}
										</div>

										<div className="col-xs-3">
											{segment.flightDuration}
										</div>
									</div>
								</div>

								<div className="col-xs-4">
									<div>
										<span>Included in price</span>

										{segment.services.include.map((service) => {
											return (
												<Service data={service} key={service.id} />
											)
										})}
									</div>

									<div>
										<span>Optional extras</span>

										{segment.services.additional.map((service, serviceId) => {
											return (
												<Service data={service}
												         key={service.id}
												         onChange={(service) =>
													         this.changeOfferService(service, segment, segmentId, serviceId)
												         }
												/>
											)
										})}
									</div>
								</div>

								<div className="col-xs-1">
									{/*Non-Flex economy*/}
								</div>
							</div>
						)
					})}
				</div>

				<div className="col-xs-2">
					Стоимость {data.totalPrice} {data.currency}

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
			chosenFlight: {},
			customOffers: [],
		};
	}

	componentDidMount() {
		this.createCustomOffers();
	}

	createCustomOffers = () => {
		let offersGroup = [];

		this.props.offersGroup.airlineOffer.forEach((offer) => {
			let flight = {
				id: offer.offerID.value,
				totalPrice: Number(offer.totalPrice.detailCurrencyPrice.total.value),
				currency: offer.totalPrice.detailCurrencyPrice.total.code,
				segments: this.getSegments(offer.pricedOffer.associations[0]),
				choose: false,
			};

			offersGroup.push(flight);

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
				},
				arrival: {
					airportCode: seg.ref.arrival.airportCode.value,
					airportName: seg.ref.arrival.airportName,
					date: seg.ref.arrival.date,
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
		let tmpOffers = this.state.customOffers.slice();
		tmpOffers[offerId] = offer;

		this.setState({
			chosenFlight: offer.choose ? offer : {},
			customOffers: tmpOffers,
		})
	}

	render() {
		const { offersGroup, dataLists, searchParams } = this.props;
		const { customOffers, chosenFlight } = this.state;

		return (
			<div>
				<SearchParams dataLists={dataLists} searchParams={searchParams}/>

				<p>Всего найдено <strong>{offersGroup.totalOfferQuantity}</strong> рейса.</p>

				{customOffers.map((offer, id) => {
					if (chosenFlight.id) {
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

			</div>
		)
	}
}

export default ShowFlightsResult;
