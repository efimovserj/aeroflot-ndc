const offer = {
	"document": {
		"name": "KRONOS NDC GATEWAY",
		"referenceVersion": "1.0"
	},
	"success": {},
	"airShoppingProcessing": {},
	"shoppingResponseID": {
		"owner": "C9",
		"responseID": {
			"value": "REc0f30ee8c94b49aa8452de6e9947db69"
		}
	},
	"offersGroup": {
		"airlineOffers": [
			{
				"totalOfferQuantity": 78,
				"owner": {
					"value": "C9"
				},
				"airlineOffer": [
					{
						"offerID": {
							"value": "1",
							"owner": "C9"
						},
						"timeLimits": {
							"offerExpiration": {
								"timestamp": "2016-05-06T20:59:00.000+0000"
							}
						},
						"totalPrice": {
							"detailCurrencyPrice": {
								"total": {
									"value": 1673596,
									"taxable": true,
									"code": "EUR"
								},
								"details": {
									"detail": [
										{
											"subTotal": {
												"value": 1062654,
												"taxable": true,
												"code": "EUR"
											},
											"application": "Base Fare"
										}
									]
								},
								"taxes": {
									"total": {
										"value": 610942,
										"taxable": true,
										"code": "EUR"
									}
								}
							}
						},
						"penalty": {
							"details": [
								{
									"type": "Changes/Cancellation/NoShow",
									"amounts": [
										{
											"currencyAmountValue": {
												"value": 500,
												"taxable": true
											},
											"applicableFeeRemarks": {
												"remark": [
													{
														"value": "The penalty for changes or cancellations after the order is placed is\n                                            500 Euros. Non refundable for no-show.\n                                        "
													}
												]
											}
										}
									]
								}
							]
						},
						"pricedOffer": {
							"offerPrice": [
								{
									"requestedDate": {
										"priceDetail": {
											"totalAmount": {
												"simpleCurrencyPrice": {
													"value": 278933,
													"taxable": true,
													"code": "EUR"
												}
											},
											"baseAmount": {
												"value": 177109,
												"taxable": true,
												"code": "EUR"
											},
											"taxes": {
												"total": {
													"value": 101824,
													"taxable": true,
													"code": "EUR"
												}
											}
										},
										"associations": [
											{
												"associatedTraveler": {
													"travelerReferences": [
														{
															"objectKey": "SH1",
															"ptc": {
																"value": "ADT",
																"quantity": 2
															}
														}
													]
												}
											}
										]
									},
									"fareDetail": {
										"fareComponent": [
											{
												"fareBasis": {
													"fareBasisCode": {
														"code": "ESR"
													}
												}
											}
										]
									},
									"offerItemID": "1#M#109986797#309986797"
								},
								{
									"requestedDate": {
										"priceDetail": {
											"totalAmount": {
												"simpleCurrencyPrice": {
													"value": 278933,
													"taxable": true,
													"code": "EUR"
												}
											},
											"baseAmount": {
												"value": 177109,
												"taxable": true,
												"code": "EUR"
											},
											"taxes": {
												"total": {
													"value": 101824,
													"taxable": true,
													"code": "EUR"
												}
											}
										},
										"associations": [
											{
												"associatedTraveler": {
													"travelerReferences": [
														{
															"objectKey": "SH2",
															"ptc": {
																"value": "CHD",
																"quantity": 2
															}
														}
													]
												}
											}
										]
									},
									"fareDetail": {
										"fareComponent": [
											{
												"fareBasis": {
													"fareBasisCode": {
														"code": "ESR"
													}
												}
											}
										]
									},
									"offerItemID": "2#M#109986797#309986797"
								},
								{
									"requestedDate": {
										"priceDetail": {
											"totalAmount": {
												"simpleCurrencyPrice": {
													"value": 278933,
													"taxable": true,
													"code": "EUR"
												}
											},
											"baseAmount": {
												"value": 177109,
												"taxable": true,
												"code": "EUR"
											},
											"taxes": {
												"total": {
													"value": 101824,
													"taxable": true,
													"code": "EUR"
												}
											}
										},
										"associations": [
											{
												"associatedTraveler": {
													"travelerReferences": [
														{
															"objectKey": "SH3",
															"ptc": {
																"value": "INF",
																"quantity": 2
															}
														}
													]
												}
											}
										]
									},
									"fareDetail": {
										"fareComponent": [
											{
												"fareBasis": {
													"fareBasisCode": {
														"code": "ESR"
													}
												}
											}
										]
									},
									"offerItemID": "3#M#109986797#309986797"
								}
							],
							"associations": [
								{
									"applicableFlight": {
										"flightSegmentReference": [
											{
												"cabin": {
													"cabinDesignator": {
														"value": "M"
													}
												},
												"ref": {
													"departure": {
														"airportCode": {
															"value": "BCN"
														},
														"date": "2016-05-19T21:00:00.000+0000",
														"time": "10:30",
														"airportName": "Barcelona Airport"
													},
													"arrival": {
														"airportCode": {
															"value": "FRA"
														},
														"date": "2016-05-19T21:00:00.000+0000",
														"time": "12:40",
														"airportName": "Frankfurt International"
													},
													"marketingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1125"
														}
													},
													"operatingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1125"
														}
													},
													"equipment": {
														"aircraftCode": {
															"value": "321"
														},
														"name": "321 - AIRBUS INDUSTRIE A321 JET"
													},
													"flightDetail": {
														"flightDuration": {
															"value": "PT2H10M"
														}
													},
													"segmentKey": "SEG1"
												}
											},
											{
												"cabin": {
													"cabinDesignator": {
														"value": "M"
													}
												},
												"ref": {
													"departure": {
														"airportCode": {
															"value": "FRA"
														},
														"date": "2016-05-19T21:00:00.000+0000",
														"time": "16:40",
														"airportName": "Frankfurt International"
													},
													"arrival": {
														"airportCode": {
															"value": "TXL"
														},
														"date": "2016-05-19T21:00:00.000+0000",
														"time": "17:50",
														"airportName": "Berlin Tegel Airport"
													},
													"marketingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1125"
														}
													},
													"operatingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1125"
														}
													},
													"equipment": {
														"aircraftCode": {
															"value": "321"
														},
														"name": "321 - AIRBUS INDUSTRIE A321 JET"
													},
													"flightDetail": {
														"flightDuration": {
															"value": "PT1H10M"
														}
													},
													"segmentKey": "SEG2"
												}
											}
										],
										"originDestinationReferences": [
											{
												"departureCode": {
													"value": "BCN"
												},
												"arrivalCode": {
													"value": "TXL"
												},
												"originDestinationKey": "OD1",
												"flightReferences": {
													"value": [
														{
															"journey": {
																"time": "PT7H20M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "10:30",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "12:40",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1125"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1125"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H10M"
																			}
																		},
																		"segmentKey": "SEG1"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "16:40",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "17:50",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1125"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1125"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG2"
																	}
																]
															},
															"flightKey": "FL1"
														},
														{
															"journey": {
																"time": "PT7H20M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "12:45",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "14:55",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1127"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1127"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H10M"
																			}
																		},
																		"segmentKey": "SEG3"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "18:55",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "20:05",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1127"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1127"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG4"
																	}
																]
															},
															"flightKey": "FL2"
														},
														{
															"journey": {
																"time": "PT7H20M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "16:00",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "18:10",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1129"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1129"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H10M"
																			}
																		},
																		"segmentKey": "SEG5"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "22:10",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "23:20",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1129"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1129"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG6"
																	}
																]
															},
															"flightKey": "FL3"
														},
														{
															"journey": {
																"time": "PT7H20M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "14:00",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "16:10",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1131"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1131"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H10M"
																			}
																		},
																		"segmentKey": "SEG7"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "20:10",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "21:20",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1131"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1131"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG8"
																	}
																]
															},
															"flightKey": "FL4"
														},
														{
															"journey": {
																"time": "PT7H20M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "18:50",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "21:00",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1133"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1133"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H10M"
																			}
																		},
																		"segmentKey": "SEG9"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-20T21:00:00.000+0000",
																			"time": "01:00",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-20T21:00:00.000+0000",
																			"time": "02:10",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1133"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1133"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG10"
																	}
																]
															},
															"flightKey": "FL5"
														},
														{
															"journey": {
																"time": "PT7H20M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "16:55",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "19:05",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1135"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1135"
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
																				"value": "PT2H10M"
																			}
																		},
																		"segmentKey": "SEG11"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "23:05",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-20T21:00:00.000+0000",
																			"time": "00:15",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1135"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1135"
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
																		"segmentKey": "SEG12"
																	}
																]
															},
															"flightKey": "FL6"
														},
														{
															"journey": {
																"time": "PT7H20M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "08:05",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "10:15",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1137"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1137"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H10M"
																			}
																		},
																		"segmentKey": "SEG13"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "14:15",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "15:25",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1137"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1137"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG14"
																	}
																]
															},
															"flightKey": "FL7"
														},
														{
															"journey": {
																"time": "PT7H20M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "06:55",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "09:05",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1139"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1139"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H10M"
																			}
																		},
																		"segmentKey": "SEG15"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "13:05",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "14:15",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1139"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1139"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG16"
																	}
																]
															},
															"flightKey": "FL8"
														},
														{
															"journey": {
																"time": "PT6H15M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "09:10",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "11:15",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1809"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1809"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "E95"
																			},
																			"name": "E95 - EMBRAER 195 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H5M"
																			}
																		},
																		"segmentKey": "SEG17"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "14:15",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "15:25",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1809"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1809"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "E95"
																			},
																			"name": "E95 - EMBRAER 195 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG18"
																	}
																]
															},
															"flightKey": "FL9"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "12:00",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "14:00",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1811"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1811"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG19"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "17:00",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "18:10",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1811"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1811"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG20"
																	}
																]
															},
															"flightKey": "FL10"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "15:35",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "17:35",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1813"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1813"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG21"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "20:35",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "21:45",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1813"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1813"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG22"
																	}
																]
															},
															"flightKey": "FL11"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "18:45",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "20:45",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1815"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1815"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG23"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "23:45",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-20T21:00:00.000+0000",
																			"time": "00:55",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1815"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1815"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG24"
																	}
																]
															},
															"flightKey": "FL12"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "07:50",
																			"airportName": "Barcelona Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "09:50",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1817"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1817"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG25"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "12:50",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-19T21:00:00.000+0000",
																			"time": "14:00",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1817"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1817"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG26"
																	}
																]
															},
															"flightKey": "FL13"
														}
													]
												}
											}
										],
										"flightReferences": {
											"value": [
												{
													"journey": {
														"time": "PT7H20M"
													},
													"segmentReferences": {
														"value": [
															{
																"departure": {
																	"airportCode": {
																		"value": "BCN"
																	},
																	"date": "2016-05-19T21:00:00.000+0000",
																	"time": "10:30",
																	"airportName": "Barcelona Airport"
																},
																"arrival": {
																	"airportCode": {
																		"value": "FRA"
																	},
																	"date": "2016-05-19T21:00:00.000+0000",
																	"time": "12:40",
																	"airportName": "Frankfurt International"
																},
																"marketingCarrier": {
																	"airlineID": {
																		"value": "C9"
																	},
																	"name": "Kronos Air",
																	"flightNumber": {
																		"value": "1125"
																	}
																},
																"operatingCarrier": {
																	"airlineID": {
																		"value": "C9"
																	},
																	"name": "Kronos Air",
																	"flightNumber": {
																		"value": "1125"
																	}
																},
																"equipment": {
																	"aircraftCode": {
																		"value": "321"
																	},
																	"name": "321 - AIRBUS INDUSTRIE A321 JET"
																},
																"flightDetail": {
																	"flightDuration": {
																		"value": "PT2H10M"
																	}
																},
																"segmentKey": "SEG1"
															},
															{
																"departure": {
																	"airportCode": {
																		"value": "FRA"
																	},
																	"date": "2016-05-19T21:00:00.000+0000",
																	"time": "16:40",
																	"airportName": "Frankfurt International"
																},
																"arrival": {
																	"airportCode": {
																		"value": "TXL"
																	},
																	"date": "2016-05-19T21:00:00.000+0000",
																	"time": "17:50",
																	"airportName": "Berlin Tegel Airport"
																},
																"marketingCarrier": {
																	"airlineID": {
																		"value": "C9"
																	},
																	"name": "Kronos Air",
																	"flightNumber": {
																		"value": "1125"
																	}
																},
																"operatingCarrier": {
																	"airlineID": {
																		"value": "C9"
																	},
																	"name": "Kronos Air",
																	"flightNumber": {
																		"value": "1125"
																	}
																},
																"equipment": {
																	"aircraftCode": {
																		"value": "321"
																	},
																	"name": "321 - AIRBUS INDUSTRIE A321 JET"
																},
																"flightDetail": {
																	"flightDuration": {
																		"value": "PT1H10M"
																	}
																},
																"segmentKey": "SEG2"
															}
														]
													},
													"flightKey": "FL1"
												}
											]
										}
									},
									"priceClass": {
										"priceClassReference": {
											"name": "M-ESR",
											"code": "M",
											"fareBasisCode": {
												"code": "ESR"
											},
											"objectKey": "PC1"
										}
									},
									"includedService": {
										"serviceReferences": [
											{
												"serviceID": {
													"value": "1004",
													"owner": "C9"
												},
												"name": {
													"value": "Lounge pass"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Escape the crowds and find a quiet space to work or relax"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/lounge.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "lounge.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/lounge.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV2"
											}
										]
									},
									"associatedService": {
										"serviceReferences": [
											{
												"serviceID": {
													"value": "1002",
													"owner": "C9"
												},
												"name": {
													"value": "Inflight Wi-Fi"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Stay connected using any Wi-Fi enabled device"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/wifi.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "wifi.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/wifi.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1200,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV1"
											},
											{
												"serviceID": {
													"value": "1008",
													"owner": "C9"
												},
												"name": {
													"value": "Advanced seat selection"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "A convenient option that lets you reserve your preferred seat"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/AdvanceSeat.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "AdvanceSeat.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/AdvanceSeat.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1200,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV3"
											},
											{
												"serviceID": {
													"value": "1009",
													"owner": "C9"
												},
												"name": {
													"value": "Premium Seating"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Take advantage of Premium cabin to rest,read or work in freedom"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/PremiumSeat.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "PremiumSeat.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/PremiumSeat.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 5500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV4"
											},
											{
												"serviceID": {
													"value": "1010",
													"owner": "C9"
												},
												"name": {
													"value": "Vegetarian Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Vegetarian meal flavoured with spices from Indian sub-continent"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/VegMeal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "VegMeal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/VegMeal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV5"
											},
											{
												"serviceID": {
													"value": "1011",
													"owner": "C9"
												},
												"name": {
													"value": "Standard Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Vegetarian Oriental Meal"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/Standard Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "Standard Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/Standard Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV6"
											},
											{
												"serviceID": {
													"value": "1012",
													"owner": "C9"
												},
												"name": {
													"value": "Standard Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "This is a non-strict vegetarian meal"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/StandardNonVeg.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "StandardNonVeg.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/StandardNonVeg.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV7"
											},
											{
												"serviceID": {
													"value": "1013",
													"owner": "C9"
												},
												"name": {
													"value": "Low-Carb meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "For passengers with special dietary requirements as Low Carb"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/LowCarb Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "LowCarb Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/LowCarb Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV8"
											},
											{
												"serviceID": {
													"value": "1014",
													"owner": "C9"
												},
												"name": {
													"value": "Diabetic Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Sugar is not used in the preparation of this meal."
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/Diabetic Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "Diabetic Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/Diabetic Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV9"
											},
											{
												"serviceID": {
													"value": "1016",
													"owner": "C9"
												},
												"name": {
													"value": "Lactose-free meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "This meal is for customers who are lactose-intolerant."
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/LactoseFree Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "LactoseFree Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/LactoseFree Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV10"
											},
											{
												"serviceID": {
													"value": "1018",
													"owner": "C9"
												},
												"name": {
													"value": "Muslim Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "*Halal* meal prepared according to Islamic principles."
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/Muslim Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "Muslim Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/Muslim Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV11"
											},
											{
												"serviceID": {
													"value": "1020",
													"owner": "C9"
												},
												"name": {
													"value": "Kosher meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Prepared by kosher caterers under rabbinical supervision"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/Kosher Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "Kosher Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/Kosher Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV12"
											},
											{
												"serviceID": {
													"value": "1022",
													"owner": "C9"
												},
												"name": {
													"value": "Snack"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Enjoy a wide selection of complimentary snacks and beverages."
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/snacks.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "snacks.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/snacks.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV13"
											},
											{
												"serviceID": {
													"value": "1032",
													"owner": "C9"
												},
												"name": {
													"value": "2nd Bag"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Don't get caught out at the airport"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/bag2.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "bag2.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/bag2.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 3500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV14"
											},
											{
												"serviceID": {
													"value": "1051",
													"owner": "C9"
												},
												"name": {
													"value": "3rd Bag"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Don't get caught out at the airport"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/bag3.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "bag3.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/bag3.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 11500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 11500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV15"
											},
											{
												"serviceID": {
													"value": "1062",
													"owner": "C9"
												},
												"name": {
													"value": "1st bag"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Don't get caught out at the airport"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "bag1.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 3500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 3500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV16"
											}
										]
									}
								}
							]
						}
					},
					{
						"offerID": {
							"value": "78",
							"owner": "C9"
						},
						"timeLimits": {
							"offerExpiration": {
								"timestamp": "2016-05-06T20:59:00.000+0000"
							}
						},
						"totalPrice": {
							"detailCurrencyPrice": {
								"total": {
									"value": 292202,
									"taxable": true,
									"code": "EUR"
								},
								"details": {
									"detail": [
										{
											"subTotal": {
												"value": 143973,
												"taxable": true,
												"code": "EUR"
											},
											"application": "Base Fare"
										}
									]
								},
								"taxes": {
									"total": {
										"value": 148229,
										"taxable": true,
										"code": "EUR"
									}
								}
							}
						},
						"penalty": {
							"details": [
								{
									"type": "Changes/Cancellation/NoShow",
									"amounts": [
										{
											"currencyAmountValue": {
												"value": 125,
												"taxable": true
											},
											"applicableFeeRemarks": {
												"remark": [
													{
														"value": "The penalty for changes or cancellations after the order is placed is\n                                            125 Euros. Non refundable for no-show.\n                                        "
													}
												]
											}
										}
									]
								}
							]
						},
						"pricedOffer": {
							"offerPrice": [
								{
									"requestedDate": {
										"priceDetail": {
											"totalAmount": {
												"simpleCurrencyPrice": {
													"value": 48700,
													"taxable": true,
													"code": "EUR"
												}
											},
											"baseAmount": {
												"value": 23995,
												"taxable": true,
												"code": "EUR"
											},
											"taxes": {
												"total": {
													"value": 24705,
													"taxable": true,
													"code": "EUR"
												}
											}
										},
										"associations": [
											{
												"associatedTraveler": {
													"travelerReferences": [
														{
															"objectKey": "SH1",
															"ptc": {
																"value": "ADT",
																"quantity": 2
															}
														}
													]
												}
											}
										]
									},
									"fareDetail": {
										"fareComponent": [
											{
												"fareBasis": {
													"fareBasisCode": {
														"code": "EFR"
													}
												}
											}
										]
									},
									"offerItemID": "1#M#310076471#110076471"
								},
								{
									"requestedDate": {
										"priceDetail": {
											"totalAmount": {
												"simpleCurrencyPrice": {
													"value": 48700,
													"taxable": true,
													"code": "EUR"
												}
											},
											"baseAmount": {
												"value": 23995,
												"taxable": true,
												"code": "EUR"
											},
											"taxes": {
												"total": {
													"value": 24705,
													"taxable": true,
													"code": "EUR"
												}
											}
										},
										"associations": [
											{
												"associatedTraveler": {
													"travelerReferences": [
														{
															"objectKey": "SH2",
															"ptc": {
																"value": "CHD",
																"quantity": 2
															}
														}
													]
												}
											}
										]
									},
									"fareDetail": {
										"fareComponent": [
											{
												"fareBasis": {
													"fareBasisCode": {
														"code": "EFR"
													}
												}
											}
										]
									},
									"offerItemID": "2#M#310076471#110076471"
								},
								{
									"requestedDate": {
										"priceDetail": {
											"totalAmount": {
												"simpleCurrencyPrice": {
													"value": 48700,
													"taxable": true,
													"code": "EUR"
												}
											},
											"baseAmount": {
												"value": 23995,
												"taxable": true,
												"code": "EUR"
											},
											"taxes": {
												"total": {
													"value": 24705,
													"taxable": true,
													"code": "EUR"
												}
											}
										},
										"associations": [
											{
												"associatedTraveler": {
													"travelerReferences": [
														{
															"objectKey": "SH3",
															"ptc": {
																"value": "INF",
																"quantity": 2
															}
														}
													]
												}
											}
										]
									},
									"fareDetail": {
										"fareComponent": [
											{
												"fareBasis": {
													"fareBasisCode": {
														"code": "EFR"
													}
												}
											}
										]
									},
									"offerItemID": "3#M#310076471#110076471"
								}
							],
							"associations": [
								{
									"applicableFlight": {
										"flightSegmentReference": [
											{
												"cabin": {
													"cabinDesignator": {
														"value": "M"
													}
												},
												"ref": {
													"departure": {
														"airportCode": {
															"value": "TXL"
														},
														"date": "2016-05-29T21:00:00.000+0000",
														"time": "13:45",
														"airportName": "Berlin Tegel Airport"
													},
													"arrival": {
														"airportCode": {
															"value": "MUC"
														},
														"date": "2016-05-29T21:00:00.000+0000",
														"time": "14:55",
														"airportName": "Munich International"
													},
													"marketingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1816"
														}
													},
													"operatingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1816"
														}
													},
													"equipment": {
														"aircraftCode": {
															"value": "321"
														},
														"name": "321 - AIRBUS INDUSTRIE A321 JET"
													},
													"flightDetail": {
														"flightDuration": {
															"value": "PT1H10M"
														}
													},
													"segmentKey": "SEG51"
												}
											},
											{
												"cabin": {
													"cabinDesignator": {
														"value": "M"
													}
												},
												"ref": {
													"departure": {
														"airportCode": {
															"value": "MUC"
														},
														"date": "2016-05-29T21:00:00.000+0000",
														"time": "18:55",
														"airportName": "Munich International"
													},
													"arrival": {
														"airportCode": {
															"value": "BCN"
														},
														"date": "2016-05-29T21:00:00.000+0000",
														"time": "20:55",
														"airportName": "Barcelona Airport"
													},
													"marketingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1816"
														}
													},
													"operatingCarrier": {
														"airlineID": {
															"value": "C9"
														},
														"name": "Kronos Air",
														"flightNumber": {
															"value": "1816"
														}
													},
													"equipment": {
														"aircraftCode": {
															"value": "321"
														},
														"name": "321 - AIRBUS INDUSTRIE A321 JET"
													},
													"flightDetail": {
														"flightDuration": {
															"value": "PT2H0M"
														}
													},
													"segmentKey": "SEG52"
												}
											}
										],
										"originDestinationReferences": [
											{
												"departureCode": {
													"value": "TXL"
												},
												"arrivalCode": {
													"value": "BCN"
												},
												"originDestinationKey": "OD2",
												"flightReferences": {
													"value": [
														{
															"journey": {
																"time": "PT8H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "01:20",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "02:30",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1124"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1124"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG27"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "07:30",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "09:30",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1124"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1124"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG28"
																	}
																]
															},
															"flightKey": "FL14"
														},
														{
															"journey": {
																"time": "PT8H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "03:40",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "04:50",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1126"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1126"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG29"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "09:50",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "11:50",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1126"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1126"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG30"
																	}
																]
															},
															"flightKey": "FL15"
														},
														{
															"journey": {
																"time": "PT8H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "06:45",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "07:55",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1128"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1128"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG31"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "12:55",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "14:55",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1128"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1128"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG32"
																	}
																]
															},
															"flightKey": "FL16"
														},
														{
															"journey": {
																"time": "PT8H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "04:50",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "06:00",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1130"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1130"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG33"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "11:00",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "13:00",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1130"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1130"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG34"
																	}
																]
															},
															"flightKey": "FL17"
														},
														{
															"journey": {
																"time": "PT8H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "09:55",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "11:05",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1132"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1132"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG35"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "16:05",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "18:05",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1132"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1132"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG36"
																	}
																]
															},
															"flightKey": "FL18"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "09:55",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "11:05",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1134"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1134"
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
																		"segmentKey": "SEG37"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "14:05",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "16:05",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1134"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1134"
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
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG38"
																	}
																]
															},
															"flightKey": "FL19"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "13:20",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "14:30",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1136"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1136"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG39"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "17:30",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "19:30",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1136"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1136"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG40"
																	}
																]
															},
															"flightKey": "FL20"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "16:50",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "18:00",
																			"airportName": "Frankfurt International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1138"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1138"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG41"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "FRA"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "21:00",
																			"airportName": "Frankfurt International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "23:00",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1138"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1138"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG42"
																	}
																]
															},
															"flightKey": "FL21"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "02:25",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "03:35",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1808"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1808"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "E95"
																			},
																			"name": "E95 - EMBRAER 195 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG43"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "06:35",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "08:35",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1808"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1808"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "E95"
																			},
																			"name": "E95 - EMBRAER 195 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG44"
																	}
																]
															},
															"flightKey": "FL22"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "04:55",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "06:05",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1810"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1810"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG45"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "09:05",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "11:05",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1810"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1810"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG46"
																	}
																]
															},
															"flightKey": "FL23"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "08:30",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "09:40",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1812"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1812"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG47"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "12:40",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "14:40",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1812"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1812"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG48"
																	}
																]
															},
															"flightKey": "FL24"
														},
														{
															"journey": {
																"time": "PT6H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "11:30",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "12:40",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1814"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1814"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG49"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "15:40",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "17:40",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1814"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1814"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG50"
																	}
																]
															},
															"flightKey": "FL25"
														},
														{
															"journey": {
																"time": "PT7H10M"
															},
															"segmentReferences": {
																"value": [
																	{
																		"departure": {
																			"airportCode": {
																				"value": "TXL"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "13:45",
																			"airportName": "Berlin Tegel Airport"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "14:55",
																			"airportName": "Munich International"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1816"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1816"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT1H10M"
																			}
																		},
																		"segmentKey": "SEG51"
																	},
																	{
																		"departure": {
																			"airportCode": {
																				"value": "MUC"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "18:55",
																			"airportName": "Munich International"
																		},
																		"arrival": {
																			"airportCode": {
																				"value": "BCN"
																			},
																			"date": "2016-05-29T21:00:00.000+0000",
																			"time": "20:55",
																			"airportName": "Barcelona Airport"
																		},
																		"marketingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1816"
																			}
																		},
																		"operatingCarrier": {
																			"airlineID": {
																				"value": "C9"
																			},
																			"name": "Kronos Air",
																			"flightNumber": {
																				"value": "1816"
																			}
																		},
																		"equipment": {
																			"aircraftCode": {
																				"value": "321"
																			},
																			"name": "321 - AIRBUS INDUSTRIE A321 JET"
																		},
																		"flightDetail": {
																			"flightDuration": {
																				"value": "PT2H0M"
																			}
																		},
																		"segmentKey": "SEG52"
																	}
																]
															},
															"flightKey": "FL26"
														}
													]
												}
											}
										],
										"flightReferences": {
											"value": [
												{
													"journey": {
														"time": "PT7H10M"
													},
													"segmentReferences": {
														"value": [
															{
																"departure": {
																	"airportCode": {
																		"value": "TXL"
																	},
																	"date": "2016-05-29T21:00:00.000+0000",
																	"time": "13:45",
																	"airportName": "Berlin Tegel Airport"
																},
																"arrival": {
																	"airportCode": {
																		"value": "MUC"
																	},
																	"date": "2016-05-29T21:00:00.000+0000",
																	"time": "14:55",
																	"airportName": "Munich International"
																},
																"marketingCarrier": {
																	"airlineID": {
																		"value": "C9"
																	},
																	"name": "Kronos Air",
																	"flightNumber": {
																		"value": "1816"
																	}
																},
																"operatingCarrier": {
																	"airlineID": {
																		"value": "C9"
																	},
																	"name": "Kronos Air",
																	"flightNumber": {
																		"value": "1816"
																	}
																},
																"equipment": {
																	"aircraftCode": {
																		"value": "321"
																	},
																	"name": "321 - AIRBUS INDUSTRIE A321 JET"
																},
																"flightDetail": {
																	"flightDuration": {
																		"value": "PT1H10M"
																	}
																},
																"segmentKey": "SEG51"
															},
															{
																"departure": {
																	"airportCode": {
																		"value": "MUC"
																	},
																	"date": "2016-05-29T21:00:00.000+0000",
																	"time": "18:55",
																	"airportName": "Munich International"
																},
																"arrival": {
																	"airportCode": {
																		"value": "BCN"
																	},
																	"date": "2016-05-29T21:00:00.000+0000",
																	"time": "20:55",
																	"airportName": "Barcelona Airport"
																},
																"marketingCarrier": {
																	"airlineID": {
																		"value": "C9"
																	},
																	"name": "Kronos Air",
																	"flightNumber": {
																		"value": "1816"
																	}
																},
																"operatingCarrier": {
																	"airlineID": {
																		"value": "C9"
																	},
																	"name": "Kronos Air",
																	"flightNumber": {
																		"value": "1816"
																	}
																},
																"equipment": {
																	"aircraftCode": {
																		"value": "321"
																	},
																	"name": "321 - AIRBUS INDUSTRIE A321 JET"
																},
																"flightDetail": {
																	"flightDuration": {
																		"value": "PT2H0M"
																	}
																},
																"segmentKey": "SEG52"
															}
														]
													},
													"flightKey": "FL26"
												}
											]
										}
									},
									"priceClass": {
										"priceClassReference": {
											"name": "M-EFR",
											"code": "M",
											"fareBasisCode": {
												"code": "EFR"
											},
											"objectKey": "PC3"
										}
									},
									"includedService": {
										"serviceReferences": [
											{
												"serviceID": {
													"value": "1010",
													"owner": "C9"
												},
												"name": {
													"value": "Vegetarian Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Vegetarian meal flavoured with spices from Indian sub-continent"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/VegMeal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "VegMeal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/VegMeal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV5"
											},
											{
												"serviceID": {
													"value": "1011",
													"owner": "C9"
												},
												"name": {
													"value": "Standard Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Vegetarian Oriental Meal"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/Standard Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "Standard Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/Standard Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV6"
											},
											{
												"serviceID": {
													"value": "1012",
													"owner": "C9"
												},
												"name": {
													"value": "Standard Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "This is a non-strict vegetarian meal"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/StandardNonVeg.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "StandardNonVeg.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/StandardNonVeg.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV7"
											},
											{
												"serviceID": {
													"value": "1013",
													"owner": "C9"
												},
												"name": {
													"value": "Low-Carb meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "For passengers with special dietary requirements as Low Carb"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/LowCarb Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "LowCarb Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/LowCarb Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV8"
											},
											{
												"serviceID": {
													"value": "1014",
													"owner": "C9"
												},
												"name": {
													"value": "Diabetic Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Sugar is not used in the preparation of this meal."
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/Diabetic Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "Diabetic Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/Diabetic Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV9"
											},
											{
												"serviceID": {
													"value": "1016",
													"owner": "C9"
												},
												"name": {
													"value": "Lactose-free meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "This meal is for customers who are lactose-intolerant."
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/LactoseFree Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "LactoseFree Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/LactoseFree Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV10"
											},
											{
												"serviceID": {
													"value": "1018",
													"owner": "C9"
												},
												"name": {
													"value": "Muslim Meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "*Halal* meal prepared according to Islamic principles."
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/Muslim Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "Muslim Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/Muslim Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV11"
											},
											{
												"serviceID": {
													"value": "1020",
													"owner": "C9"
												},
												"name": {
													"value": "Kosher meal"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Prepared by kosher caterers under rabbinical supervision"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/Kosher Meal.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "Kosher Meal.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/Kosher Meal.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV12"
											},
											{
												"serviceID": {
													"value": "1022",
													"owner": "C9"
												},
												"name": {
													"value": "Snack"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Enjoy a wide selection of complimentary snacks and beverages."
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/snacks.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "snacks.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/snacks.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 1000,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV13"
											}
										]
									},
									"associatedService": {
										"serviceReferences": [
											{
												"serviceID": {
													"value": "1002",
													"owner": "C9"
												},
												"name": {
													"value": "Inflight Wi-Fi"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Stay connected using any Wi-Fi enabled device"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/wifi.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "wifi.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/wifi.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1200,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV1"
											},
											{
												"serviceID": {
													"value": "1004",
													"owner": "C9"
												},
												"name": {
													"value": "Lounge pass"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Escape the crowds and find a quiet space to work or relax"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/lounge.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "lounge.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/lounge.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV2"
											},
											{
												"serviceID": {
													"value": "1008",
													"owner": "C9"
												},
												"name": {
													"value": "Advanced seat selection"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "A convenient option that lets you reserve your preferred seat"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/AdvanceSeat.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "AdvanceSeat.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/AdvanceSeat.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 1200,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV3"
											},
											{
												"serviceID": {
													"value": "1028",
													"owner": "C9"
												},
												"name": {
													"value": "1st Bag"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "First bag free"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "bag1.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 700,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "08:05",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:15",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1137"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1137"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG13"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV17"
											},
											{
												"serviceID": {
													"value": "1032",
													"owner": "C9"
												},
												"name": {
													"value": "2nd Bag"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Don't get caught out at the airport"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/bag2.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "bag2.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/bag2.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 3500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV14"
											},
											{
												"serviceID": {
													"value": "1051",
													"owner": "C9"
												},
												"name": {
													"value": "3rd Bag"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Don't get caught out at the airport"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/bag3.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "bag3.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/bag3.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 11500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 11500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV15"
											},
											{
												"serviceID": {
													"value": "1062",
													"owner": "C9"
												},
												"name": {
													"value": "1st bag"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Don't get caught out at the airport"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "bag1.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 3500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 3500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV16"
											},
											{
												"serviceID": {
													"value": "1009",
													"owner": "C9"
												},
												"name": {
													"value": "Premium Seating"
												},
												"encoding": {},
												"feeMethod": {
													"value": "OC"
												},
												"descriptions": {
													"description": [
														{
															"text": {
																"value": "Take advantage of Premium cabin to rest,read or work in freedom"
															},
															"link": "http://kronos.jrtechnologies.com/ServiceImage/PremiumSeat.jpg",
															"media": [
																{
																	"objectID": {
																		"value": "PremiumSeat.jpg"
																	}
																},
																{
																	"mediaLink": {
																		"value": "http://kronos.jrtechnologies.com/ServiceImage/PremiumSeat.jpg"
																	}
																}
															]
														}
													]
												},
												"settlement": {
													"method": {
														"code": "AD",
														"definition": "Internal Airline Document"
													}
												},
												"price": [
													{
														"total": {
															"value": 5500,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH1",
																"ptc": {
																	"value": "ADT",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH2",
																"ptc": {
																	"value": "CHD",
																	"quantity": 2
																}
															}
														]
													},
													{
														"total": {
															"value": 0,
															"taxable": true
														},
														"passengerReferences": [
															{
																"objectKey": "SH3",
																"ptc": {
																	"value": "INF",
																	"quantity": 2
																}
															}
														]
													}
												],
												"associations": [
													{
														"traveler": {
															"travelerReferences": [
																{
																	"objectKey": "SH1",
																	"ptc": {
																		"value": "ADT",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH2",
																	"ptc": {
																		"value": "CHD",
																		"quantity": 2
																	}
																},
																{
																	"objectKey": "SH3",
																	"ptc": {
																		"value": "INF",
																		"quantity": 2
																	}
																}
															]
														},
														"flight": {
															"originDestinationReferencesOrSegmentReferences": [
																{
																	"value": [
																		{
																			"departure": {
																				"airportCode": {
																					"value": "BCN"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "10:30",
																				"airportName": "Barcelona Airport"
																			},
																			"arrival": {
																				"airportCode": {
																					"value": "FRA"
																				},
																				"date": "2016-05-19T21:00:00.000+0000",
																				"time": "12:40",
																				"airportName": "Frankfurt International"
																			},
																			"marketingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"operatingCarrier": {
																				"airlineID": {
																					"value": "C9"
																				},
																				"name": "Kronos Air",
																				"flightNumber": {
																					"value": "1125"
																				}
																			},
																			"equipment": {
																				"aircraftCode": {
																					"value": "321"
																				},
																				"name": "321 - AIRBUS INDUSTRIE A321 JET"
																			},
																			"flightDetail": {
																				"flightDuration": {
																					"value": "PT2H10M"
																				}
																			},
																			"segmentKey": "SEG1"
																		}
																	]
																}
															]
														}
													}
												],
												"objectKey": "SV4"
											}
										]
									}
								}
							]
						}
					}
				]
			}
		]
	},
	"dataLists": {
		"anonymousTravelerList": [
			{
				"objectKey": "SH1",
				"ptc": {
					"value": "ADT",
					"quantity": 2
				}
			},
			{
				"objectKey": "SH2",
				"ptc": {
					"value": "CHD",
					"quantity": 2
				}
			},
			{
				"objectKey": "SH3",
				"ptc": {
					"value": "INF",
					"quantity": 2
				}
			}
		],
		"flightSegmentList": [
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "10:30",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "12:40",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1125"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1125"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H10M"
					}
				},
				"segmentKey": "SEG1"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "16:40",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "17:50",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1125"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1125"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG2"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "12:45",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "14:55",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1127"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1127"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H10M"
					}
				},
				"segmentKey": "SEG3"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "18:55",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "20:05",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1127"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1127"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG4"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "16:00",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "18:10",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1129"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1129"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H10M"
					}
				},
				"segmentKey": "SEG5"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "22:10",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "23:20",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1129"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1129"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG6"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "14:00",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "16:10",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1131"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1131"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H10M"
					}
				},
				"segmentKey": "SEG7"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "20:10",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "21:20",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1131"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1131"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG8"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "18:50",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "21:00",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1133"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1133"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H10M"
					}
				},
				"segmentKey": "SEG9"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-20T21:00:00.000+0000",
					"time": "01:00",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-20T21:00:00.000+0000",
					"time": "02:10",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1133"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1133"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG10"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "16:55",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "19:05",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1135"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1135"
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
						"value": "PT2H10M"
					}
				},
				"segmentKey": "SEG11"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "23:05",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-20T21:00:00.000+0000",
					"time": "00:15",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1135"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1135"
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
				"segmentKey": "SEG12"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "08:05",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "10:15",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1137"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1137"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H10M"
					}
				},
				"segmentKey": "SEG13"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "14:15",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "15:25",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1137"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1137"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG14"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "06:55",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "09:05",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1139"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1139"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H10M"
					}
				},
				"segmentKey": "SEG15"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "13:05",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "14:15",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1139"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1139"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG16"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "09:10",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "11:15",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1809"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1809"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "E95"
					},
					"name": "E95 - EMBRAER 195 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H5M"
					}
				},
				"segmentKey": "SEG17"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "14:15",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "15:25",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1809"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1809"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "E95"
					},
					"name": "E95 - EMBRAER 195 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG18"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "12:00",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "14:00",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1811"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1811"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG19"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "17:00",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "18:10",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1811"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1811"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG20"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "15:35",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "17:35",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1813"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1813"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG21"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "20:35",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "21:45",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1813"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1813"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG22"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "18:45",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "20:45",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1815"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1815"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG23"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "23:45",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-20T21:00:00.000+0000",
					"time": "00:55",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1815"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1815"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG24"
			},
			{
				"departure": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "07:50",
					"airportName": "Barcelona Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "09:50",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1817"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1817"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG25"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "12:50",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-19T21:00:00.000+0000",
					"time": "14:00",
					"airportName": "Berlin Tegel Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1817"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1817"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG26"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "01:20",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "02:30",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1124"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1124"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG27"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "07:30",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "09:30",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1124"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1124"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG28"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "03:40",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "04:50",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1126"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1126"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG29"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "09:50",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "11:50",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1126"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1126"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG30"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "06:45",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "07:55",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1128"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1128"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG31"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "12:55",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "14:55",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1128"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1128"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG32"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "04:50",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "06:00",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1130"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1130"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG33"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "11:00",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "13:00",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1130"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1130"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG34"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "09:55",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "11:05",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1132"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1132"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG35"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "16:05",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "18:05",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1132"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1132"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG36"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "09:55",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "11:05",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1134"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1134"
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
				"segmentKey": "SEG37"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "14:05",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "16:05",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1134"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1134"
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
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG38"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "13:20",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "14:30",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1136"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1136"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG39"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "17:30",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "19:30",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1136"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1136"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG40"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "16:50",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "18:00",
					"airportName": "Frankfurt International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1138"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1138"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG41"
			},
			{
				"departure": {
					"airportCode": {
						"value": "FRA"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "21:00",
					"airportName": "Frankfurt International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "23:00",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1138"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1138"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG42"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "02:25",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "03:35",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1808"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1808"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "E95"
					},
					"name": "E95 - EMBRAER 195 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG43"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "06:35",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "08:35",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1808"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1808"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "E95"
					},
					"name": "E95 - EMBRAER 195 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG44"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "04:55",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "06:05",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1810"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1810"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG45"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "09:05",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "11:05",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1810"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1810"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG46"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "08:30",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "09:40",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1812"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1812"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG47"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "12:40",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "14:40",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1812"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1812"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG48"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "11:30",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "12:40",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1814"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1814"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG49"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "15:40",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "17:40",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1814"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1814"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG50"
			},
			{
				"departure": {
					"airportCode": {
						"value": "TXL"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "13:45",
					"airportName": "Berlin Tegel Airport"
				},
				"arrival": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "14:55",
					"airportName": "Munich International"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1816"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1816"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT1H10M"
					}
				},
				"segmentKey": "SEG51"
			},
			{
				"departure": {
					"airportCode": {
						"value": "MUC"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "18:55",
					"airportName": "Munich International"
				},
				"arrival": {
					"airportCode": {
						"value": "BCN"
					},
					"date": "2016-05-29T21:00:00.000+0000",
					"time": "20:55",
					"airportName": "Barcelona Airport"
				},
				"marketingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1816"
					}
				},
				"operatingCarrier": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air",
					"flightNumber": {
						"value": "1816"
					}
				},
				"equipment": {
					"aircraftCode": {
						"value": "321"
					},
					"name": "321 - AIRBUS INDUSTRIE A321 JET"
				},
				"flightDetail": {
					"flightDuration": {
						"value": "PT2H0M"
					}
				},
				"segmentKey": "SEG52"
			}
		],
		"flightList": [
			{
				"journey": {
					"time": "PT7H20M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "10:30",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "12:40",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1125"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1125"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H10M"
								}
							},
							"segmentKey": "SEG1"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "16:40",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "17:50",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1125"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1125"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG2"
						}
					]
				},
				"flightKey": "FL1"
			},
			{
				"journey": {
					"time": "PT7H20M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "12:45",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "14:55",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1127"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1127"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H10M"
								}
							},
							"segmentKey": "SEG3"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "18:55",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "20:05",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1127"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1127"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG4"
						}
					]
				},
				"flightKey": "FL2"
			},
			{
				"journey": {
					"time": "PT7H20M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "16:00",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "18:10",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1129"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1129"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H10M"
								}
							},
							"segmentKey": "SEG5"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "22:10",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "23:20",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1129"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1129"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG6"
						}
					]
				},
				"flightKey": "FL3"
			},
			{
				"journey": {
					"time": "PT7H20M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "14:00",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "16:10",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1131"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1131"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H10M"
								}
							},
							"segmentKey": "SEG7"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "20:10",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "21:20",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1131"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1131"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG8"
						}
					]
				},
				"flightKey": "FL4"
			},
			{
				"journey": {
					"time": "PT7H20M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "18:50",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "21:00",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1133"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1133"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H10M"
								}
							},
							"segmentKey": "SEG9"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-20T21:00:00.000+0000",
								"time": "01:00",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-20T21:00:00.000+0000",
								"time": "02:10",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1133"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1133"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG10"
						}
					]
				},
				"flightKey": "FL5"
			},
			{
				"journey": {
					"time": "PT7H20M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "16:55",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "19:05",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1135"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1135"
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
									"value": "PT2H10M"
								}
							},
							"segmentKey": "SEG11"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "23:05",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-20T21:00:00.000+0000",
								"time": "00:15",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1135"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1135"
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
							"segmentKey": "SEG12"
						}
					]
				},
				"flightKey": "FL6"
			},
			{
				"journey": {
					"time": "PT7H20M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "08:05",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "10:15",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1137"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1137"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H10M"
								}
							},
							"segmentKey": "SEG13"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "14:15",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "15:25",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1137"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1137"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG14"
						}
					]
				},
				"flightKey": "FL7"
			},
			{
				"journey": {
					"time": "PT7H20M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "06:55",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "09:05",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1139"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1139"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H10M"
								}
							},
							"segmentKey": "SEG15"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "13:05",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "14:15",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1139"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1139"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG16"
						}
					]
				},
				"flightKey": "FL8"
			},
			{
				"journey": {
					"time": "PT6H15M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "09:10",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "11:15",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1809"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1809"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "E95"
								},
								"name": "E95 - EMBRAER 195 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H5M"
								}
							},
							"segmentKey": "SEG17"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "14:15",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "15:25",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1809"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1809"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "E95"
								},
								"name": "E95 - EMBRAER 195 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG18"
						}
					]
				},
				"flightKey": "FL9"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "12:00",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "14:00",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1811"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1811"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG19"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "17:00",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "18:10",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1811"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1811"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG20"
						}
					]
				},
				"flightKey": "FL10"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "15:35",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "17:35",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1813"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1813"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG21"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "20:35",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "21:45",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1813"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1813"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG22"
						}
					]
				},
				"flightKey": "FL11"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "18:45",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "20:45",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1815"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1815"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG23"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "23:45",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-20T21:00:00.000+0000",
								"time": "00:55",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1815"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1815"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG24"
						}
					]
				},
				"flightKey": "FL12"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "07:50",
								"airportName": "Barcelona Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "09:50",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1817"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1817"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG25"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "12:50",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-19T21:00:00.000+0000",
								"time": "14:00",
								"airportName": "Berlin Tegel Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1817"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1817"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG26"
						}
					]
				},
				"flightKey": "FL13"
			},
			{
				"journey": {
					"time": "PT8H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "01:20",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "02:30",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1124"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1124"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG27"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "07:30",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "09:30",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1124"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1124"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG28"
						}
					]
				},
				"flightKey": "FL14"
			},
			{
				"journey": {
					"time": "PT8H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "03:40",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "04:50",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1126"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1126"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG29"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "09:50",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "11:50",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1126"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1126"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG30"
						}
					]
				},
				"flightKey": "FL15"
			},
			{
				"journey": {
					"time": "PT8H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "06:45",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "07:55",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1128"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1128"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG31"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "12:55",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "14:55",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1128"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1128"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG32"
						}
					]
				},
				"flightKey": "FL16"
			},
			{
				"journey": {
					"time": "PT8H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "04:50",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "06:00",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1130"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1130"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG33"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "11:00",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "13:00",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1130"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1130"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG34"
						}
					]
				},
				"flightKey": "FL17"
			},
			{
				"journey": {
					"time": "PT8H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "09:55",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "11:05",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1132"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1132"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG35"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "16:05",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "18:05",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1132"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1132"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG36"
						}
					]
				},
				"flightKey": "FL18"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "09:55",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "11:05",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1134"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1134"
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
							"segmentKey": "SEG37"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "14:05",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "16:05",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1134"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1134"
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
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG38"
						}
					]
				},
				"flightKey": "FL19"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "13:20",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "14:30",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1136"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1136"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG39"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "17:30",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "19:30",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1136"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1136"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG40"
						}
					]
				},
				"flightKey": "FL20"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "16:50",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "18:00",
								"airportName": "Frankfurt International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1138"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1138"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG41"
						},
						{
							"departure": {
								"airportCode": {
									"value": "FRA"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "21:00",
								"airportName": "Frankfurt International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "23:00",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1138"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1138"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG42"
						}
					]
				},
				"flightKey": "FL21"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "02:25",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "03:35",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1808"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1808"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "E95"
								},
								"name": "E95 - EMBRAER 195 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG43"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "06:35",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "08:35",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1808"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1808"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "E95"
								},
								"name": "E95 - EMBRAER 195 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG44"
						}
					]
				},
				"flightKey": "FL22"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "04:55",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "06:05",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1810"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1810"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG45"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "09:05",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "11:05",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1810"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1810"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG46"
						}
					]
				},
				"flightKey": "FL23"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "08:30",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "09:40",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1812"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1812"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG47"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "12:40",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "14:40",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1812"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1812"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG48"
						}
					]
				},
				"flightKey": "FL24"
			},
			{
				"journey": {
					"time": "PT6H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "11:30",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "12:40",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1814"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1814"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG49"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "15:40",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "17:40",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1814"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1814"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG50"
						}
					]
				},
				"flightKey": "FL25"
			},
			{
				"journey": {
					"time": "PT7H10M"
				},
				"segmentReferences": {
					"value": [
						{
							"departure": {
								"airportCode": {
									"value": "TXL"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "13:45",
								"airportName": "Berlin Tegel Airport"
							},
							"arrival": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "14:55",
								"airportName": "Munich International"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1816"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1816"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT1H10M"
								}
							},
							"segmentKey": "SEG51"
						},
						{
							"departure": {
								"airportCode": {
									"value": "MUC"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "18:55",
								"airportName": "Munich International"
							},
							"arrival": {
								"airportCode": {
									"value": "BCN"
								},
								"date": "2016-05-29T21:00:00.000+0000",
								"time": "20:55",
								"airportName": "Barcelona Airport"
							},
							"marketingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1816"
								}
							},
							"operatingCarrier": {
								"airlineID": {
									"value": "C9"
								},
								"name": "Kronos Air",
								"flightNumber": {
									"value": "1816"
								}
							},
							"equipment": {
								"aircraftCode": {
									"value": "321"
								},
								"name": "321 - AIRBUS INDUSTRIE A321 JET"
							},
							"flightDetail": {
								"flightDuration": {
									"value": "PT2H0M"
								}
							},
							"segmentKey": "SEG52"
						}
					]
				},
				"flightKey": "FL26"
			}
		],
		"originDestinationList": [
			{
				"departureCode": {
					"value": "BCN"
				},
				"arrivalCode": {
					"value": "TXL"
				},
				"originDestinationKey": "OD1",
				"flightReferences": {
					"value": [
						{
							"journey": {
								"time": "PT7H20M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "10:30",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "12:40",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1125"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1125"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H10M"
											}
										},
										"segmentKey": "SEG1"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "16:40",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "17:50",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1125"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1125"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG2"
									}
								]
							},
							"flightKey": "FL1"
						},
						{
							"journey": {
								"time": "PT7H20M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "12:45",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "14:55",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1127"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1127"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H10M"
											}
										},
										"segmentKey": "SEG3"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "18:55",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "20:05",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1127"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1127"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG4"
									}
								]
							},
							"flightKey": "FL2"
						},
						{
							"journey": {
								"time": "PT7H20M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "16:00",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "18:10",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1129"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1129"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H10M"
											}
										},
										"segmentKey": "SEG5"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "22:10",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "23:20",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1129"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1129"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG6"
									}
								]
							},
							"flightKey": "FL3"
						},
						{
							"journey": {
								"time": "PT7H20M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "14:00",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "16:10",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1131"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1131"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H10M"
											}
										},
										"segmentKey": "SEG7"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "20:10",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "21:20",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1131"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1131"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG8"
									}
								]
							},
							"flightKey": "FL4"
						},
						{
							"journey": {
								"time": "PT7H20M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "18:50",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "21:00",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1133"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1133"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H10M"
											}
										},
										"segmentKey": "SEG9"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-20T21:00:00.000+0000",
											"time": "01:00",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-20T21:00:00.000+0000",
											"time": "02:10",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1133"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1133"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG10"
									}
								]
							},
							"flightKey": "FL5"
						},
						{
							"journey": {
								"time": "PT7H20M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "16:55",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "19:05",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1135"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1135"
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
												"value": "PT2H10M"
											}
										},
										"segmentKey": "SEG11"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "23:05",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-20T21:00:00.000+0000",
											"time": "00:15",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1135"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1135"
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
										"segmentKey": "SEG12"
									}
								]
							},
							"flightKey": "FL6"
						},
						{
							"journey": {
								"time": "PT7H20M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "08:05",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "10:15",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1137"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1137"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H10M"
											}
										},
										"segmentKey": "SEG13"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "14:15",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "15:25",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1137"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1137"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG14"
									}
								]
							},
							"flightKey": "FL7"
						},
						{
							"journey": {
								"time": "PT7H20M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "06:55",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "09:05",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1139"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1139"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H10M"
											}
										},
										"segmentKey": "SEG15"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "13:05",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "14:15",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1139"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1139"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG16"
									}
								]
							},
							"flightKey": "FL8"
						},
						{
							"journey": {
								"time": "PT6H15M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "09:10",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "11:15",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1809"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1809"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "E95"
											},
											"name": "E95 - EMBRAER 195 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H5M"
											}
										},
										"segmentKey": "SEG17"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "14:15",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "15:25",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1809"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1809"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "E95"
											},
											"name": "E95 - EMBRAER 195 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG18"
									}
								]
							},
							"flightKey": "FL9"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "12:00",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "14:00",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1811"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1811"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG19"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "17:00",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "18:10",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1811"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1811"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG20"
									}
								]
							},
							"flightKey": "FL10"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "15:35",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "17:35",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1813"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1813"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG21"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "20:35",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "21:45",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1813"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1813"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG22"
									}
								]
							},
							"flightKey": "FL11"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "18:45",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "20:45",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1815"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1815"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG23"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "23:45",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-20T21:00:00.000+0000",
											"time": "00:55",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1815"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1815"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG24"
									}
								]
							},
							"flightKey": "FL12"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "07:50",
											"airportName": "Barcelona Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "09:50",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1817"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1817"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG25"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "12:50",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-19T21:00:00.000+0000",
											"time": "14:00",
											"airportName": "Berlin Tegel Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1817"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1817"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG26"
									}
								]
							},
							"flightKey": "FL13"
						}
					]
				}
			},
			{
				"departureCode": {
					"value": "TXL"
				},
				"arrivalCode": {
					"value": "BCN"
				},
				"originDestinationKey": "OD2",
				"flightReferences": {
					"value": [
						{
							"journey": {
								"time": "PT8H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "01:20",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "02:30",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1124"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1124"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG27"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "07:30",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "09:30",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1124"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1124"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG28"
									}
								]
							},
							"flightKey": "FL14"
						},
						{
							"journey": {
								"time": "PT8H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "03:40",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "04:50",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1126"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1126"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG29"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "09:50",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "11:50",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1126"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1126"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG30"
									}
								]
							},
							"flightKey": "FL15"
						},
						{
							"journey": {
								"time": "PT8H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "06:45",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "07:55",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1128"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1128"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG31"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "12:55",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "14:55",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1128"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1128"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG32"
									}
								]
							},
							"flightKey": "FL16"
						},
						{
							"journey": {
								"time": "PT8H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "04:50",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "06:00",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1130"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1130"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG33"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "11:00",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "13:00",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1130"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1130"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG34"
									}
								]
							},
							"flightKey": "FL17"
						},
						{
							"journey": {
								"time": "PT8H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "09:55",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "11:05",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1132"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1132"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG35"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "16:05",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "18:05",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1132"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1132"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG36"
									}
								]
							},
							"flightKey": "FL18"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "09:55",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "11:05",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1134"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1134"
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
										"segmentKey": "SEG37"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "14:05",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "16:05",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1134"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1134"
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
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG38"
									}
								]
							},
							"flightKey": "FL19"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "13:20",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "14:30",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1136"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1136"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG39"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "17:30",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "19:30",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1136"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1136"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG40"
									}
								]
							},
							"flightKey": "FL20"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "16:50",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "18:00",
											"airportName": "Frankfurt International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1138"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1138"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG41"
									},
									{
										"departure": {
											"airportCode": {
												"value": "FRA"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "21:00",
											"airportName": "Frankfurt International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "23:00",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1138"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1138"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG42"
									}
								]
							},
							"flightKey": "FL21"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "02:25",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "03:35",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1808"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1808"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "E95"
											},
											"name": "E95 - EMBRAER 195 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG43"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "06:35",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "08:35",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1808"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1808"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "E95"
											},
											"name": "E95 - EMBRAER 195 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG44"
									}
								]
							},
							"flightKey": "FL22"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "04:55",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "06:05",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1810"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1810"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG45"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "09:05",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "11:05",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1810"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1810"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG46"
									}
								]
							},
							"flightKey": "FL23"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "08:30",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "09:40",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1812"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1812"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG47"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "12:40",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "14:40",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1812"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1812"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG48"
									}
								]
							},
							"flightKey": "FL24"
						},
						{
							"journey": {
								"time": "PT6H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "11:30",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "12:40",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1814"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1814"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG49"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "15:40",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "17:40",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1814"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1814"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG50"
									}
								]
							},
							"flightKey": "FL25"
						},
						{
							"journey": {
								"time": "PT7H10M"
							},
							"segmentReferences": {
								"value": [
									{
										"departure": {
											"airportCode": {
												"value": "TXL"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "13:45",
											"airportName": "Berlin Tegel Airport"
										},
										"arrival": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "14:55",
											"airportName": "Munich International"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1816"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1816"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT1H10M"
											}
										},
										"segmentKey": "SEG51"
									},
									{
										"departure": {
											"airportCode": {
												"value": "MUC"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "18:55",
											"airportName": "Munich International"
										},
										"arrival": {
											"airportCode": {
												"value": "BCN"
											},
											"date": "2016-05-29T21:00:00.000+0000",
											"time": "20:55",
											"airportName": "Barcelona Airport"
										},
										"marketingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1816"
											}
										},
										"operatingCarrier": {
											"airlineID": {
												"value": "C9"
											},
											"name": "Kronos Air",
											"flightNumber": {
												"value": "1816"
											}
										},
										"equipment": {
											"aircraftCode": {
												"value": "321"
											},
											"name": "321 - AIRBUS INDUSTRIE A321 JET"
										},
										"flightDetail": {
											"flightDuration": {
												"value": "PT2H0M"
											}
										},
										"segmentKey": "SEG52"
									}
								]
							},
							"flightKey": "FL26"
						}
					]
				}
			}
		],
		"priceClassList": [
			{
				"name": "M-ESR",
				"code": "M",
				"fareBasisCode": {
					"code": "ESR"
				},
				"objectKey": "PC1"
			},
			{
				"name": "M-ERR",
				"code": "M",
				"fareBasisCode": {
					"code": "ERR"
				},
				"objectKey": "PC2"
			},
			{
				"name": "M-EFR",
				"code": "M",
				"fareBasisCode": {
					"code": "EFR"
				},
				"objectKey": "PC3"
			}
		],
		"serviceList": [
			{
				"serviceID": {
					"value": "1002",
					"owner": "C9"
				},
				"name": {
					"value": "Inflight Wi-Fi"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Stay connected using any Wi-Fi enabled device"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/wifi.jpg",
							"media": [
								{
									"objectID": {
										"value": "wifi.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/wifi.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1200,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV1"
			},
			{
				"serviceID": {
					"value": "1004",
					"owner": "C9"
				},
				"name": {
					"value": "Lounge pass"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Escape the crowds and find a quiet space to work or relax"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/lounge.jpg",
							"media": [
								{
									"objectID": {
										"value": "lounge.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/lounge.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV2"
			},
			{
				"serviceID": {
					"value": "1008",
					"owner": "C9"
				},
				"name": {
					"value": "Advanced seat selection"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "A convenient option that lets you reserve your preferred seat"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/AdvanceSeat.jpg",
							"media": [
								{
									"objectID": {
										"value": "AdvanceSeat.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/AdvanceSeat.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1200,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV3"
			},
			{
				"serviceID": {
					"value": "1009",
					"owner": "C9"
				},
				"name": {
					"value": "Premium Seating"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Take advantage of Premium cabin to rest,read or work in freedom"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/PremiumSeat.jpg",
							"media": [
								{
									"objectID": {
										"value": "PremiumSeat.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/PremiumSeat.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 5500,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV4"
			},
			{
				"serviceID": {
					"value": "1010",
					"owner": "C9"
				},
				"name": {
					"value": "Vegetarian Meal"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Vegetarian meal flavoured with spices from Indian sub-continent"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/VegMeal.jpg",
							"media": [
								{
									"objectID": {
										"value": "VegMeal.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/VegMeal.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV5"
			},
			{
				"serviceID": {
					"value": "1011",
					"owner": "C9"
				},
				"name": {
					"value": "Standard Meal"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Vegetarian Oriental Meal"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/Standard Meal.jpg",
							"media": [
								{
									"objectID": {
										"value": "Standard Meal.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/Standard Meal.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV6"
			},
			{
				"serviceID": {
					"value": "1012",
					"owner": "C9"
				},
				"name": {
					"value": "Standard Meal"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "This is a non-strict vegetarian meal"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/StandardNonVeg.jpg",
							"media": [
								{
									"objectID": {
										"value": "StandardNonVeg.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/StandardNonVeg.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV7"
			},
			{
				"serviceID": {
					"value": "1013",
					"owner": "C9"
				},
				"name": {
					"value": "Low-Carb meal"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "For passengers with special dietary requirements as Low Carb"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/LowCarb Meal.jpg",
							"media": [
								{
									"objectID": {
										"value": "LowCarb Meal.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/LowCarb Meal.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV8"
			},
			{
				"serviceID": {
					"value": "1014",
					"owner": "C9"
				},
				"name": {
					"value": "Diabetic Meal"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Sugar is not used in the preparation of this meal."
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/Diabetic Meal.jpg",
							"media": [
								{
									"objectID": {
										"value": "Diabetic Meal.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/Diabetic Meal.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV9"
			},
			{
				"serviceID": {
					"value": "1016",
					"owner": "C9"
				},
				"name": {
					"value": "Lactose-free meal"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "This meal is for customers who are lactose-intolerant."
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/LactoseFree Meal.jpg",
							"media": [
								{
									"objectID": {
										"value": "LactoseFree Meal.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/LactoseFree Meal.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV10"
			},
			{
				"serviceID": {
					"value": "1018",
					"owner": "C9"
				},
				"name": {
					"value": "Muslim Meal"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "*Halal* meal prepared according to Islamic principles."
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/Muslim Meal.jpg",
							"media": [
								{
									"objectID": {
										"value": "Muslim Meal.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/Muslim Meal.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV11"
			},
			{
				"serviceID": {
					"value": "1020",
					"owner": "C9"
				},
				"name": {
					"value": "Kosher meal"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Prepared by kosher caterers under rabbinical supervision"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/Kosher Meal.jpg",
							"media": [
								{
									"objectID": {
										"value": "Kosher Meal.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/Kosher Meal.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV12"
			},
			{
				"serviceID": {
					"value": "1022",
					"owner": "C9"
				},
				"name": {
					"value": "Snack"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Enjoy a wide selection of complimentary snacks and beverages."
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/snacks.jpg",
							"media": [
								{
									"objectID": {
										"value": "snacks.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/snacks.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 1000,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV13"
			},
			{
				"serviceID": {
					"value": "1032",
					"owner": "C9"
				},
				"name": {
					"value": "2nd Bag"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Don't get caught out at the airport"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/bag2.jpg",
							"media": [
								{
									"objectID": {
										"value": "bag2.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/bag2.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 3500,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV14"
			},
			{
				"serviceID": {
					"value": "1051",
					"owner": "C9"
				},
				"name": {
					"value": "3rd Bag"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Don't get caught out at the airport"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/bag3.jpg",
							"media": [
								{
									"objectID": {
										"value": "bag3.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/bag3.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 11500,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 11500,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV15"
			},
			{
				"serviceID": {
					"value": "1062",
					"owner": "C9"
				},
				"name": {
					"value": "1st bag"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "Don't get caught out at the airport"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg",
							"media": [
								{
									"objectID": {
										"value": "bag1.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 3500,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 3500,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:30",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "12:40",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1125"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG1"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV16"
			},
			{
				"serviceID": {
					"value": "1028",
					"owner": "C9"
				},
				"name": {
					"value": "1st Bag"
				},
				"encoding": {},
				"feeMethod": {
					"value": "OC"
				},
				"descriptions": {
					"description": [
						{
							"text": {
								"value": "First bag free"
							},
							"link": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg",
							"media": [
								{
									"objectID": {
										"value": "bag1.jpg"
									}
								},
								{
									"mediaLink": {
										"value": "http://kronos.jrtechnologies.com/ServiceImage/bag1.jpg"
									}
								}
							]
						}
					]
				},
				"settlement": {
					"method": {
						"code": "AD",
						"definition": "Internal Airline Document"
					}
				},
				"price": [
					{
						"total": {
							"value": 700,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH1",
								"ptc": {
									"value": "ADT",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH2",
								"ptc": {
									"value": "CHD",
									"quantity": 2
								}
							}
						]
					},
					{
						"total": {
							"value": 0,
							"taxable": true
						},
						"passengerReferences": [
							{
								"objectKey": "SH3",
								"ptc": {
									"value": "INF",
									"quantity": 2
								}
							}
						]
					}
				],
				"associations": [
					{
						"traveler": {
							"travelerReferences": [
								{
									"objectKey": "SH1",
									"ptc": {
										"value": "ADT",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH2",
									"ptc": {
										"value": "CHD",
										"quantity": 2
									}
								},
								{
									"objectKey": "SH3",
									"ptc": {
										"value": "INF",
										"quantity": 2
									}
								}
							]
						},
						"flight": {
							"originDestinationReferencesOrSegmentReferences": [
								{
									"value": [
										{
											"departure": {
												"airportCode": {
													"value": "BCN"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "08:05",
												"airportName": "Barcelona Airport"
											},
											"arrival": {
												"airportCode": {
													"value": "FRA"
												},
												"date": "2016-05-19T21:00:00.000+0000",
												"time": "10:15",
												"airportName": "Frankfurt International"
											},
											"marketingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1137"
												}
											},
											"operatingCarrier": {
												"airlineID": {
													"value": "C9"
												},
												"name": "Kronos Air",
												"flightNumber": {
													"value": "1137"
												}
											},
											"equipment": {
												"aircraftCode": {
													"value": "321"
												},
												"name": "321 - AIRBUS INDUSTRIE A321 JET"
											},
											"flightDetail": {
												"flightDuration": {
													"value": "PT2H10M"
												}
											},
											"segmentKey": "SEG13"
										}
									]
								}
							]
						}
					}
				],
				"objectKey": "SV17"
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
			},
			{
				"descriptionMetadatas": [
					{
						"augmentationPoint": {
							"augPoint": [
								{
									"any": "<?xml version=\"1.0\" encoding=\"UTF-16\"?>\n<a:Logo xmlns=\"http://www.iata.org/IATA/EDIST\" xmlns:a=\"http://www.iata.org\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                                    http://kronos.jrtechnologies.com/ServiceImage/kronos-50x90.png\n                                </a:Logo>"
								}
							]
						},
						"metadataKey": "ID1"
					}
				]
			}
		]
	},
	"echoToken": "8fdb1c621a7a4454aa3360556e7784d5",
	"timeStamp": "2015-12-10T12:39:00.000+0000",
	"target": "Production",
	"version": "16.1",
	"transactionIdentifier": "a"
};

export default offer;

