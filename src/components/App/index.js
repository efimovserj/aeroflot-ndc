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
import Final from '../Final';
import TotalResult from '../TotalResult';

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
			order: {
				"document": {
					"name": "KRONOS NDC GATEWAY",
					"referenceVersion": "1.0"
				},
				"party": {
					"sender": {
						"travelAgencySender": {
							"contacts": [
								{
									"emailContact": {
										"address": {
											"value": "ndc@usdtravel.com"
										}
									}
								}
							],
							"pseudoCity": {
								"value": "A4A"
							},
							"agencyID": {
								"value": "C9",
								"owner": "C9"
							},
							"agentUser": {
								"name": "ksmith",
								"agentUserID": {
									"value": "ramesh@jrt.com"
								},
								"userRole": "ADMIN"
							},
							"iatanumber": "98417900"
						}
					}
				},
				"query": {
					"orderItems": {
						shoppingResponse: {},
					},
					"dataLists": {
						"flightSegmentList": [],
						"flightList": [],
						"originDestinationList": []
					},
					/*"passengers": {
						"passenger": []
					},*/
					"passengers": {
						"passenger": [
							{
								"objectKey": "PAX1",
								"ptc": {
									"value": "ADT",
									"quantity": 1
								},
								"residenceCode": {
									"value": "US"
								},
								"age": {
									"birthDate": {
										"value": "1985-09-04T20:00:00.000+0000"
									}
								},
								"name": {
									"surname": {
										"value": "Patel"
									},
									"given": [
										{
											"value": "Ramesh"
										}
									],
									"middle": [
										{
											"value": "N"
										}
									]
								},
								"contacts": [
									{
										"addressContact": {
											"street": [
												"22 Main Street"
											],
											"postalCode": "14202",
											"countryCode": {
												"value": "DE"
											}
										}
									},
									{
										"emailContact": {
											"address": {
												"value": "ramesh@jrtechnologies.com"
											}
										}
									},
									{
										"phoneContact": {
											"application": "Emergency",
											"number": [
												{
													"value": "9869159259"
												}
											]
										}
									}
								]
							},
							{
								"objectKey": "PAX1",
								"ptc": {
									"value": "ADT",
									"quantity": 1
								},
								"residenceCode": {
									"value": "US"
								},
								"age": {
									"birthDate": {
										"value": "1985-09-04T20:00:00.000+0000"
									}
								},
								"name": {
									"surname": {
										"value": "Patel"
									},
									"given": [
										{
											"value": "Ramesh"
										}
									],
									"middle": [
										{
											"value": "N"
										}
									]
								},
								"contacts": [
									{
										"addressContact": {
											"street": [
												"22 Main Street"
											],
											"postalCode": "14202",
											"countryCode": {
												"value": "DE"
											}
										}
									},
									{
										"emailContact": {
											"address": {
												"value": "ramesh@jrtechnologies.com"
											}
										}
									},
									{
										"phoneContact": {
											"application": "Emergency",
											"number": [
												{
													"value": "9869159259"
												}
											]
										}
									}
								]
							},
						]
					},
					/*"payments": [
					 {
					 "method": {
					 "paymentCard": {
					 "cardCode": "",
					 "cardNumber": {
					 "value": ""
					 },
					 "seriesCode": {
					 "value": ""
					 },
					 "effectiveExpireDate": {
					 "effective": ""
					 }
					 }
					 },
					 "amount": {
					 "value": 0,
					 "taxable": true
					 },
					 "payer": {
					 "name": {
					 "surname": {
					 "value": ""
					 },
					 "given": [
					 {
					 "value": ""
					 }
					 ]
					 },
					 "contacts": [
					 {
					 "addressContact": {
					 "street": [
					 "22 Main Street"
					 ],
					 "cityName": "FRA",
					 "postalCode": "14201",
					 "countryCode": {
					 "value": "DE"
					 }
					 },
					 "emailContact": {
					 "address": {
					 "value": "ramesh@jrtechnologies.com"
					 }
					 }
					 }
					 ]
					 }
					 }
					 ],*/
					"payments": [
						{
							"method": {
								"paymentCard": {
									"cardCode": "MC",
									"cardNumber": {
										"value": "1111222233334444"
									},
									"seriesCode": {
										"value": "584"
									},
									"effectiveExpireDate": {
										"effective": "0322"
									}
								}
							},
							"amount": {
								"value": 90722,
								"taxable": true
							},
							"payer": {
								"name": {
									"surname": {
										"value": "Patel"
									},
									"given": [
										{
											"value": "Ramesh"
										}
									]
								},
								"contacts": [
									{
										"addressContact": {
											"street": [
												"22 Main Street"
											],
											"cityName": "FRA",
											"postalCode": "14201",
											"countryCode": {
												"value": "DE"
											}
										},
										"emailContact": {
											"address": {
												"value": "ramesh@jrtechnologies.com"
											}
										}
									}
								]
							}
						}
					],
					"metadata": {
						"other": [
							{
								"currencyMetadatas": [
									{
										"metadataKey": "EUR",
										"decimals": 2
									}
								]
							}
						]
					}
				},
				"target": "Production",
				"version": "16.1"
			},
			orderResult: {}
		};
	}

	setSearchParamsMock = () => {
		let status = Object.assign({}, this.state.status);
		const self = this;

		this.setState({
			status: {
				...this.state.status,
				waiting: true,
			}
		});

		let changedOrderQuery = Object.assign({}, this.state.order.query);

		changedOrderQuery.orderItems.shoppingResponse = response.shoppingResponseID;
		changedOrderQuery.orderItems.shoppingResponse.offers = [];

		status.search = 'done';
		status.chooseFlight = true;
		status.waiting = false;

		setTimeout(() => {
			self.setState({
				searchParams: request,
				searchResult: response,
				order: {
					...this.state.order,
					query: changedOrderQuery,
				},
				status,
			})
		}, 1000)
	};

	setSearchParams = (searchParams) => {
		let status = Object.assign({}, this.state.status);
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
			url: library.lib.urlsLibrary.offers,
			callback: (response) => {
				status.search = 'done';
				status.chooseFlight = true;
				status.waiting = false;

				let changedOrderQuery = Object.assign({}, this.state.order.query);

				changedOrderQuery.orderItems.shoppingResponse = JSON.parse(response).shoppingResponseID;
				changedOrderQuery.orderItems.shoppingResponse.offers = [];

				self.setState({
					searchParams: searchParams,
					searchResult: JSON.parse(response),
					status,
				})
			}
		});
	};

	setFlightParams = (flightParams) => {
		let query = Object.assign({}, this.state.order.query);

		query.dataLists = {
			"flightSegmentList": [],
			"flightList": [],
			"originDestinationList": [],
		};

		for (let opt in flightParams) {
			if ({}.hasOwnProperty.call(flightParams, opt)) {
				query.orderItems.shoppingResponse.offers.push({
					offerID: flightParams[opt].offerID,
					offerItems: flightParams[opt].offerItems,
				});

				query.dataLists.flightSegmentList = query.dataLists.flightSegmentList.concat(flightParams[opt].flightSegmentList);
				query.dataLists.flightList.push(flightParams[opt].flightList[0]);
				query.dataLists.originDestinationList.push(flightParams[opt].originDestinationList);
			}
		}

		this.setState({
			flightParams,
			order: {
				...this.state.order,
				query: query,
			},
			status: {
				...this.state.status,
				chooseFlight: 'done',
				search: 'done',
				passengers: true,
			},
		})
	};

	setPassengers = (data) => {
		let status = Object.assign({}, this.state.status);
		let query = Object.assign({}, this.state.order.query);

		status.passengers = 'done';
		status.payment = true;
		status.waiting = false;

		query.passengers = {
					"passenger": [
						{
							"objectKey": "PAX1",
							"ptc": {
								"value": "ADT",
								"quantity": 1
							},
							"residenceCode": {
								"value": "US"
							},
							"age": {
								"birthDate": {
									"value": "1985-09-04T20:00:00.000+0000"
								}
							},
							"name": {
								"surname": {
									"value": "Patel"
								},
								"given": [
									{
										"value": "Ramesh"
									}
								],
								"middle": [
									{
										"value": "N"
									}
								]
							},
							"contacts": [
								{
									"addressContact": {
										"street": [
											"22 Main Street"
										],
										"postalCode": "14202",
										"countryCode": {
											"value": "DE"
										}
									}
								},
								{
									"emailContact": {
										"address": {
											"value": "ramesh@jrtechnologies.com"
										}
									}
								},
								{
									"phoneContact": {
										"application": "Emergency",
										"number": [
											{
												"value": "9869159259"
											}
										]
									}
								}
							]
						},
						{
							"objectKey": "PAX1",
							"ptc": {
								"value": "ADT",
								"quantity": 1
							},
							"residenceCode": {
								"value": "US"
							},
							"age": {
								"birthDate": {
									"value": "1985-09-04T20:00:00.000+0000"
								}
							},
							"name": {
								"surname": {
									"value": "Patel"
								},
								"given": [
									{
										"value": "Ramesh"
									}
								],
								"middle": [
									{
										"value": "N"
									}
								]
							},
							"contacts": [
								{
									"addressContact": {
										"street": [
											"22 Main Street"
										],
										"postalCode": "14202",
										"countryCode": {
											"value": "DE"
										}
									}
								},
								{
									"emailContact": {
										"address": {
											"value": "ramesh@jrtechnologies.com"
										}
									}
								},
								{
									"phoneContact": {
										"application": "Emergency",
										"number": [
											{
												"value": "9869159259"
											}
										]
									}
								}
							]
						},
					]
				};

		this.setState({
			order: {
				...this.state.order,
				query,
			},
			status,
		});
	}

	setPaymentInfo = (data) => {
		let status = Object.assign({}, this.state.status);

		this.setState({
			status: {
				...this.state.status,
				waiting: true,
			}
		});

		let passengers = {
			"document": {
				"name": "KRONOS NDC GATEWAY",
				"referenceVersion": "1.0"
			},
			"party": {
				"sender": {
					"travelAgencySender": {
						"contacts": [
							{
								"emailContact": {
									"address": {
										"value": "ndc@usdtravel.com"
									}
								}
							}
						],
						"pseudoCity": {
							"value": "A4A"
						},
						"agencyID": {
							"value": "C9",
							"owner": "C9"
						},
						"agentUser": {
							"name": "ksmith",
							"agentUserID": {
								"value": "ramesh@jrt.com"
							},
							"userRole": "ADMIN"
						},
						"iatanumber": "98417900"
					}
				}
			},
			"query": {
				"passengers": {
					"passenger": [
						{
							"objectKey": "PAX1",
							"ptc": {
								"value": "ADT",
								"quantity": 1
							},
							"residenceCode": {
								"value": "US"
							},
							"age": {
								"birthDate": {
									"value": "1985-09-04T20:00:00.000+0000"
								}
							},
							"name": {
								"surname": {
									"value": "Patel"
								},
								"given": [
									{
										"value": "Ramesh"
									}
								],
								"middle": [
									{
										"value": "N"
									}
								]
							},
							"contacts": [
								{
									"addressContact": {
										"street": [
											"22 Main Street"
										],
										"postalCode": "14202",
										"countryCode": {
											"value": "DE"
										}
									}
								},
								{
									"emailContact": {
										"address": {
											"value": "ramesh@jrtechnologies.com"
										}
									}
								},
								{
									"phoneContact": {
										"application": "Emergency",
										"number": [
											{
												"value": "9869159259"
											}
										]
									}
								}
							]
						},
						{
							"objectKey": "PAX1",
							"ptc": {
								"value": "ADT",
								"quantity": 1
							},
							"residenceCode": {
								"value": "US"
							},
							"age": {
								"birthDate": {
									"value": "1985-09-04T20:00:00.000+0000"
								}
							},
							"name": {
								"surname": {
									"value": "Patel"
								},
								"given": [
									{
										"value": "Ramesh"
									}
								],
								"middle": [
									{
										"value": "N"
									}
								]
							},
							"contacts": [
								{
									"addressContact": {
										"street": [
											"22 Main Street"
										],
										"postalCode": "14202",
										"countryCode": {
											"value": "DE"
										}
									}
								},
								{
									"emailContact": {
										"address": {
											"value": "ramesh@jrtechnologies.com"
										}
									}
								},
								{
									"phoneContact": {
										"application": "Emergency",
										"number": [
											{
												"value": "9869159259"
											}
										]
									}
								}
							]
						},
					]
				},
				"orderItems": {
					"shoppingResponse": {
						"owner": "C9",
						"responseID": {
							"value": "RE2a07c59a77634ad08a606f8639ea428c"
						},
						"offers": [
							{
								"offerID": {
									"value": "7",
									"owner": "C9"
								},
								"offerItems": [
									{
										"offerItemID": {
											"value": "1#M#109974565#309974565",
											"owner": "C9"
										},
										"passengers": [
											"<?xml version=\"1.0\" encoding=\"UTF-16\"?>\n<PassengerReference xmlns=\"http://www.iata.org/IATA/EDIST\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">PAX1</PassengerReference>"
										]
									}
								]
							}
						]
					}
				},
				"payments": [
					{
						"method": {
							"paymentCard": {
								"cardCode": "MC",
								"cardNumber": {
									"value": "1111222233334444"
								},
								"seriesCode": {
									"value": "584"
								},
								"effectiveExpireDate": {
									"effective": "0322"
								}
							}
						},
						"amount": {
							"value": 90722,
							"taxable": true
						},
						"payer": {
							"name": {
								"surname": {
									"value": "Patel"
								},
								"given": [
									{
										"value": "Ramesh"
									}
								]
							},
							"contacts": [
								{
									"addressContact": {
										"street": [
											"22 Main Street"
										],
										"cityName": "FRA",
										"postalCode": "14201",
										"countryCode": {
											"value": "DE"
										}
									},
									"emailContact": {
										"address": {
											"value": "ramesh@jrtechnologies.com"
										}
									}
								}
							]
						}
					}
				],
				"dataLists": {
					"flightSegmentList": [
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-25T21:00:00.000+0000",
								"time": "09:35",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "CDG"
								},
								"date": "2016-05-25T21:00:00.000+0000",
								"time": "10:45",
								"airportName": "Charles de Gaulle"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1030"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1030"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "320"
								},
								"name": "320 - AIRBUS INDUSTRIE A320-100/200 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG5"
						},
						{
							"departure": {
								"airportCode": {
									"value": "CDG"
								},
								"date": "2016-05-25T21:00:00.000+0000",
								"time": "14:45",
								"airportName": "Charles de Gaulle"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-25T21:00:00.000+0000",
								"time": "16:25",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1030"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1030"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "320"
								},
								"name": "320 - AIRBUS INDUSTRIE A320-100/200 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H40M"
								}
							},
							"segmentKey": "SEG6"
						}
					],
					"flightList": [
						{
							"journey": {
								"time": "PT6H50M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-25T21:00:00.000+0000",
											"time": "09:35",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "CDG"
											},
											"date": "2016-05-25T21:00:00.000+0000",
											"time": "10:45",
											"airportName": "Charles de Gaulle"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1030"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1030"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "320"
											},
											"name": "320 - AIRBUS INDUSTRIE A320-100/200 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG5"
									},
									{
										"departure": {
											"airportCode": {
												"value": "CDG"
											},
											"date": "2016-05-25T21:00:00.000+0000",
											"time": "14:45",
											"airportName": "Charles de Gaulle"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-25T21:00:00.000+0000",
											"time": "16:25",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1030"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1030"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "320"
											},
											"name": "320 - AIRBUS INDUSTRIE A320-100/200 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H40M"
											}
										},
										"segmentKey": "SEG6"
									}
								]
							},
							"flightKey": "FL3"
						}
					],
					"originDestinationList": [
						{
							"departureCode": {
								"value": "FRA"
							},
							"arrivalCode": {
								"value": "TXL"
							},
							"originDestinationKey": "OD1",
							"flightReferences": {
								"value": [
									{
										"journey": {
											"time": "PT6H50M"
										},
										"segmentReferences": {
											"value": [
												{
													"departure": {
														"airportCode": {
															"value": "FRA"
														},
														"date": "2016-05-25T21:00:00.000+0000",
														"time": "09:35",
														"airportName": "Frankfurt International"
													},
													"arrival": {
														"airportCode": {
															"value": "CDG"
														},
														"date": "2016-05-25T21:00:00.000+0000",
														"time": "10:45",
														"airportName": "Charles de Gaulle"
													},
													"marketingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1030"
														}
													},
													"operatingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1030"
														}
													},
													"equipment": {
														"aircraftCode": {
															"value": "320"
														},
														"name": "320 - AIRBUS INDUSTRIE A320-100/200 JET"
													},
													"flightDetail": {
														"flightDuration": {
															"value": "PT1H10M"
														}
													},
													"segmentKey": "SEG5"
												},
												{
													"departure": {
														"airportCode": {
															"value": "CDG"
														},
														"date": "2016-05-25T21:00:00.000+0000",
														"time": "14:45",
														"airportName": "Charles de Gaulle"
													},
													"arrival": {
														"airportCode": {
															"value": "TXL"
														},
														"date": "2016-05-25T21:00:00.000+0000",
														"time": "16:25",
														"airportName": "Berlin Tegel Airport"
													},
													"marketingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1030"
														}
													},
													"operatingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1030"
														}
													},
													"equipment": {
														"aircraftCode": {
															"value": "320"
														},
														"name": "320 - AIRBUS INDUSTRIE A320-100/200 JET"
													},
													"flightDetail": {
														"flightDuration": {
															"value": "PT1H40M"
														}
													},
													"segmentKey": "SEG6"
												}
											]
										},
										"flightKey": "FL3"
									}
								]
							}
						}
					]
				},
				"metadata": {
					"other": [
						{
							"currencyMetadatas": [
								{
									"metadataKey": "EUR",
									"decimals": 2
								}
							]
						}
					]
				}
			},
			"target": "Production",
			"version": "16.1"
		};

		library.lib.getResponse({
			method: 'POST',
			data: passengers,
			url: library.lib.urlsLibrary.orders,
			callback: (orderResult) => {
				status.payment = 'done';
				status.final = true;
				status.waiting = false;

				this.setState({
					orderResult,
					status,
				})
			}
		});

		this.setState({ passengers: data })
	}

	/*setPaymentInfo = (data) => {
		this.setState({ paymentInfo: data })
	}*/

	render() {
		const { status, searchResult, searchParams } = this.state;

		return (
			<div className="App">

				<Navigation status={this.state.status}/>

				<div className={['container', status.waiting ? 'preloading' : ''].join(' ')}>

					{status.chooseFlight &&
					<TotalResult dataLists={searchResult.dataLists}
					             searchParams={searchParams.coreQuery.originDestinations}
					/>}

					{(status.search && status.search !== 'done') &&
					<SearchFlights airports={airports} callback={this.setSearchParams}/>}

					{(status.chooseFlight && status.chooseFlight !== 'done') &&
					<ShowFlightsResult
						offersGroup={searchResult.offersGroup.airlineOffers[0]}
						dataLists={searchResult.dataLists}
						searchParams={searchParams.coreQuery.originDestinations[0]}
						callback={this.setFlightParams}
					/>
					}

					{status.passengers && status.passengers !== 'done' && <PassengersDetail
						dataLists={searchResult.dataLists}
						callback={this.setPassengers}
					/>}

					{status.payment && status.payment !== 'done' && <PaymentInfo
						callback={this.setPaymentInfo}
					/>}

					{status.final && status.final !== 'done' && <Final orderResult={this.state.orderResult} />}

					{status.waiting && <PreLoader status={status.waiting}/>}
				</div>

			</div>
		);
	}
}

export default App;
