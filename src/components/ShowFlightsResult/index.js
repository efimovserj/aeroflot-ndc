import React, { Component } from 'react';
import moment from 'moment';

// import components
// import Select from '../select';

// import additional data
// import service from '../../data/service';

class ShowFlightsResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenFlight: {},
		};
	}

	/*componentDidMount() {
		let offersGroup = [];

		this.props.offersGroup.map((offer) => {
			let flight = {};


		})
	}*/


	render() {
		const { offersGroup, dataLists, searchParams } = this.props;

		// console.log(searchParams);

		// const { totalPrice, airlineOffer } = this.props.airlineOffer;

		return (
			<div>
				{
					// TODO: create modules for each ul block
				}
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
				</div>


				<p>Всего найдено <strong>{offersGroup.totalOfferQuantity}</strong> рейса.</p>
				<hr />
				<hr />

				{offersGroup.airlineOffer.map((offer, id) => {
					const totalPrice = offer.totalPrice.detailCurrencyPrice.total;
					const flightSegmentReference = offer.pricedOffer.associations[0].applicableFlight
						.flightSegmentReference;
					const includedService = offer.pricedOffer.associations[0].includedService
						.serviceReferences;
					const associatedService = offer.pricedOffer.associations[0].associatedService
						.serviceReferences;
					const currency = totalPrice.code;

					// console.log(includedService);
					return (
						<div key={id}>
							<div className="row">

								<div className="col-xs-10">
									{flightSegmentReference.map((flightSegment, id) => {

										const segmentKey = flightSegment.ref.segmentKey;

										return (
											<div className="row" key={id}>
												<div className="col-xs-2">
													{flightSegment.ref.marketingCarrier.name} <br />
													{flightSegment.ref.marketingCarrier.flightNumber.value}
												</div>

												<div className="col-xs-5">
													<div className="row">
														<div className="col-xs-3">
															{moment(flightSegment.ref.departure.date).format("HH:mm")} <br />
															{flightSegment.ref.departure.airportCode.value}
														</div>

														<div className="col-xs-3">
															{moment(flightSegment.ref.arrival.date).format("HH:mm")} <br />
															{flightSegment.ref.arrival.airportCode.value}
														</div>

														<div className="col-xs-3">
															{flightSegment.ref.flightDetail.flightDuration.value}
														</div>
													</div>
												</div>

												<div className="col-xs-4">
													<div>
														<span>Included in price</span>

														{includedService.map((service, id) => {
															const serviceForSegment = service.associations[0].flight
																.originDestinationReferencesOrSegmentReferences[0].value;

															return (
																<span key={id}>
																{serviceForSegment.map((segment, id) => {
																	if (segmentKey === segment.segmentKey) {
																		return (
																			<img
																				key={id}
																				style={{
																					width: '40px',
																					height: '40px',
																					display: 'inline-block',
																					borderRadius: '20px',
																				}}
																				src={service.descriptions.description[0].link}
																				alt={service.descriptions.description[0].text.value}
																				title={service.descriptions.description[0].text.value}
																			/>
																		)
																	}

																	return null;
																})}
															</span>
															)
														})}
													</div>

													<div>
														<span>Optional extras</span>

														{associatedService.map((service, id) => {
															const serviceForSegment = service.associations[0].flight
																.originDestinationReferencesOrSegmentReferences[0].value;

															return (
																<span key={id}>
																{serviceForSegment.map((segment, id) => {
																	if (segmentKey === segment.segmentKey) {
																		return (
																			<span key={id}>
																				<img
																					style={{
																						width: '40px',
																						height: '40px',
																						display: 'inline-block',
																						borderRadius: '20px',
																					}}
																					src={service.descriptions.description[0].link}
																					alt={service.descriptions.description[0].text.value}
																					title={service.descriptions.description[0].text.value}
																				/>

																				{`${service.price[0].total.value} ${currency}`}
																			</span>
																		)
																	}

																	return null;
																})}
															</span>
															)
														})}
													</div>
												</div>

												<div className="col-xs-1">

												</div>
											</div>
										)
									})}
								</div>
								<div className="col-xs-2">
									Стоимость {totalPrice.value} {totalPrice.code}
								</div>
							</div>
							<hr />
						</div>
					)
				})}

			</div>
		)
	}
}

export default ShowFlightsResult;