const offers = {
	"document" : {
		"metadata" : null,
		"name" : "ATHENA NDC GATEWAY",
		"referenceVersion" : "1.0",
		"id" : null,
		"refs" : [ ]
	},
	"success" : { },
	"warnings" : [ ],
	"airShoppingProcessing" : {
		"marketingMessages" : [ ],
		"refs" : [ ],
		"alerts" : [ ],
		"notices" : [ ],
		"remarks" : null
	},
	"shoppingResponseID" : {
		"owner" : "9A",
		"responseID" : {
			"value" : "RE6ac7227515a047a581d722971b9fa28f",
			"refs" : [ ]
		},
		"refs" : [ ]
	},
	"offersGroup" : {
		"allOffersSnapshot" : null,
		"airlineOffers" : [ {
			"totalOfferQuantity" : 3,
			"airlineOfferSnapshot" : null,
			"owner" : {
				"value" : "9A",
				"refs" : [ ],
				"objectMetaReferences" : [ ]
			},
			"airlineOffer" : [ {
				"parameters" : null,
				"offerID" : {
					"value" : "1",
					"owner" : "9A",
					"webAddressID" : null,
					"ownerType" : null,
					"refs" : [ ],
					"objectKey" : null
				},
				"validatingCarrier" : null,
				"timeLimits" : {
					"offerExpiration" : {
						"dateTime" : null,
						"shortDate" : null,
						"timestamp" : "2015-10-15T20:59:00.000+0000",
						"time" : null,
						"refs" : [ ],
						"objectKey" : null
					},
					"payment" : null,
					"otherLimits" : [ ],
					"refs" : [ ]
				},
				"totalPrice" : {
					"awardPricing" : null,
					"combinationPricing" : null,
					"simpleCurrencyPrice" : null,
					"detailCurrencyPrice" : {
						"approxInd" : null,
						"refundAllInd" : null,
						"taxIncludedInd" : null,
						"otherChargeInd" : null,
						"autoExchangeInd" : null,
						"refs" : [ ],
						"total" : {
							"value" : 98500,
							"taxable" : true,
							"code" : "EUR"
						},
						"equivalent" : null,
						"details" : {
							"detail" : [ {
								"subTotal" : {
									"value" : 98500,
									"taxable" : true,
									"code" : "EUR"
								},
								"application" : "Base Fare",
								"refundInd" : null,
								"refs" : [ ]
							} ],
							"refs" : [ ]
						},
						"taxes" : {
							"approxInd" : null,
							"collectionInd" : null,
							"refundAllInd" : null,
							"refs" : [ ],
							"total" : {
								"value" : 0,
								"taxable" : true,
								"code" : "EUR"
							},
							"breakdown" : null
						},
						"fees" : null
					},
					"encodedCurrencyPrice" : null,
					"refs" : [ ]
				},
				"descriptionReferences" : [ ],
				"disclosure" : null,
				"penalty" : null,
				"requestedDateInd" : null,
				"refs" : [ ],
				"match" : null,
				"pricedOffer" : {
					"refs" : [ ],
					"offerMetaReferences" : [ ],
					"offerPrice" : [ {
						"requestedDate" : {
							"priceDetail" : {
								"totalAmount" : {
									"awardPricing" : null,
									"combinationPricing" : null,
									"detailCurrencyPrice" : null,
									"encodedCurrencyPrice" : null,
									"simpleCurrencyPrice" : {
										"value" : 98500,
										"taxable" : true,
										"code" : "EUR"
									}
								},
								"baseAmount" : {
									"value" : 98500,
									"taxable" : true,
									"code" : "EUR"
								},
								"fareFiledIn" : null,
								"discount" : null,
								"surcharges" : [ ],
								"taxes" : {
									"approxInd" : null,
									"collectionInd" : null,
									"refundAllInd" : null,
									"refs" : [ ],
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : "EUR"
									},
									"breakdown" : null
								},
								"taxExemption" : null,
								"awardPricing" : null,
								"combinationPricing" : null,
								"originDestinationReferenceOrSegmentReferences" : [ ],
								"fees" : null
							},
							"associations" : [ {
								"associatedTraveler" : {
									"allTravelerInd" : null,
									"travelerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ]
								},
								"applicableFlight" : null,
								"priceClass" : null,
								"offerDetailAssociation" : null,
								"includedService" : null,
								"associatedService" : {
									"bundleReference" : {
										"itemCount" : 3,
										"associations" : {
											"serviceReference" : [ {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1023",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Inflight entertainment"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "The latest blockbusters, classics from film history, music and games",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "comfort-eco-int-1_title.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 500,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																}, {
																	"departure" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "LHR",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : null,
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG2",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV2",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											}, {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1022",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Advance Seat selection"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "A convenient option that lets you reserve your preferred seat",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "preferred_seat.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 0,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV1",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											}, {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1021",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Meal"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "Vegetarian Vegan Meal",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "int_economy_promo.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 0,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																}, {
																	"departure" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "LHR",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : null,
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG2",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV3",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											} ],
											"serviceID" : [ ]
										},
										"selection" : {
											"minimumQuantityOrMaximumQuantity" : [ {
												"name" : "{http://www.iata.org/IATA/EDIST}MaximumQuantity",
												"declaredType" : "java.math.BigInteger",
												"scope" : "org.iata.iata.edist.ServiceBundle$Selection",
												"value" : 2,
												"nil" : false,
												"globalScope" : false,
												"typeSubstituted" : false
											} ]
										},
										"bundleID" : {
											"value" : "B1004",
											"refs" : [ ],
											"objectKey" : null
										},
										"price" : [ {
											"total" : {
												"value" : 5000,
												"taxable" : true,
												"code" : null
											},
											"refundableValue" : null,
											"details" : null,
											"taxes" : null,
											"fees" : null,
											"passengerReferences" : [ {
												"pricedInd" : null,
												"refs" : [ ],
												"objectKey" : "SH1",
												"ptc" : {
													"value" : "ADT",
													"quantity" : 1
												},
												"residenceCode" : null,
												"passengerAssociation" : null,
												"age" : null,
												"citizenshipCountryCode" : null
											} ],
											"refs" : [ ]
										} ],
										"bundleName" : null,
										"refs" : [ ],
										"listKey" : "SB1"
									},
									"serviceReferences" : [ ]
								},
								"otherAssociation" : [ ]
							} ]
						},
						"fareDetail" : {
							"fareIndicatorCode" : null,
							"fareComponent" : [ {
								"parameters" : null,
								"segmentReference" : null,
								"priceBreakdown" : null,
								"fareBasis" : {
									"fareBasisCode" : {
										"displayAllInd" : null,
										"allExemptInd" : null,
										"pricingInd" : null,
										"connectionInd" : null,
										"ticketlessInd" : null,
										"associateInd" : null,
										"taxOnEMDInd" : null,
										"stopOverInd" : null,
										"taxInd" : null,
										"otherChargeInd" : null,
										"poolingInd" : null,
										"specialItemsInd" : null,
										"taxesInd" : null,
										"netFareInd" : null,
										"reissueOnlyInd" : null,
										"autoExchangeInd" : null,
										"alertInd" : null,
										"authenticationInd" : null,
										"marketingInd" : null,
										"multiPayFormInd" : null,
										"noticeInd" : null,
										"partialInd" : null,
										"warningInd" : null,
										"failedPaymentInd" : null,
										"partialPaymentInd" : null,
										"verificationInd" : null,
										"priceVarianceInd" : null,
										"invGuaranteedInd" : null,
										"waitlistInd" : null,
										"bundleInd" : null,
										"invGuarRequestedInd" : null,
										"exitRowInd" : null,
										"premiumInd" : null,
										"upperDeckInd" : null,
										"taxIncludedInd" : null,
										"feeIncludedInd" : null,
										"leadPricingInd" : null,
										"timestamp" : null,
										"metadataToken" : null,
										"refs" : [ ],
										"objectKey" : null,
										"code" : "ESO",
										"application" : null,
										"eticketInd" : null
									},
									"fareRulesRemarks" : [ ],
									"fareBasisCityPair" : null,
									"rbd" : null
								},
								"ticketDesig" : null,
								"fareRules" : null,
								"refs" : [ ]
							} ],
							"priceClassReference" : null,
							"flightMileage" : null,
							"tourCode" : null,
							"remarks" : null,
							"refs" : [ ]
						},
						"offerItemID" : "1#M#111198795#111162714",
						"modificationProhibitedInd" : null,
						"refs" : [ ]
					} ],
					"associations" : [ {
						"associatedTraveler" : null,
						"applicableFlight" : {
							"allSegmentInd" : null,
							"flightSegmentReference" : [ {
								"cabin" : {
									"cabinDesignator" : {
										"value" : "M",
										"allCabins" : null
									},
									"marketingName" : null,
									"refs" : [ ]
								},
								"classOfService" : null,
								"bagDetailAssociation" : null,
								"marriedSegmentGroup" : null,
								"ref" : {
									"departure" : {
										"airportCode" : {
											"value" : "ARN",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"airportName" : null,
										"terminal" : null,
										"refs" : [ ]
									},
									"arrival" : {
										"airportCode" : {
											"value" : "FRA",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"changeOfDay" : null,
										"airportName" : "Frankfurt International",
										"terminal" : null,
										"refs" : [ ]
									},
									"marketingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3803",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ]
									},
									"operatingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3803",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ],
										"disclosures" : null
									},
									"equipment" : {
										"aircraftCode" : {
											"value" : "E95",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"changeOfGaugeInd" : null,
										"refs" : [ ],
										"name" : "E95 - EMBRAER 195 JET",
										"airlineEquipCode" : null
									},
									"classOfService" : null,
									"flightDetail" : {
										"flightSegmentType" : null,
										"flightDistance" : null,
										"flightDuration" : {
											"value" : "PT2H10M",
											"application" : null,
											"refs" : [ ]
										},
										"stops" : null,
										"resDateTime" : null,
										"tourOperatorFlightID" : null,
										"refs" : [ ]
									},
									"onTimePerformance" : null,
									"settlement" : null,
									"segmentKey" : "SEG1",
									"connectInd" : null,
									"electronicTicketInd" : null,
									"ticketlessInd" : null,
									"secureFlight" : null,
									"refs" : [ ]
								}
							}, {
								"cabin" : {
									"cabinDesignator" : {
										"value" : "M",
										"allCabins" : null
									},
									"marketingName" : null,
									"refs" : [ ]
								},
								"classOfService" : null,
								"bagDetailAssociation" : null,
								"marriedSegmentGroup" : null,
								"ref" : {
									"departure" : {
										"airportCode" : {
											"value" : "FRA",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"airportName" : "Frankfurt International",
										"terminal" : null,
										"refs" : [ ]
									},
									"arrival" : {
										"airportCode" : {
											"value" : "LHR",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"changeOfDay" : null,
										"airportName" : null,
										"terminal" : null,
										"refs" : [ ]
									},
									"marketingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3916",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ]
									},
									"operatingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3916",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ],
										"disclosures" : null
									},
									"equipment" : {
										"aircraftCode" : {
											"value" : "E95",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"changeOfGaugeInd" : null,
										"refs" : [ ],
										"name" : "E95 - EMBRAER 195 JET",
										"airlineEquipCode" : null
									},
									"classOfService" : null,
									"flightDetail" : {
										"flightSegmentType" : null,
										"flightDistance" : null,
										"flightDuration" : {
											"value" : null,
											"application" : null,
											"refs" : [ ]
										},
										"stops" : null,
										"resDateTime" : null,
										"tourOperatorFlightID" : null,
										"refs" : [ ]
									},
									"onTimePerformance" : null,
									"settlement" : null,
									"segmentKey" : "SEG2",
									"connectInd" : null,
									"electronicTicketInd" : null,
									"ticketlessInd" : null,
									"secureFlight" : null,
									"refs" : [ ]
								}
							} ],
							"allOriginDestinationInd" : null,
							"originDestinationReferences" : [ {
								"departureCode" : {
									"value" : "ARN",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"arrivalCode" : {
									"value" : "LHR",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"originDestinationKey" : "OD1",
								"refs" : [ ],
								"totalJourney" : null,
								"flightReferences" : {
									"value" : [ {
										"journey" : {
											"time" : "PT3H15M",
											"distance" : null,
											"refs" : [ ]
										},
										"segmentReferences" : {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										},
										"settlement" : null,
										"flightKey" : "FL1",
										"refs" : [ ]
									} ],
									"onPoint" : null,
									"offPoint" : null
								},
								"checkedBag" : null,
								"carryOnBag" : null
							} ],
							"allFlightInd" : null,
							"flightReferences" : {
								"value" : [ {
									"journey" : {
										"time" : "PT3H15M",
										"distance" : null,
										"refs" : [ ]
									},
									"segmentReferences" : {
										"value" : [ {
											"departure" : {
												"airportCode" : {
													"value" : "ARN",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"airportName" : null,
												"terminal" : null,
												"refs" : [ ]
											},
											"arrival" : {
												"airportCode" : {
													"value" : "FRA",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"changeOfDay" : null,
												"airportName" : "Frankfurt International",
												"terminal" : null,
												"refs" : [ ]
											},
											"marketingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3803",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ]
											},
											"operatingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3803",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ],
												"disclosures" : null
											},
											"equipment" : {
												"aircraftCode" : {
													"value" : "E95",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"changeOfGaugeInd" : null,
												"refs" : [ ],
												"name" : "E95 - EMBRAER 195 JET",
												"airlineEquipCode" : null
											},
											"classOfService" : null,
											"flightDetail" : {
												"flightSegmentType" : null,
												"flightDistance" : null,
												"flightDuration" : {
													"value" : "PT2H10M",
													"application" : null,
													"refs" : [ ]
												},
												"stops" : null,
												"resDateTime" : null,
												"tourOperatorFlightID" : null,
												"refs" : [ ]
											},
											"onTimePerformance" : null,
											"settlement" : null,
											"segmentKey" : "SEG1",
											"connectInd" : null,
											"electronicTicketInd" : null,
											"ticketlessInd" : null,
											"secureFlight" : null,
											"refs" : [ ]
										}, {
											"departure" : {
												"airportCode" : {
													"value" : "FRA",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"airportName" : "Frankfurt International",
												"terminal" : null,
												"refs" : [ ]
											},
											"arrival" : {
												"airportCode" : {
													"value" : "LHR",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"changeOfDay" : null,
												"airportName" : null,
												"terminal" : null,
												"refs" : [ ]
											},
											"marketingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3916",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ]
											},
											"operatingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3916",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ],
												"disclosures" : null
											},
											"equipment" : {
												"aircraftCode" : {
													"value" : "E95",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"changeOfGaugeInd" : null,
												"refs" : [ ],
												"name" : "E95 - EMBRAER 195 JET",
												"airlineEquipCode" : null
											},
											"classOfService" : null,
											"flightDetail" : {
												"flightSegmentType" : null,
												"flightDistance" : null,
												"flightDuration" : {
													"value" : null,
													"application" : null,
													"refs" : [ ]
												},
												"stops" : null,
												"resDateTime" : null,
												"tourOperatorFlightID" : null,
												"refs" : [ ]
											},
											"onTimePerformance" : null,
											"settlement" : null,
											"segmentKey" : "SEG2",
											"connectInd" : null,
											"electronicTicketInd" : null,
											"ticketlessInd" : null,
											"secureFlight" : null,
											"refs" : [ ]
										} ],
										"onPoint" : null,
										"offPoint" : null
									},
									"settlement" : null,
									"flightKey" : "FL1",
									"refs" : [ ]
								} ],
								"onPoint" : null,
								"offPoint" : null
							}
						},
						"priceClass" : {
							"priceClassReference" : {
								"name" : "M-ESO",
								"code" : "M",
								"descriptions" : [ ],
								"fareBasisCode" : {
									"displayAllInd" : null,
									"allExemptInd" : null,
									"pricingInd" : null,
									"connectionInd" : null,
									"ticketlessInd" : null,
									"associateInd" : null,
									"taxOnEMDInd" : null,
									"stopOverInd" : null,
									"taxInd" : null,
									"otherChargeInd" : null,
									"poolingInd" : null,
									"specialItemsInd" : null,
									"taxesInd" : null,
									"netFareInd" : null,
									"reissueOnlyInd" : null,
									"autoExchangeInd" : null,
									"alertInd" : null,
									"authenticationInd" : null,
									"marketingInd" : null,
									"multiPayFormInd" : null,
									"noticeInd" : null,
									"partialInd" : null,
									"warningInd" : null,
									"failedPaymentInd" : null,
									"partialPaymentInd" : null,
									"verificationInd" : null,
									"priceVarianceInd" : null,
									"invGuaranteedInd" : null,
									"waitlistInd" : null,
									"bundleInd" : null,
									"invGuarRequestedInd" : null,
									"exitRowInd" : null,
									"premiumInd" : null,
									"upperDeckInd" : null,
									"taxIncludedInd" : null,
									"feeIncludedInd" : null,
									"leadPricingInd" : null,
									"timestamp" : null,
									"metadataToken" : null,
									"refs" : [ ],
									"objectKey" : null,
									"code" : "ESO",
									"application" : null,
									"eticketInd" : null
								},
								"classOfService" : [ ],
								"associations" : [ ],
								"displayOrder" : null,
								"objectKey" : "PC1",
								"refs" : [ ]
							}
						},
						"offerDetailAssociation" : null,
						"includedService" : {
							"bundleReference" : null,
							"serviceReferences" : [ {
								"serviceID" : {
									"value" : "1022",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Advance Seat selection"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "A convenient option that lets you reserve your preferred seat",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "preferred_seat.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV1",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							}, {
								"serviceID" : {
									"value" : "1021",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Meal"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "Vegetarian Vegan Meal",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "int_economy_promo.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV3",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							} ]
						},
						"associatedService" : {
							"bundleReference" : null,
							"serviceReferences" : [ {
								"serviceID" : {
									"value" : "1023",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Inflight entertainment"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "The latest blockbusters, classics from film history, music and games",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "comfort-eco-int-1_title.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 500,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV2",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							} ]
						},
						"otherAssociation" : [ ]
					} ]
				}
			}, {
				"parameters" : null,
				"offerID" : {
					"value" : "2",
					"owner" : "9A",
					"webAddressID" : null,
					"ownerType" : null,
					"refs" : [ ],
					"objectKey" : null
				},
				"validatingCarrier" : null,
				"timeLimits" : {
					"offerExpiration" : {
						"dateTime" : null,
						"shortDate" : null,
						"timestamp" : "2015-10-15T20:59:00.000+0000",
						"time" : null,
						"refs" : [ ],
						"objectKey" : null
					},
					"payment" : null,
					"otherLimits" : [ ],
					"refs" : [ ]
				},
				"totalPrice" : {
					"awardPricing" : null,
					"combinationPricing" : null,
					"simpleCurrencyPrice" : null,
					"detailCurrencyPrice" : {
						"approxInd" : null,
						"refundAllInd" : null,
						"taxIncludedInd" : null,
						"otherChargeInd" : null,
						"autoExchangeInd" : null,
						"refs" : [ ],
						"total" : {
							"value" : 87500,
							"taxable" : true,
							"code" : "EUR"
						},
						"equivalent" : null,
						"details" : {
							"detail" : [ {
								"subTotal" : {
									"value" : 87500,
									"taxable" : true,
									"code" : "EUR"
								},
								"application" : "Base Fare",
								"refundInd" : null,
								"refs" : [ ]
							} ],
							"refs" : [ ]
						},
						"taxes" : {
							"approxInd" : null,
							"collectionInd" : null,
							"refundAllInd" : null,
							"refs" : [ ],
							"total" : {
								"value" : 0,
								"taxable" : true,
								"code" : "EUR"
							},
							"breakdown" : null
						},
						"fees" : null
					},
					"encodedCurrencyPrice" : null,
					"refs" : [ ]
				},
				"descriptionReferences" : [ ],
				"disclosure" : null,
				"penalty" : null,
				"requestedDateInd" : null,
				"refs" : [ ],
				"match" : null,
				"pricedOffer" : {
					"refs" : [ ],
					"offerMetaReferences" : [ ],
					"offerPrice" : [ {
						"requestedDate" : {
							"priceDetail" : {
								"totalAmount" : {
									"awardPricing" : null,
									"combinationPricing" : null,
									"detailCurrencyPrice" : null,
									"encodedCurrencyPrice" : null,
									"simpleCurrencyPrice" : {
										"value" : 87500,
										"taxable" : true,
										"code" : "EUR"
									}
								},
								"baseAmount" : {
									"value" : 87500,
									"taxable" : true,
									"code" : "EUR"
								},
								"fareFiledIn" : null,
								"discount" : null,
								"surcharges" : [ ],
								"taxes" : {
									"approxInd" : null,
									"collectionInd" : null,
									"refundAllInd" : null,
									"refs" : [ ],
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : "EUR"
									},
									"breakdown" : null
								},
								"taxExemption" : null,
								"awardPricing" : null,
								"combinationPricing" : null,
								"originDestinationReferenceOrSegmentReferences" : [ ],
								"fees" : null
							},
							"associations" : [ {
								"associatedTraveler" : {
									"allTravelerInd" : null,
									"travelerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ]
								},
								"applicableFlight" : null,
								"priceClass" : null,
								"offerDetailAssociation" : null,
								"includedService" : null,
								"associatedService" : {
									"bundleReference" : {
										"itemCount" : 3,
										"associations" : {
											"serviceReference" : [ {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1023",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Inflight entertainment"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "The latest blockbusters, classics from film history, music and games",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "comfort-eco-int-1_title.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 500,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																}, {
																	"departure" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "LHR",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : null,
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG2",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV2",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											}, {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1022",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Advance Seat selection"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "A convenient option that lets you reserve your preferred seat",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "preferred_seat.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 0,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV1",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											}, {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1021",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Meal"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "Vegetarian Vegan Meal",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "int_economy_promo.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 0,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																}, {
																	"departure" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "LHR",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : null,
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG2",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV3",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											} ],
											"serviceID" : [ ]
										},
										"selection" : {
											"minimumQuantityOrMaximumQuantity" : [ {
												"name" : "{http://www.iata.org/IATA/EDIST}MaximumQuantity",
												"declaredType" : "java.math.BigInteger",
												"scope" : "org.iata.iata.edist.ServiceBundle$Selection",
												"value" : 2,
												"nil" : false,
												"globalScope" : false,
												"typeSubstituted" : false
											} ]
										},
										"bundleID" : {
											"value" : "B1004",
											"refs" : [ ],
											"objectKey" : null
										},
										"price" : [ {
											"total" : {
												"value" : 5000,
												"taxable" : true,
												"code" : null
											},
											"refundableValue" : null,
											"details" : null,
											"taxes" : null,
											"fees" : null,
											"passengerReferences" : [ {
												"pricedInd" : null,
												"refs" : [ ],
												"objectKey" : "SH1",
												"ptc" : {
													"value" : "ADT",
													"quantity" : 1
												},
												"residenceCode" : null,
												"passengerAssociation" : null,
												"age" : null,
												"citizenshipCountryCode" : null
											} ],
											"refs" : [ ]
										} ],
										"bundleName" : null,
										"refs" : [ ],
										"listKey" : "SB1"
									},
									"serviceReferences" : [ ]
								},
								"otherAssociation" : [ ]
							} ]
						},
						"fareDetail" : {
							"fareIndicatorCode" : null,
							"fareComponent" : [ {
								"parameters" : null,
								"segmentReference" : null,
								"priceBreakdown" : null,
								"fareBasis" : {
									"fareBasisCode" : {
										"displayAllInd" : null,
										"allExemptInd" : null,
										"pricingInd" : null,
										"connectionInd" : null,
										"ticketlessInd" : null,
										"associateInd" : null,
										"taxOnEMDInd" : null,
										"stopOverInd" : null,
										"taxInd" : null,
										"otherChargeInd" : null,
										"poolingInd" : null,
										"specialItemsInd" : null,
										"taxesInd" : null,
										"netFareInd" : null,
										"reissueOnlyInd" : null,
										"autoExchangeInd" : null,
										"alertInd" : null,
										"authenticationInd" : null,
										"marketingInd" : null,
										"multiPayFormInd" : null,
										"noticeInd" : null,
										"partialInd" : null,
										"warningInd" : null,
										"failedPaymentInd" : null,
										"partialPaymentInd" : null,
										"verificationInd" : null,
										"priceVarianceInd" : null,
										"invGuaranteedInd" : null,
										"waitlistInd" : null,
										"bundleInd" : null,
										"invGuarRequestedInd" : null,
										"exitRowInd" : null,
										"premiumInd" : null,
										"upperDeckInd" : null,
										"taxIncludedInd" : null,
										"feeIncludedInd" : null,
										"leadPricingInd" : null,
										"timestamp" : null,
										"metadataToken" : null,
										"refs" : [ ],
										"objectKey" : null,
										"code" : "ERO",
										"application" : null,
										"eticketInd" : null
									},
									"fareRulesRemarks" : [ ],
									"fareBasisCityPair" : null,
									"rbd" : null
								},
								"ticketDesig" : null,
								"fareRules" : null,
								"refs" : [ ]
							} ],
							"priceClassReference" : null,
							"flightMileage" : null,
							"tourCode" : null,
							"remarks" : null,
							"refs" : [ ]
						},
						"offerItemID" : "1#M#111198795#111162714",
						"modificationProhibitedInd" : null,
						"refs" : [ ]
					} ],
					"associations" : [ {
						"associatedTraveler" : null,
						"applicableFlight" : {
							"allSegmentInd" : null,
							"flightSegmentReference" : [ {
								"cabin" : {
									"cabinDesignator" : {
										"value" : "M",
										"allCabins" : null
									},
									"marketingName" : null,
									"refs" : [ ]
								},
								"classOfService" : null,
								"bagDetailAssociation" : null,
								"marriedSegmentGroup" : null,
								"ref" : {
									"departure" : {
										"airportCode" : {
											"value" : "ARN",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"airportName" : null,
										"terminal" : null,
										"refs" : [ ]
									},
									"arrival" : {
										"airportCode" : {
											"value" : "FRA",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"changeOfDay" : null,
										"airportName" : "Frankfurt International",
										"terminal" : null,
										"refs" : [ ]
									},
									"marketingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3803",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ]
									},
									"operatingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3803",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ],
										"disclosures" : null
									},
									"equipment" : {
										"aircraftCode" : {
											"value" : "E95",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"changeOfGaugeInd" : null,
										"refs" : [ ],
										"name" : "E95 - EMBRAER 195 JET",
										"airlineEquipCode" : null
									},
									"classOfService" : null,
									"flightDetail" : {
										"flightSegmentType" : null,
										"flightDistance" : null,
										"flightDuration" : {
											"value" : "PT2H10M",
											"application" : null,
											"refs" : [ ]
										},
										"stops" : null,
										"resDateTime" : null,
										"tourOperatorFlightID" : null,
										"refs" : [ ]
									},
									"onTimePerformance" : null,
									"settlement" : null,
									"segmentKey" : "SEG1",
									"connectInd" : null,
									"electronicTicketInd" : null,
									"ticketlessInd" : null,
									"secureFlight" : null,
									"refs" : [ ]
								}
							}, {
								"cabin" : {
									"cabinDesignator" : {
										"value" : "M",
										"allCabins" : null
									},
									"marketingName" : null,
									"refs" : [ ]
								},
								"classOfService" : null,
								"bagDetailAssociation" : null,
								"marriedSegmentGroup" : null,
								"ref" : {
									"departure" : {
										"airportCode" : {
											"value" : "FRA",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"airportName" : "Frankfurt International",
										"terminal" : null,
										"refs" : [ ]
									},
									"arrival" : {
										"airportCode" : {
											"value" : "LHR",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"changeOfDay" : null,
										"airportName" : null,
										"terminal" : null,
										"refs" : [ ]
									},
									"marketingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3916",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ]
									},
									"operatingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3916",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ],
										"disclosures" : null
									},
									"equipment" : {
										"aircraftCode" : {
											"value" : "E95",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"changeOfGaugeInd" : null,
										"refs" : [ ],
										"name" : "E95 - EMBRAER 195 JET",
										"airlineEquipCode" : null
									},
									"classOfService" : null,
									"flightDetail" : {
										"flightSegmentType" : null,
										"flightDistance" : null,
										"flightDuration" : {
											"value" : null,
											"application" : null,
											"refs" : [ ]
										},
										"stops" : null,
										"resDateTime" : null,
										"tourOperatorFlightID" : null,
										"refs" : [ ]
									},
									"onTimePerformance" : null,
									"settlement" : null,
									"segmentKey" : "SEG2",
									"connectInd" : null,
									"electronicTicketInd" : null,
									"ticketlessInd" : null,
									"secureFlight" : null,
									"refs" : [ ]
								}
							} ],
							"allOriginDestinationInd" : null,
							"originDestinationReferences" : [ {
								"departureCode" : {
									"value" : "ARN",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"arrivalCode" : {
									"value" : "LHR",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"originDestinationKey" : "OD1",
								"refs" : [ ],
								"totalJourney" : null,
								"flightReferences" : {
									"value" : [ {
										"journey" : {
											"time" : "PT3H15M",
											"distance" : null,
											"refs" : [ ]
										},
										"segmentReferences" : {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										},
										"settlement" : null,
										"flightKey" : "FL1",
										"refs" : [ ]
									} ],
									"onPoint" : null,
									"offPoint" : null
								},
								"checkedBag" : null,
								"carryOnBag" : null
							} ],
							"allFlightInd" : null,
							"flightReferences" : {
								"value" : [ {
									"journey" : {
										"time" : "PT3H15M",
										"distance" : null,
										"refs" : [ ]
									},
									"segmentReferences" : {
										"value" : [ {
											"departure" : {
												"airportCode" : {
													"value" : "ARN",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"airportName" : null,
												"terminal" : null,
												"refs" : [ ]
											},
											"arrival" : {
												"airportCode" : {
													"value" : "FRA",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"changeOfDay" : null,
												"airportName" : "Frankfurt International",
												"terminal" : null,
												"refs" : [ ]
											},
											"marketingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3803",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ]
											},
											"operatingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3803",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ],
												"disclosures" : null
											},
											"equipment" : {
												"aircraftCode" : {
													"value" : "E95",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"changeOfGaugeInd" : null,
												"refs" : [ ],
												"name" : "E95 - EMBRAER 195 JET",
												"airlineEquipCode" : null
											},
											"classOfService" : null,
											"flightDetail" : {
												"flightSegmentType" : null,
												"flightDistance" : null,
												"flightDuration" : {
													"value" : "PT2H10M",
													"application" : null,
													"refs" : [ ]
												},
												"stops" : null,
												"resDateTime" : null,
												"tourOperatorFlightID" : null,
												"refs" : [ ]
											},
											"onTimePerformance" : null,
											"settlement" : null,
											"segmentKey" : "SEG1",
											"connectInd" : null,
											"electronicTicketInd" : null,
											"ticketlessInd" : null,
											"secureFlight" : null,
											"refs" : [ ]
										}, {
											"departure" : {
												"airportCode" : {
													"value" : "FRA",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"airportName" : "Frankfurt International",
												"terminal" : null,
												"refs" : [ ]
											},
											"arrival" : {
												"airportCode" : {
													"value" : "LHR",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"changeOfDay" : null,
												"airportName" : null,
												"terminal" : null,
												"refs" : [ ]
											},
											"marketingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3916",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ]
											},
											"operatingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3916",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ],
												"disclosures" : null
											},
											"equipment" : {
												"aircraftCode" : {
													"value" : "E95",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"changeOfGaugeInd" : null,
												"refs" : [ ],
												"name" : "E95 - EMBRAER 195 JET",
												"airlineEquipCode" : null
											},
											"classOfService" : null,
											"flightDetail" : {
												"flightSegmentType" : null,
												"flightDistance" : null,
												"flightDuration" : {
													"value" : null,
													"application" : null,
													"refs" : [ ]
												},
												"stops" : null,
												"resDateTime" : null,
												"tourOperatorFlightID" : null,
												"refs" : [ ]
											},
											"onTimePerformance" : null,
											"settlement" : null,
											"segmentKey" : "SEG2",
											"connectInd" : null,
											"electronicTicketInd" : null,
											"ticketlessInd" : null,
											"secureFlight" : null,
											"refs" : [ ]
										} ],
										"onPoint" : null,
										"offPoint" : null
									},
									"settlement" : null,
									"flightKey" : "FL1",
									"refs" : [ ]
								} ],
								"onPoint" : null,
								"offPoint" : null
							}
						},
						"priceClass" : {
							"priceClassReference" : {
								"name" : "M-ERO",
								"code" : "M",
								"descriptions" : [ ],
								"fareBasisCode" : {
									"displayAllInd" : null,
									"allExemptInd" : null,
									"pricingInd" : null,
									"connectionInd" : null,
									"ticketlessInd" : null,
									"associateInd" : null,
									"taxOnEMDInd" : null,
									"stopOverInd" : null,
									"taxInd" : null,
									"otherChargeInd" : null,
									"poolingInd" : null,
									"specialItemsInd" : null,
									"taxesInd" : null,
									"netFareInd" : null,
									"reissueOnlyInd" : null,
									"autoExchangeInd" : null,
									"alertInd" : null,
									"authenticationInd" : null,
									"marketingInd" : null,
									"multiPayFormInd" : null,
									"noticeInd" : null,
									"partialInd" : null,
									"warningInd" : null,
									"failedPaymentInd" : null,
									"partialPaymentInd" : null,
									"verificationInd" : null,
									"priceVarianceInd" : null,
									"invGuaranteedInd" : null,
									"waitlistInd" : null,
									"bundleInd" : null,
									"invGuarRequestedInd" : null,
									"exitRowInd" : null,
									"premiumInd" : null,
									"upperDeckInd" : null,
									"taxIncludedInd" : null,
									"feeIncludedInd" : null,
									"leadPricingInd" : null,
									"timestamp" : null,
									"metadataToken" : null,
									"refs" : [ ],
									"objectKey" : null,
									"code" : "ERO",
									"application" : null,
									"eticketInd" : null
								},
								"classOfService" : [ ],
								"associations" : [ ],
								"displayOrder" : null,
								"objectKey" : "PC2",
								"refs" : [ ]
							}
						},
						"offerDetailAssociation" : null,
						"includedService" : {
							"bundleReference" : null,
							"serviceReferences" : [ {
								"serviceID" : {
									"value" : "1022",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Advance Seat selection"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "A convenient option that lets you reserve your preferred seat",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "preferred_seat.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV1",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							}, {
								"serviceID" : {
									"value" : "1021",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Meal"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "Vegetarian Vegan Meal",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "int_economy_promo.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV3",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							} ]
						},
						"associatedService" : {
							"bundleReference" : null,
							"serviceReferences" : [ {
								"serviceID" : {
									"value" : "1023",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Inflight entertainment"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "The latest blockbusters, classics from film history, music and games",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "comfort-eco-int-1_title.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 500,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV2",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							} ]
						},
						"otherAssociation" : [ ]
					} ]
				}
			}, {
				"parameters" : null,
				"offerID" : {
					"value" : "3",
					"owner" : "9A",
					"webAddressID" : null,
					"ownerType" : null,
					"refs" : [ ],
					"objectKey" : null
				},
				"validatingCarrier" : null,
				"timeLimits" : {
					"offerExpiration" : {
						"dateTime" : null,
						"shortDate" : null,
						"timestamp" : "2015-10-15T20:59:00.000+0000",
						"time" : null,
						"refs" : [ ],
						"objectKey" : null
					},
					"payment" : null,
					"otherLimits" : [ ],
					"refs" : [ ]
				},
				"totalPrice" : {
					"awardPricing" : null,
					"combinationPricing" : null,
					"simpleCurrencyPrice" : null,
					"detailCurrencyPrice" : {
						"approxInd" : null,
						"refundAllInd" : null,
						"taxIncludedInd" : null,
						"otherChargeInd" : null,
						"autoExchangeInd" : null,
						"refs" : [ ],
						"total" : {
							"value" : 110400,
							"taxable" : true,
							"code" : "EUR"
						},
						"equivalent" : null,
						"details" : {
							"detail" : [ {
								"subTotal" : {
									"value" : 110400,
									"taxable" : true,
									"code" : "EUR"
								},
								"application" : "Base Fare",
								"refundInd" : null,
								"refs" : [ ]
							} ],
							"refs" : [ ]
						},
						"taxes" : {
							"approxInd" : null,
							"collectionInd" : null,
							"refundAllInd" : null,
							"refs" : [ ],
							"total" : {
								"value" : 0,
								"taxable" : true,
								"code" : "EUR"
							},
							"breakdown" : null
						},
						"fees" : null
					},
					"encodedCurrencyPrice" : null,
					"refs" : [ ]
				},
				"descriptionReferences" : [ ],
				"disclosure" : null,
				"penalty" : null,
				"requestedDateInd" : null,
				"refs" : [ ],
				"match" : null,
				"pricedOffer" : {
					"refs" : [ ],
					"offerMetaReferences" : [ ],
					"offerPrice" : [ {
						"requestedDate" : {
							"priceDetail" : {
								"totalAmount" : {
									"awardPricing" : null,
									"combinationPricing" : null,
									"detailCurrencyPrice" : null,
									"encodedCurrencyPrice" : null,
									"simpleCurrencyPrice" : {
										"value" : 110400,
										"taxable" : true,
										"code" : "EUR"
									}
								},
								"baseAmount" : {
									"value" : 110400,
									"taxable" : true,
									"code" : "EUR"
								},
								"fareFiledIn" : null,
								"discount" : null,
								"surcharges" : [ ],
								"taxes" : {
									"approxInd" : null,
									"collectionInd" : null,
									"refundAllInd" : null,
									"refs" : [ ],
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : "EUR"
									},
									"breakdown" : null
								},
								"taxExemption" : null,
								"awardPricing" : null,
								"combinationPricing" : null,
								"originDestinationReferenceOrSegmentReferences" : [ ],
								"fees" : null
							},
							"associations" : [ {
								"associatedTraveler" : {
									"allTravelerInd" : null,
									"travelerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ]
								},
								"applicableFlight" : null,
								"priceClass" : null,
								"offerDetailAssociation" : null,
								"includedService" : null,
								"associatedService" : {
									"bundleReference" : {
										"itemCount" : 3,
										"associations" : {
											"serviceReference" : [ {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1023",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Inflight entertainment"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "The latest blockbusters, classics from film history, music and games",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "comfort-eco-int-1_title.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 500,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																}, {
																	"departure" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "LHR",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : null,
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG2",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV2",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											}, {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1022",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Advance Seat selection"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "A convenient option that lets you reserve your preferred seat",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "preferred_seat.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 0,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV1",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											}, {
												"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
												"declaredType" : "java.lang.Object",
												"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
												"value" : {
													"serviceID" : {
														"value" : "1021",
														"owner" : "9A",
														"refs" : [ ],
														"objectKey" : null
													},
													"name" : {
														"value" : "Meal"
													},
													"encoding" : {
														"rfic" : null,
														"type" : null,
														"code" : null,
														"subCode" : null,
														"refs" : [ ]
													},
													"timeLimits" : null,
													"feeMethod" : {
														"value" : "OC"
													},
													"descriptions" : {
														"description" : [ {
															"text" : {
																"value" : "Vegetarian Vegan Meal",
																"refs" : [ ]
															},
															"markupStyle" : null,
															"link" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
															"media" : [ {
																"objectID" : {
																	"value" : "int_economy_promo.jpg",
																	"owner" : null,
																	"refs" : [ ]
																},
																"mediaLink" : null,
																"attachmentID" : null
															}, {
																"objectID" : null,
																"mediaLink" : {
																	"value" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
																	"refs" : [ ],
																	"objectMetaReferences" : [ ]
																},
																"attachmentID" : null
															} ],
															"objectKey" : null,
															"refs" : [ ],
															"application" : null
														} ],
														"refs" : [ ]
													},
													"settlement" : {
														"method" : {
															"code" : "AD",
															"definition" : "Internal Airline Document",
															"tableName" : null,
															"link" : null,
															"refs" : [ ]
														},
														"interlineSettlementValue" : null
													},
													"price" : [ {
														"total" : {
															"value" : 0,
															"taxable" : true,
															"code" : null
														},
														"refundableValue" : null,
														"details" : null,
														"taxes" : null,
														"fees" : null,
														"passengerReferences" : [ {
															"pricedInd" : null,
															"refs" : [ ],
															"objectKey" : "SH1",
															"ptc" : {
																"value" : "ADT",
																"quantity" : 1
															},
															"residenceCode" : null,
															"passengerAssociation" : null,
															"age" : null,
															"citizenshipCountryCode" : null
														} ],
														"refs" : [ ]
													} ],
													"bookingInstructions" : null,
													"validatingCarrier" : null,
													"associations" : [ {
														"traveler" : {
															"allTravelerInd" : null,
															"travelerReferences" : [ {
																"pricedInd" : null,
																"refs" : [ ],
																"objectKey" : "SH1",
																"ptc" : {
																	"value" : "ADT",
																	"quantity" : 1
																},
																"residenceCode" : null,
																"passengerAssociation" : null,
																"age" : null,
																"citizenshipCountryCode" : null
															} ]
														},
														"flight" : {
															"allFlightInd" : null,
															"allOriginDestinationInd" : null,
															"allSegmentInd" : null,
															"originDestinationReferencesOrSegmentReferences" : [ {
																"value" : [ {
																	"departure" : {
																		"airportCode" : {
																			"value" : "ARN",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3803",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : "PT2H10M",
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG1",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																}, {
																	"departure" : {
																		"airportCode" : {
																			"value" : "FRA",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"airportName" : "Frankfurt International",
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"arrival" : {
																		"airportCode" : {
																			"value" : "LHR",
																			"application" : null,
																			"area" : null,
																			"uom" : null
																		},
																		"date" : "2015-12-24T21:00:00.000+0000",
																		"time" : null,
																		"changeOfDay" : null,
																		"airportName" : null,
																		"terminal" : null,
																		"refs" : [ ]
																	},
																	"marketingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ]
																	},
																	"operatingCarrier" : {
																		"airlineID" : {
																			"value" : "9A",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"name" : "Athena Air",
																		"flightNumber" : {
																			"value" : "3916",
																			"operationalSuffix" : null
																		},
																		"resBookDesigCode" : null,
																		"refs" : [ ],
																		"disclosures" : null
																	},
																	"equipment" : {
																		"aircraftCode" : {
																			"value" : "E95",
																			"refs" : [ ],
																			"objectMetaReferences" : [ ]
																		},
																		"changeOfGaugeInd" : null,
																		"refs" : [ ],
																		"name" : "E95 - EMBRAER 195 JET",
																		"airlineEquipCode" : null
																	},
																	"classOfService" : null,
																	"flightDetail" : {
																		"flightSegmentType" : null,
																		"flightDistance" : null,
																		"flightDuration" : {
																			"value" : null,
																			"application" : null,
																			"refs" : [ ]
																		},
																		"stops" : null,
																		"resDateTime" : null,
																		"tourOperatorFlightID" : null,
																		"refs" : [ ]
																	},
																	"onTimePerformance" : null,
																	"settlement" : null,
																	"segmentKey" : "SEG2",
																	"connectInd" : null,
																	"electronicTicketInd" : null,
																	"ticketlessInd" : null,
																	"secureFlight" : null,
																	"refs" : [ ]
																} ],
																"onPoint" : null,
																"offPoint" : null
															} ]
														},
														"offer" : [ ],
														"otherAssociations" : [ ],
														"seatReference" : null
													} ],
													"baggageDeterminingCarrier" : null,
													"objectKey" : "SV3",
													"refs" : [ ],
													"detail" : null,
													"bdcanalysisResult" : null
												},
												"nil" : false,
												"globalScope" : true,
												"typeSubstituted" : true
											} ],
											"serviceID" : [ ]
										},
										"selection" : {
											"minimumQuantityOrMaximumQuantity" : [ {
												"name" : "{http://www.iata.org/IATA/EDIST}MaximumQuantity",
												"declaredType" : "java.math.BigInteger",
												"scope" : "org.iata.iata.edist.ServiceBundle$Selection",
												"value" : 2,
												"nil" : false,
												"globalScope" : false,
												"typeSubstituted" : false
											} ]
										},
										"bundleID" : {
											"value" : "B1004",
											"refs" : [ ],
											"objectKey" : null
										},
										"price" : [ {
											"total" : {
												"value" : 5000,
												"taxable" : true,
												"code" : null
											},
											"refundableValue" : null,
											"details" : null,
											"taxes" : null,
											"fees" : null,
											"passengerReferences" : [ {
												"pricedInd" : null,
												"refs" : [ ],
												"objectKey" : "SH1",
												"ptc" : {
													"value" : "ADT",
													"quantity" : 1
												},
												"residenceCode" : null,
												"passengerAssociation" : null,
												"age" : null,
												"citizenshipCountryCode" : null
											} ],
											"refs" : [ ]
										} ],
										"bundleName" : null,
										"refs" : [ ],
										"listKey" : "SB1"
									},
									"serviceReferences" : [ ]
								},
								"otherAssociation" : [ ]
							} ]
						},
						"fareDetail" : {
							"fareIndicatorCode" : null,
							"fareComponent" : [ {
								"parameters" : null,
								"segmentReference" : null,
								"priceBreakdown" : null,
								"fareBasis" : {
									"fareBasisCode" : {
										"displayAllInd" : null,
										"allExemptInd" : null,
										"pricingInd" : null,
										"connectionInd" : null,
										"ticketlessInd" : null,
										"associateInd" : null,
										"taxOnEMDInd" : null,
										"stopOverInd" : null,
										"taxInd" : null,
										"otherChargeInd" : null,
										"poolingInd" : null,
										"specialItemsInd" : null,
										"taxesInd" : null,
										"netFareInd" : null,
										"reissueOnlyInd" : null,
										"autoExchangeInd" : null,
										"alertInd" : null,
										"authenticationInd" : null,
										"marketingInd" : null,
										"multiPayFormInd" : null,
										"noticeInd" : null,
										"partialInd" : null,
										"warningInd" : null,
										"failedPaymentInd" : null,
										"partialPaymentInd" : null,
										"verificationInd" : null,
										"priceVarianceInd" : null,
										"invGuaranteedInd" : null,
										"waitlistInd" : null,
										"bundleInd" : null,
										"invGuarRequestedInd" : null,
										"exitRowInd" : null,
										"premiumInd" : null,
										"upperDeckInd" : null,
										"taxIncludedInd" : null,
										"feeIncludedInd" : null,
										"leadPricingInd" : null,
										"timestamp" : null,
										"metadataToken" : null,
										"refs" : [ ],
										"objectKey" : null,
										"code" : "EFO",
										"application" : null,
										"eticketInd" : null
									},
									"fareRulesRemarks" : [ ],
									"fareBasisCityPair" : null,
									"rbd" : null
								},
								"ticketDesig" : null,
								"fareRules" : null,
								"refs" : [ ]
							} ],
							"priceClassReference" : null,
							"flightMileage" : null,
							"tourCode" : null,
							"remarks" : null,
							"refs" : [ ]
						},
						"offerItemID" : "1#M#111198795#111162714",
						"modificationProhibitedInd" : null,
						"refs" : [ ]
					} ],
					"associations" : [ {
						"associatedTraveler" : null,
						"applicableFlight" : {
							"allSegmentInd" : null,
							"flightSegmentReference" : [ {
								"cabin" : {
									"cabinDesignator" : {
										"value" : "M",
										"allCabins" : null
									},
									"marketingName" : null,
									"refs" : [ ]
								},
								"classOfService" : null,
								"bagDetailAssociation" : null,
								"marriedSegmentGroup" : null,
								"ref" : {
									"departure" : {
										"airportCode" : {
											"value" : "ARN",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"airportName" : null,
										"terminal" : null,
										"refs" : [ ]
									},
									"arrival" : {
										"airportCode" : {
											"value" : "FRA",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"changeOfDay" : null,
										"airportName" : "Frankfurt International",
										"terminal" : null,
										"refs" : [ ]
									},
									"marketingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3803",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ]
									},
									"operatingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3803",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ],
										"disclosures" : null
									},
									"equipment" : {
										"aircraftCode" : {
											"value" : "E95",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"changeOfGaugeInd" : null,
										"refs" : [ ],
										"name" : "E95 - EMBRAER 195 JET",
										"airlineEquipCode" : null
									},
									"classOfService" : null,
									"flightDetail" : {
										"flightSegmentType" : null,
										"flightDistance" : null,
										"flightDuration" : {
											"value" : "PT2H10M",
											"application" : null,
											"refs" : [ ]
										},
										"stops" : null,
										"resDateTime" : null,
										"tourOperatorFlightID" : null,
										"refs" : [ ]
									},
									"onTimePerformance" : null,
									"settlement" : null,
									"segmentKey" : "SEG1",
									"connectInd" : null,
									"electronicTicketInd" : null,
									"ticketlessInd" : null,
									"secureFlight" : null,
									"refs" : [ ]
								}
							}, {
								"cabin" : {
									"cabinDesignator" : {
										"value" : "M",
										"allCabins" : null
									},
									"marketingName" : null,
									"refs" : [ ]
								},
								"classOfService" : null,
								"bagDetailAssociation" : null,
								"marriedSegmentGroup" : null,
								"ref" : {
									"departure" : {
										"airportCode" : {
											"value" : "FRA",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"airportName" : "Frankfurt International",
										"terminal" : null,
										"refs" : [ ]
									},
									"arrival" : {
										"airportCode" : {
											"value" : "LHR",
											"application" : null,
											"area" : null,
											"uom" : null
										},
										"date" : "2015-12-24T21:00:00.000+0000",
										"time" : null,
										"changeOfDay" : null,
										"airportName" : null,
										"terminal" : null,
										"refs" : [ ]
									},
									"marketingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3916",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ]
									},
									"operatingCarrier" : {
										"airlineID" : {
											"value" : "9A",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"name" : "Athena Air",
										"flightNumber" : {
											"value" : "3916",
											"operationalSuffix" : null
										},
										"resBookDesigCode" : null,
										"refs" : [ ],
										"disclosures" : null
									},
									"equipment" : {
										"aircraftCode" : {
											"value" : "E95",
											"refs" : [ ],
											"objectMetaReferences" : [ ]
										},
										"changeOfGaugeInd" : null,
										"refs" : [ ],
										"name" : "E95 - EMBRAER 195 JET",
										"airlineEquipCode" : null
									},
									"classOfService" : null,
									"flightDetail" : {
										"flightSegmentType" : null,
										"flightDistance" : null,
										"flightDuration" : {
											"value" : null,
											"application" : null,
											"refs" : [ ]
										},
										"stops" : null,
										"resDateTime" : null,
										"tourOperatorFlightID" : null,
										"refs" : [ ]
									},
									"onTimePerformance" : null,
									"settlement" : null,
									"segmentKey" : "SEG2",
									"connectInd" : null,
									"electronicTicketInd" : null,
									"ticketlessInd" : null,
									"secureFlight" : null,
									"refs" : [ ]
								}
							} ],
							"allOriginDestinationInd" : null,
							"originDestinationReferences" : [ {
								"departureCode" : {
									"value" : "ARN",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"arrivalCode" : {
									"value" : "LHR",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"originDestinationKey" : "OD1",
								"refs" : [ ],
								"totalJourney" : null,
								"flightReferences" : {
									"value" : [ {
										"journey" : {
											"time" : "PT3H15M",
											"distance" : null,
											"refs" : [ ]
										},
										"segmentReferences" : {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										},
										"settlement" : null,
										"flightKey" : "FL1",
										"refs" : [ ]
									} ],
									"onPoint" : null,
									"offPoint" : null
								},
								"checkedBag" : null,
								"carryOnBag" : null
							} ],
							"allFlightInd" : null,
							"flightReferences" : {
								"value" : [ {
									"journey" : {
										"time" : "PT3H15M",
										"distance" : null,
										"refs" : [ ]
									},
									"segmentReferences" : {
										"value" : [ {
											"departure" : {
												"airportCode" : {
													"value" : "ARN",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"airportName" : null,
												"terminal" : null,
												"refs" : [ ]
											},
											"arrival" : {
												"airportCode" : {
													"value" : "FRA",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"changeOfDay" : null,
												"airportName" : "Frankfurt International",
												"terminal" : null,
												"refs" : [ ]
											},
											"marketingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3803",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ]
											},
											"operatingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3803",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ],
												"disclosures" : null
											},
											"equipment" : {
												"aircraftCode" : {
													"value" : "E95",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"changeOfGaugeInd" : null,
												"refs" : [ ],
												"name" : "E95 - EMBRAER 195 JET",
												"airlineEquipCode" : null
											},
											"classOfService" : null,
											"flightDetail" : {
												"flightSegmentType" : null,
												"flightDistance" : null,
												"flightDuration" : {
													"value" : "PT2H10M",
													"application" : null,
													"refs" : [ ]
												},
												"stops" : null,
												"resDateTime" : null,
												"tourOperatorFlightID" : null,
												"refs" : [ ]
											},
											"onTimePerformance" : null,
											"settlement" : null,
											"segmentKey" : "SEG1",
											"connectInd" : null,
											"electronicTicketInd" : null,
											"ticketlessInd" : null,
											"secureFlight" : null,
											"refs" : [ ]
										}, {
											"departure" : {
												"airportCode" : {
													"value" : "FRA",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"airportName" : "Frankfurt International",
												"terminal" : null,
												"refs" : [ ]
											},
											"arrival" : {
												"airportCode" : {
													"value" : "LHR",
													"application" : null,
													"area" : null,
													"uom" : null
												},
												"date" : "2015-12-24T21:00:00.000+0000",
												"time" : null,
												"changeOfDay" : null,
												"airportName" : null,
												"terminal" : null,
												"refs" : [ ]
											},
											"marketingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3916",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ]
											},
											"operatingCarrier" : {
												"airlineID" : {
													"value" : "9A",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"name" : "Athena Air",
												"flightNumber" : {
													"value" : "3916",
													"operationalSuffix" : null
												},
												"resBookDesigCode" : null,
												"refs" : [ ],
												"disclosures" : null
											},
											"equipment" : {
												"aircraftCode" : {
													"value" : "E95",
													"refs" : [ ],
													"objectMetaReferences" : [ ]
												},
												"changeOfGaugeInd" : null,
												"refs" : [ ],
												"name" : "E95 - EMBRAER 195 JET",
												"airlineEquipCode" : null
											},
											"classOfService" : null,
											"flightDetail" : {
												"flightSegmentType" : null,
												"flightDistance" : null,
												"flightDuration" : {
													"value" : null,
													"application" : null,
													"refs" : [ ]
												},
												"stops" : null,
												"resDateTime" : null,
												"tourOperatorFlightID" : null,
												"refs" : [ ]
											},
											"onTimePerformance" : null,
											"settlement" : null,
											"segmentKey" : "SEG2",
											"connectInd" : null,
											"electronicTicketInd" : null,
											"ticketlessInd" : null,
											"secureFlight" : null,
											"refs" : [ ]
										} ],
										"onPoint" : null,
										"offPoint" : null
									},
									"settlement" : null,
									"flightKey" : "FL1",
									"refs" : [ ]
								} ],
								"onPoint" : null,
								"offPoint" : null
							}
						},
						"priceClass" : {
							"priceClassReference" : {
								"name" : "M-EFO",
								"code" : "M",
								"descriptions" : [ ],
								"fareBasisCode" : {
									"displayAllInd" : null,
									"allExemptInd" : null,
									"pricingInd" : null,
									"connectionInd" : null,
									"ticketlessInd" : null,
									"associateInd" : null,
									"taxOnEMDInd" : null,
									"stopOverInd" : null,
									"taxInd" : null,
									"otherChargeInd" : null,
									"poolingInd" : null,
									"specialItemsInd" : null,
									"taxesInd" : null,
									"netFareInd" : null,
									"reissueOnlyInd" : null,
									"autoExchangeInd" : null,
									"alertInd" : null,
									"authenticationInd" : null,
									"marketingInd" : null,
									"multiPayFormInd" : null,
									"noticeInd" : null,
									"partialInd" : null,
									"warningInd" : null,
									"failedPaymentInd" : null,
									"partialPaymentInd" : null,
									"verificationInd" : null,
									"priceVarianceInd" : null,
									"invGuaranteedInd" : null,
									"waitlistInd" : null,
									"bundleInd" : null,
									"invGuarRequestedInd" : null,
									"exitRowInd" : null,
									"premiumInd" : null,
									"upperDeckInd" : null,
									"taxIncludedInd" : null,
									"feeIncludedInd" : null,
									"leadPricingInd" : null,
									"timestamp" : null,
									"metadataToken" : null,
									"refs" : [ ],
									"objectKey" : null,
									"code" : "EFO",
									"application" : null,
									"eticketInd" : null
								},
								"classOfService" : [ ],
								"associations" : [ ],
								"displayOrder" : null,
								"objectKey" : "PC3",
								"refs" : [ ]
							}
						},
						"offerDetailAssociation" : null,
						"includedService" : {
							"bundleReference" : null,
							"serviceReferences" : [ {
								"serviceID" : {
									"value" : "1022",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Advance Seat selection"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "A convenient option that lets you reserve your preferred seat",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "preferred_seat.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV1",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							}, {
								"serviceID" : {
									"value" : "1021",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Meal"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "Vegetarian Vegan Meal",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "int_economy_promo.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 0,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV3",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							} ]
						},
						"associatedService" : {
							"bundleReference" : null,
							"serviceReferences" : [ {
								"serviceID" : {
									"value" : "1023",
									"owner" : "9A",
									"refs" : [ ],
									"objectKey" : null
								},
								"name" : {
									"value" : "Inflight entertainment"
								},
								"encoding" : {
									"rfic" : null,
									"type" : null,
									"code" : null,
									"subCode" : null,
									"refs" : [ ]
								},
								"timeLimits" : null,
								"feeMethod" : {
									"value" : "OC"
								},
								"descriptions" : {
									"description" : [ {
										"text" : {
											"value" : "The latest blockbusters, classics from film history, music and games",
											"refs" : [ ]
										},
										"markupStyle" : null,
										"link" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
										"media" : [ {
											"objectID" : {
												"value" : "comfort-eco-int-1_title.jpg",
												"owner" : null,
												"refs" : [ ]
											},
											"mediaLink" : null,
											"attachmentID" : null
										}, {
											"objectID" : null,
											"mediaLink" : {
												"value" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"attachmentID" : null
										} ],
										"objectKey" : null,
										"refs" : [ ],
										"application" : null
									} ],
									"refs" : [ ]
								},
								"settlement" : {
									"method" : {
										"code" : "AD",
										"definition" : "Internal Airline Document",
										"tableName" : null,
										"link" : null,
										"refs" : [ ]
									},
									"interlineSettlementValue" : null
								},
								"price" : [ {
									"total" : {
										"value" : 500,
										"taxable" : true,
										"code" : null
									},
									"refundableValue" : null,
									"details" : null,
									"taxes" : null,
									"fees" : null,
									"passengerReferences" : [ {
										"pricedInd" : null,
										"refs" : [ ],
										"objectKey" : "SH1",
										"ptc" : {
											"value" : "ADT",
											"quantity" : 1
										},
										"residenceCode" : null,
										"passengerAssociation" : null,
										"age" : null,
										"citizenshipCountryCode" : null
									} ],
									"refs" : [ ]
								} ],
								"bookingInstructions" : null,
								"validatingCarrier" : null,
								"associations" : [ {
									"traveler" : {
										"allTravelerInd" : null,
										"travelerReferences" : [ {
											"pricedInd" : null,
											"refs" : [ ],
											"objectKey" : "SH1",
											"ptc" : {
												"value" : "ADT",
												"quantity" : 1
											},
											"residenceCode" : null,
											"passengerAssociation" : null,
											"age" : null,
											"citizenshipCountryCode" : null
										} ]
									},
									"flight" : {
										"allFlightInd" : null,
										"allOriginDestinationInd" : null,
										"allSegmentInd" : null,
										"originDestinationReferencesOrSegmentReferences" : [ {
											"value" : [ {
												"departure" : {
													"airportCode" : {
														"value" : "ARN",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3803",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : "PT2H10M",
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG1",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											}, {
												"departure" : {
													"airportCode" : {
														"value" : "FRA",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"airportName" : "Frankfurt International",
													"terminal" : null,
													"refs" : [ ]
												},
												"arrival" : {
													"airportCode" : {
														"value" : "LHR",
														"application" : null,
														"area" : null,
														"uom" : null
													},
													"date" : "2015-12-24T21:00:00.000+0000",
													"time" : null,
													"changeOfDay" : null,
													"airportName" : null,
													"terminal" : null,
													"refs" : [ ]
												},
												"marketingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ]
												},
												"operatingCarrier" : {
													"airlineID" : {
														"value" : "9A",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"name" : "Athena Air",
													"flightNumber" : {
														"value" : "3916",
														"operationalSuffix" : null
													},
													"resBookDesigCode" : null,
													"refs" : [ ],
													"disclosures" : null
												},
												"equipment" : {
													"aircraftCode" : {
														"value" : "E95",
														"refs" : [ ],
														"objectMetaReferences" : [ ]
													},
													"changeOfGaugeInd" : null,
													"refs" : [ ],
													"name" : "E95 - EMBRAER 195 JET",
													"airlineEquipCode" : null
												},
												"classOfService" : null,
												"flightDetail" : {
													"flightSegmentType" : null,
													"flightDistance" : null,
													"flightDuration" : {
														"value" : null,
														"application" : null,
														"refs" : [ ]
													},
													"stops" : null,
													"resDateTime" : null,
													"tourOperatorFlightID" : null,
													"refs" : [ ]
												},
												"onTimePerformance" : null,
												"settlement" : null,
												"segmentKey" : "SEG2",
												"connectInd" : null,
												"electronicTicketInd" : null,
												"ticketlessInd" : null,
												"secureFlight" : null,
												"refs" : [ ]
											} ],
											"onPoint" : null,
											"offPoint" : null
										} ]
									},
									"offer" : [ ],
									"otherAssociations" : [ ],
									"seatReference" : null
								} ],
								"baggageDeterminingCarrier" : null,
								"objectKey" : "SV2",
								"refs" : [ ],
								"detail" : null,
								"bdcanalysisResult" : null
							} ]
						},
						"otherAssociation" : [ ]
					} ]
				}
			} ],
			"priceCalendar" : [ ]
		} ]
	},
	"payments" : [ ],
	"promotions" : [ ],
	"commission" : null,
	"dataLists" : {
		"anonymousTravelerList" : [ {
			"pricedInd" : null,
			"refs" : [ ],
			"objectKey" : "SH1",
			"ptc" : {
				"value" : "ADT",
				"quantity" : 1
			},
			"residenceCode" : null,
			"passengerAssociation" : null,
			"age" : null,
			"citizenshipCountryCode" : null
		} ],
		"recognizedTravelerList" : [ ],
		"bagDisclosureList" : [ ],
		"carryOnAllowanceList" : [ ],
		"checkedBagAllowanceList" : [ ],
		"classOfServiceList" : [ ],
		"contentSourceList" : [ ],
		"descriptionList" : null,
		"disclosureList" : [ ],
		"fareList" : [ ],
		"flightSegmentList" : [ {
			"departure" : {
				"airportCode" : {
					"value" : "ARN",
					"application" : null,
					"area" : null,
					"uom" : null
				},
				"date" : "2015-12-24T21:00:00.000+0000",
				"time" : null,
				"airportName" : null,
				"terminal" : null,
				"refs" : [ ]
			},
			"arrival" : {
				"airportCode" : {
					"value" : "FRA",
					"application" : null,
					"area" : null,
					"uom" : null
				},
				"date" : "2015-12-24T21:00:00.000+0000",
				"time" : null,
				"changeOfDay" : null,
				"airportName" : "Frankfurt International",
				"terminal" : null,
				"refs" : [ ]
			},
			"marketingCarrier" : {
				"airlineID" : {
					"value" : "9A",
					"refs" : [ ],
					"objectMetaReferences" : [ ]
				},
				"name" : "Athena Air",
				"flightNumber" : {
					"value" : "3803",
					"operationalSuffix" : null
				},
				"resBookDesigCode" : null,
				"refs" : [ ]
			},
			"operatingCarrier" : {
				"airlineID" : {
					"value" : "9A",
					"refs" : [ ],
					"objectMetaReferences" : [ ]
				},
				"name" : "Athena Air",
				"flightNumber" : {
					"value" : "3803",
					"operationalSuffix" : null
				},
				"resBookDesigCode" : null,
				"refs" : [ ],
				"disclosures" : null
			},
			"equipment" : {
				"aircraftCode" : {
					"value" : "E95",
					"refs" : [ ],
					"objectMetaReferences" : [ ]
				},
				"changeOfGaugeInd" : null,
				"refs" : [ ],
				"name" : "E95 - EMBRAER 195 JET",
				"airlineEquipCode" : null
			},
			"classOfService" : null,
			"flightDetail" : {
				"flightSegmentType" : null,
				"flightDistance" : null,
				"flightDuration" : {
					"value" : "PT2H10M",
					"application" : null,
					"refs" : [ ]
				},
				"stops" : null,
				"resDateTime" : null,
				"tourOperatorFlightID" : null,
				"refs" : [ ]
			},
			"onTimePerformance" : null,
			"settlement" : null,
			"segmentKey" : "SEG1",
			"connectInd" : null,
			"electronicTicketInd" : null,
			"ticketlessInd" : null,
			"secureFlight" : null,
			"refs" : [ ]
		}, {
			"departure" : {
				"airportCode" : {
					"value" : "FRA",
					"application" : null,
					"area" : null,
					"uom" : null
				},
				"date" : "2015-12-24T21:00:00.000+0000",
				"time" : null,
				"airportName" : "Frankfurt International",
				"terminal" : null,
				"refs" : [ ]
			},
			"arrival" : {
				"airportCode" : {
					"value" : "LHR",
					"application" : null,
					"area" : null,
					"uom" : null
				},
				"date" : "2015-12-24T21:00:00.000+0000",
				"time" : null,
				"changeOfDay" : null,
				"airportName" : null,
				"terminal" : null,
				"refs" : [ ]
			},
			"marketingCarrier" : {
				"airlineID" : {
					"value" : "9A",
					"refs" : [ ],
					"objectMetaReferences" : [ ]
				},
				"name" : "Athena Air",
				"flightNumber" : {
					"value" : "3916",
					"operationalSuffix" : null
				},
				"resBookDesigCode" : null,
				"refs" : [ ]
			},
			"operatingCarrier" : {
				"airlineID" : {
					"value" : "9A",
					"refs" : [ ],
					"objectMetaReferences" : [ ]
				},
				"name" : "Athena Air",
				"flightNumber" : {
					"value" : "3916",
					"operationalSuffix" : null
				},
				"resBookDesigCode" : null,
				"refs" : [ ],
				"disclosures" : null
			},
			"equipment" : {
				"aircraftCode" : {
					"value" : "E95",
					"refs" : [ ],
					"objectMetaReferences" : [ ]
				},
				"changeOfGaugeInd" : null,
				"refs" : [ ],
				"name" : "E95 - EMBRAER 195 JET",
				"airlineEquipCode" : null
			},
			"classOfService" : null,
			"flightDetail" : {
				"flightSegmentType" : null,
				"flightDistance" : null,
				"flightDuration" : {
					"value" : null,
					"application" : null,
					"refs" : [ ]
				},
				"stops" : null,
				"resDateTime" : null,
				"tourOperatorFlightID" : null,
				"refs" : [ ]
			},
			"onTimePerformance" : null,
			"settlement" : null,
			"segmentKey" : "SEG2",
			"connectInd" : null,
			"electronicTicketInd" : null,
			"ticketlessInd" : null,
			"secureFlight" : null,
			"refs" : [ ]
		} ],
		"flightList" : [ {
			"journey" : {
				"time" : "PT3H15M",
				"distance" : null,
				"refs" : [ ]
			},
			"segmentReferences" : {
				"value" : [ {
					"departure" : {
						"airportCode" : {
							"value" : "ARN",
							"application" : null,
							"area" : null,
							"uom" : null
						},
						"date" : "2015-12-24T21:00:00.000+0000",
						"time" : null,
						"airportName" : null,
						"terminal" : null,
						"refs" : [ ]
					},
					"arrival" : {
						"airportCode" : {
							"value" : "FRA",
							"application" : null,
							"area" : null,
							"uom" : null
						},
						"date" : "2015-12-24T21:00:00.000+0000",
						"time" : null,
						"changeOfDay" : null,
						"airportName" : "Frankfurt International",
						"terminal" : null,
						"refs" : [ ]
					},
					"marketingCarrier" : {
						"airlineID" : {
							"value" : "9A",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"name" : "Athena Air",
						"flightNumber" : {
							"value" : "3803",
							"operationalSuffix" : null
						},
						"resBookDesigCode" : null,
						"refs" : [ ]
					},
					"operatingCarrier" : {
						"airlineID" : {
							"value" : "9A",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"name" : "Athena Air",
						"flightNumber" : {
							"value" : "3803",
							"operationalSuffix" : null
						},
						"resBookDesigCode" : null,
						"refs" : [ ],
						"disclosures" : null
					},
					"equipment" : {
						"aircraftCode" : {
							"value" : "E95",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"changeOfGaugeInd" : null,
						"refs" : [ ],
						"name" : "E95 - EMBRAER 195 JET",
						"airlineEquipCode" : null
					},
					"classOfService" : null,
					"flightDetail" : {
						"flightSegmentType" : null,
						"flightDistance" : null,
						"flightDuration" : {
							"value" : "PT2H10M",
							"application" : null,
							"refs" : [ ]
						},
						"stops" : null,
						"resDateTime" : null,
						"tourOperatorFlightID" : null,
						"refs" : [ ]
					},
					"onTimePerformance" : null,
					"settlement" : null,
					"segmentKey" : "SEG1",
					"connectInd" : null,
					"electronicTicketInd" : null,
					"ticketlessInd" : null,
					"secureFlight" : null,
					"refs" : [ ]
				}, {
					"departure" : {
						"airportCode" : {
							"value" : "FRA",
							"application" : null,
							"area" : null,
							"uom" : null
						},
						"date" : "2015-12-24T21:00:00.000+0000",
						"time" : null,
						"airportName" : "Frankfurt International",
						"terminal" : null,
						"refs" : [ ]
					},
					"arrival" : {
						"airportCode" : {
							"value" : "LHR",
							"application" : null,
							"area" : null,
							"uom" : null
						},
						"date" : "2015-12-24T21:00:00.000+0000",
						"time" : null,
						"changeOfDay" : null,
						"airportName" : null,
						"terminal" : null,
						"refs" : [ ]
					},
					"marketingCarrier" : {
						"airlineID" : {
							"value" : "9A",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"name" : "Athena Air",
						"flightNumber" : {
							"value" : "3916",
							"operationalSuffix" : null
						},
						"resBookDesigCode" : null,
						"refs" : [ ]
					},
					"operatingCarrier" : {
						"airlineID" : {
							"value" : "9A",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"name" : "Athena Air",
						"flightNumber" : {
							"value" : "3916",
							"operationalSuffix" : null
						},
						"resBookDesigCode" : null,
						"refs" : [ ],
						"disclosures" : null
					},
					"equipment" : {
						"aircraftCode" : {
							"value" : "E95",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"changeOfGaugeInd" : null,
						"refs" : [ ],
						"name" : "E95 - EMBRAER 195 JET",
						"airlineEquipCode" : null
					},
					"classOfService" : null,
					"flightDetail" : {
						"flightSegmentType" : null,
						"flightDistance" : null,
						"flightDuration" : {
							"value" : null,
							"application" : null,
							"refs" : [ ]
						},
						"stops" : null,
						"resDateTime" : null,
						"tourOperatorFlightID" : null,
						"refs" : [ ]
					},
					"onTimePerformance" : null,
					"settlement" : null,
					"segmentKey" : "SEG2",
					"connectInd" : null,
					"electronicTicketInd" : null,
					"ticketlessInd" : null,
					"secureFlight" : null,
					"refs" : [ ]
				} ],
				"onPoint" : null,
				"offPoint" : null
			},
			"settlement" : null,
			"flightKey" : "FL1",
			"refs" : [ ]
		} ],
		"originDestinationList" : [ {
			"departureCode" : {
				"value" : "ARN",
				"application" : null,
				"area" : null,
				"uom" : null
			},
			"arrivalCode" : {
				"value" : "LHR",
				"application" : null,
				"area" : null,
				"uom" : null
			},
			"originDestinationKey" : "OD1",
			"refs" : [ ],
			"totalJourney" : null,
			"flightReferences" : {
				"value" : [ {
					"journey" : {
						"time" : "PT3H15M",
						"distance" : null,
						"refs" : [ ]
					},
					"segmentReferences" : {
						"value" : [ {
							"departure" : {
								"airportCode" : {
									"value" : "ARN",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"airportName" : null,
								"terminal" : null,
								"refs" : [ ]
							},
							"arrival" : {
								"airportCode" : {
									"value" : "FRA",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"changeOfDay" : null,
								"airportName" : "Frankfurt International",
								"terminal" : null,
								"refs" : [ ]
							},
							"marketingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3803",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ]
							},
							"operatingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3803",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ],
								"disclosures" : null
							},
							"equipment" : {
								"aircraftCode" : {
									"value" : "E95",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"changeOfGaugeInd" : null,
								"refs" : [ ],
								"name" : "E95 - EMBRAER 195 JET",
								"airlineEquipCode" : null
							},
							"classOfService" : null,
							"flightDetail" : {
								"flightSegmentType" : null,
								"flightDistance" : null,
								"flightDuration" : {
									"value" : "PT2H10M",
									"application" : null,
									"refs" : [ ]
								},
								"stops" : null,
								"resDateTime" : null,
								"tourOperatorFlightID" : null,
								"refs" : [ ]
							},
							"onTimePerformance" : null,
							"settlement" : null,
							"segmentKey" : "SEG1",
							"connectInd" : null,
							"electronicTicketInd" : null,
							"ticketlessInd" : null,
							"secureFlight" : null,
							"refs" : [ ]
						}, {
							"departure" : {
								"airportCode" : {
									"value" : "FRA",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"airportName" : "Frankfurt International",
								"terminal" : null,
								"refs" : [ ]
							},
							"arrival" : {
								"airportCode" : {
									"value" : "LHR",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"changeOfDay" : null,
								"airportName" : null,
								"terminal" : null,
								"refs" : [ ]
							},
							"marketingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3916",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ]
							},
							"operatingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3916",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ],
								"disclosures" : null
							},
							"equipment" : {
								"aircraftCode" : {
									"value" : "E95",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"changeOfGaugeInd" : null,
								"refs" : [ ],
								"name" : "E95 - EMBRAER 195 JET",
								"airlineEquipCode" : null
							},
							"classOfService" : null,
							"flightDetail" : {
								"flightSegmentType" : null,
								"flightDistance" : null,
								"flightDuration" : {
									"value" : null,
									"application" : null,
									"refs" : [ ]
								},
								"stops" : null,
								"resDateTime" : null,
								"tourOperatorFlightID" : null,
								"refs" : [ ]
							},
							"onTimePerformance" : null,
							"settlement" : null,
							"segmentKey" : "SEG2",
							"connectInd" : null,
							"electronicTicketInd" : null,
							"ticketlessInd" : null,
							"secureFlight" : null,
							"refs" : [ ]
						} ],
						"onPoint" : null,
						"offPoint" : null
					},
					"settlement" : null,
					"flightKey" : "FL1",
					"refs" : [ ]
				} ],
				"onPoint" : null,
				"offPoint" : null
			},
			"checkedBag" : null,
			"carryOnBag" : null
		} ],
		"instructionsList" : [ ],
		"mediaList" : [ ],
		"penaltyList" : [ ],
		"priceClassList" : [ {
			"name" : "M-ESO",
			"code" : "M",
			"descriptions" : [ ],
			"fareBasisCode" : {
				"displayAllInd" : null,
				"allExemptInd" : null,
				"pricingInd" : null,
				"connectionInd" : null,
				"ticketlessInd" : null,
				"associateInd" : null,
				"taxOnEMDInd" : null,
				"stopOverInd" : null,
				"taxInd" : null,
				"otherChargeInd" : null,
				"poolingInd" : null,
				"specialItemsInd" : null,
				"taxesInd" : null,
				"netFareInd" : null,
				"reissueOnlyInd" : null,
				"autoExchangeInd" : null,
				"alertInd" : null,
				"authenticationInd" : null,
				"marketingInd" : null,
				"multiPayFormInd" : null,
				"noticeInd" : null,
				"partialInd" : null,
				"warningInd" : null,
				"failedPaymentInd" : null,
				"partialPaymentInd" : null,
				"verificationInd" : null,
				"priceVarianceInd" : null,
				"invGuaranteedInd" : null,
				"waitlistInd" : null,
				"bundleInd" : null,
				"invGuarRequestedInd" : null,
				"exitRowInd" : null,
				"premiumInd" : null,
				"upperDeckInd" : null,
				"taxIncludedInd" : null,
				"feeIncludedInd" : null,
				"leadPricingInd" : null,
				"timestamp" : null,
				"metadataToken" : null,
				"refs" : [ ],
				"objectKey" : null,
				"code" : "ESO",
				"application" : null,
				"eticketInd" : null
			},
			"classOfService" : [ ],
			"associations" : [ ],
			"displayOrder" : null,
			"objectKey" : "PC1",
			"refs" : [ ]
		}, {
			"name" : "M-ERO",
			"code" : "M",
			"descriptions" : [ ],
			"fareBasisCode" : {
				"displayAllInd" : null,
				"allExemptInd" : null,
				"pricingInd" : null,
				"connectionInd" : null,
				"ticketlessInd" : null,
				"associateInd" : null,
				"taxOnEMDInd" : null,
				"stopOverInd" : null,
				"taxInd" : null,
				"otherChargeInd" : null,
				"poolingInd" : null,
				"specialItemsInd" : null,
				"taxesInd" : null,
				"netFareInd" : null,
				"reissueOnlyInd" : null,
				"autoExchangeInd" : null,
				"alertInd" : null,
				"authenticationInd" : null,
				"marketingInd" : null,
				"multiPayFormInd" : null,
				"noticeInd" : null,
				"partialInd" : null,
				"warningInd" : null,
				"failedPaymentInd" : null,
				"partialPaymentInd" : null,
				"verificationInd" : null,
				"priceVarianceInd" : null,
				"invGuaranteedInd" : null,
				"waitlistInd" : null,
				"bundleInd" : null,
				"invGuarRequestedInd" : null,
				"exitRowInd" : null,
				"premiumInd" : null,
				"upperDeckInd" : null,
				"taxIncludedInd" : null,
				"feeIncludedInd" : null,
				"leadPricingInd" : null,
				"timestamp" : null,
				"metadataToken" : null,
				"refs" : [ ],
				"objectKey" : null,
				"code" : "ERO",
				"application" : null,
				"eticketInd" : null
			},
			"classOfService" : [ ],
			"associations" : [ ],
			"displayOrder" : null,
			"objectKey" : "PC2",
			"refs" : [ ]
		}, {
			"name" : "M-EFO",
			"code" : "M",
			"descriptions" : [ ],
			"fareBasisCode" : {
				"displayAllInd" : null,
				"allExemptInd" : null,
				"pricingInd" : null,
				"connectionInd" : null,
				"ticketlessInd" : null,
				"associateInd" : null,
				"taxOnEMDInd" : null,
				"stopOverInd" : null,
				"taxInd" : null,
				"otherChargeInd" : null,
				"poolingInd" : null,
				"specialItemsInd" : null,
				"taxesInd" : null,
				"netFareInd" : null,
				"reissueOnlyInd" : null,
				"autoExchangeInd" : null,
				"alertInd" : null,
				"authenticationInd" : null,
				"marketingInd" : null,
				"multiPayFormInd" : null,
				"noticeInd" : null,
				"partialInd" : null,
				"warningInd" : null,
				"failedPaymentInd" : null,
				"partialPaymentInd" : null,
				"verificationInd" : null,
				"priceVarianceInd" : null,
				"invGuaranteedInd" : null,
				"waitlistInd" : null,
				"bundleInd" : null,
				"invGuarRequestedInd" : null,
				"exitRowInd" : null,
				"premiumInd" : null,
				"upperDeckInd" : null,
				"taxIncludedInd" : null,
				"feeIncludedInd" : null,
				"leadPricingInd" : null,
				"timestamp" : null,
				"metadataToken" : null,
				"refs" : [ ],
				"objectKey" : null,
				"code" : "EFO",
				"application" : null,
				"eticketInd" : null
			},
			"classOfService" : [ ],
			"associations" : [ ],
			"displayOrder" : null,
			"objectKey" : "PC3",
			"refs" : [ ]
		} ],
		"serviceBundleList" : [ {
			"itemCount" : 3,
			"associations" : {
				"serviceReference" : [ {
					"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
					"declaredType" : "java.lang.Object",
					"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
					"value" : {
						"serviceID" : {
							"value" : "1023",
							"owner" : "9A",
							"refs" : [ ],
							"objectKey" : null
						},
						"name" : {
							"value" : "Inflight entertainment"
						},
						"encoding" : {
							"rfic" : null,
							"type" : null,
							"code" : null,
							"subCode" : null,
							"refs" : [ ]
						},
						"timeLimits" : null,
						"feeMethod" : {
							"value" : "OC"
						},
						"descriptions" : {
							"description" : [ {
								"text" : {
									"value" : "The latest blockbusters, classics from film history, music and games",
									"refs" : [ ]
								},
								"markupStyle" : null,
								"link" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
								"media" : [ {
									"objectID" : {
										"value" : "comfort-eco-int-1_title.jpg",
										"owner" : null,
										"refs" : [ ]
									},
									"mediaLink" : null,
									"attachmentID" : null
								}, {
									"objectID" : null,
									"mediaLink" : {
										"value" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
										"refs" : [ ],
										"objectMetaReferences" : [ ]
									},
									"attachmentID" : null
								} ],
								"objectKey" : null,
								"refs" : [ ],
								"application" : null
							} ],
							"refs" : [ ]
						},
						"settlement" : {
							"method" : {
								"code" : "AD",
								"definition" : "Internal Airline Document",
								"tableName" : null,
								"link" : null,
								"refs" : [ ]
							},
							"interlineSettlementValue" : null
						},
						"price" : [ {
							"total" : {
								"value" : 500,
								"taxable" : true,
								"code" : null
							},
							"refundableValue" : null,
							"details" : null,
							"taxes" : null,
							"fees" : null,
							"passengerReferences" : [ {
								"pricedInd" : null,
								"refs" : [ ],
								"objectKey" : "SH1",
								"ptc" : {
									"value" : "ADT",
									"quantity" : 1
								},
								"residenceCode" : null,
								"passengerAssociation" : null,
								"age" : null,
								"citizenshipCountryCode" : null
							} ],
							"refs" : [ ]
						} ],
						"bookingInstructions" : null,
						"validatingCarrier" : null,
						"associations" : [ {
							"traveler" : {
								"allTravelerInd" : null,
								"travelerReferences" : [ {
									"pricedInd" : null,
									"refs" : [ ],
									"objectKey" : "SH1",
									"ptc" : {
										"value" : "ADT",
										"quantity" : 1
									},
									"residenceCode" : null,
									"passengerAssociation" : null,
									"age" : null,
									"citizenshipCountryCode" : null
								} ]
							},
							"flight" : {
								"allFlightInd" : null,
								"allOriginDestinationInd" : null,
								"allSegmentInd" : null,
								"originDestinationReferencesOrSegmentReferences" : [ {
									"value" : [ {
										"departure" : {
											"airportCode" : {
												"value" : "ARN",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"airportName" : null,
											"terminal" : null,
											"refs" : [ ]
										},
										"arrival" : {
											"airportCode" : {
												"value" : "FRA",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"changeOfDay" : null,
											"airportName" : "Frankfurt International",
											"terminal" : null,
											"refs" : [ ]
										},
										"marketingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3803",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ]
										},
										"operatingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3803",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ],
											"disclosures" : null
										},
										"equipment" : {
											"aircraftCode" : {
												"value" : "E95",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"changeOfGaugeInd" : null,
											"refs" : [ ],
											"name" : "E95 - EMBRAER 195 JET",
											"airlineEquipCode" : null
										},
										"classOfService" : null,
										"flightDetail" : {
											"flightSegmentType" : null,
											"flightDistance" : null,
											"flightDuration" : {
												"value" : "PT2H10M",
												"application" : null,
												"refs" : [ ]
											},
											"stops" : null,
											"resDateTime" : null,
											"tourOperatorFlightID" : null,
											"refs" : [ ]
										},
										"onTimePerformance" : null,
										"settlement" : null,
										"segmentKey" : "SEG1",
										"connectInd" : null,
										"electronicTicketInd" : null,
										"ticketlessInd" : null,
										"secureFlight" : null,
										"refs" : [ ]
									}, {
										"departure" : {
											"airportCode" : {
												"value" : "FRA",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"airportName" : "Frankfurt International",
											"terminal" : null,
											"refs" : [ ]
										},
										"arrival" : {
											"airportCode" : {
												"value" : "LHR",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"changeOfDay" : null,
											"airportName" : null,
											"terminal" : null,
											"refs" : [ ]
										},
										"marketingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3916",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ]
										},
										"operatingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3916",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ],
											"disclosures" : null
										},
										"equipment" : {
											"aircraftCode" : {
												"value" : "E95",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"changeOfGaugeInd" : null,
											"refs" : [ ],
											"name" : "E95 - EMBRAER 195 JET",
											"airlineEquipCode" : null
										},
										"classOfService" : null,
										"flightDetail" : {
											"flightSegmentType" : null,
											"flightDistance" : null,
											"flightDuration" : {
												"value" : null,
												"application" : null,
												"refs" : [ ]
											},
											"stops" : null,
											"resDateTime" : null,
											"tourOperatorFlightID" : null,
											"refs" : [ ]
										},
										"onTimePerformance" : null,
										"settlement" : null,
										"segmentKey" : "SEG2",
										"connectInd" : null,
										"electronicTicketInd" : null,
										"ticketlessInd" : null,
										"secureFlight" : null,
										"refs" : [ ]
									} ],
									"onPoint" : null,
									"offPoint" : null
								} ]
							},
							"offer" : [ ],
							"otherAssociations" : [ ],
							"seatReference" : null
						} ],
						"baggageDeterminingCarrier" : null,
						"objectKey" : "SV2",
						"refs" : [ ],
						"detail" : null,
						"bdcanalysisResult" : null
					},
					"nil" : false,
					"globalScope" : true,
					"typeSubstituted" : true
				}, {
					"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
					"declaredType" : "java.lang.Object",
					"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
					"value" : {
						"serviceID" : {
							"value" : "1022",
							"owner" : "9A",
							"refs" : [ ],
							"objectKey" : null
						},
						"name" : {
							"value" : "Advance Seat selection"
						},
						"encoding" : {
							"rfic" : null,
							"type" : null,
							"code" : null,
							"subCode" : null,
							"refs" : [ ]
						},
						"timeLimits" : null,
						"feeMethod" : {
							"value" : "OC"
						},
						"descriptions" : {
							"description" : [ {
								"text" : {
									"value" : "A convenient option that lets you reserve your preferred seat",
									"refs" : [ ]
								},
								"markupStyle" : null,
								"link" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
								"media" : [ {
									"objectID" : {
										"value" : "preferred_seat.jpg",
										"owner" : null,
										"refs" : [ ]
									},
									"mediaLink" : null,
									"attachmentID" : null
								}, {
									"objectID" : null,
									"mediaLink" : {
										"value" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
										"refs" : [ ],
										"objectMetaReferences" : [ ]
									},
									"attachmentID" : null
								} ],
								"objectKey" : null,
								"refs" : [ ],
								"application" : null
							} ],
							"refs" : [ ]
						},
						"settlement" : {
							"method" : {
								"code" : "AD",
								"definition" : "Internal Airline Document",
								"tableName" : null,
								"link" : null,
								"refs" : [ ]
							},
							"interlineSettlementValue" : null
						},
						"price" : [ {
							"total" : {
								"value" : 0,
								"taxable" : true,
								"code" : null
							},
							"refundableValue" : null,
							"details" : null,
							"taxes" : null,
							"fees" : null,
							"passengerReferences" : [ {
								"pricedInd" : null,
								"refs" : [ ],
								"objectKey" : "SH1",
								"ptc" : {
									"value" : "ADT",
									"quantity" : 1
								},
								"residenceCode" : null,
								"passengerAssociation" : null,
								"age" : null,
								"citizenshipCountryCode" : null
							} ],
							"refs" : [ ]
						} ],
						"bookingInstructions" : null,
						"validatingCarrier" : null,
						"associations" : [ {
							"traveler" : {
								"allTravelerInd" : null,
								"travelerReferences" : [ {
									"pricedInd" : null,
									"refs" : [ ],
									"objectKey" : "SH1",
									"ptc" : {
										"value" : "ADT",
										"quantity" : 1
									},
									"residenceCode" : null,
									"passengerAssociation" : null,
									"age" : null,
									"citizenshipCountryCode" : null
								} ]
							},
							"flight" : {
								"allFlightInd" : null,
								"allOriginDestinationInd" : null,
								"allSegmentInd" : null,
								"originDestinationReferencesOrSegmentReferences" : [ {
									"value" : [ {
										"departure" : {
											"airportCode" : {
												"value" : "ARN",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"airportName" : null,
											"terminal" : null,
											"refs" : [ ]
										},
										"arrival" : {
											"airportCode" : {
												"value" : "FRA",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"changeOfDay" : null,
											"airportName" : "Frankfurt International",
											"terminal" : null,
											"refs" : [ ]
										},
										"marketingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3803",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ]
										},
										"operatingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3803",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ],
											"disclosures" : null
										},
										"equipment" : {
											"aircraftCode" : {
												"value" : "E95",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"changeOfGaugeInd" : null,
											"refs" : [ ],
											"name" : "E95 - EMBRAER 195 JET",
											"airlineEquipCode" : null
										},
										"classOfService" : null,
										"flightDetail" : {
											"flightSegmentType" : null,
											"flightDistance" : null,
											"flightDuration" : {
												"value" : "PT2H10M",
												"application" : null,
												"refs" : [ ]
											},
											"stops" : null,
											"resDateTime" : null,
											"tourOperatorFlightID" : null,
											"refs" : [ ]
										},
										"onTimePerformance" : null,
										"settlement" : null,
										"segmentKey" : "SEG1",
										"connectInd" : null,
										"electronicTicketInd" : null,
										"ticketlessInd" : null,
										"secureFlight" : null,
										"refs" : [ ]
									} ],
									"onPoint" : null,
									"offPoint" : null
								} ]
							},
							"offer" : [ ],
							"otherAssociations" : [ ],
							"seatReference" : null
						} ],
						"baggageDeterminingCarrier" : null,
						"objectKey" : "SV1",
						"refs" : [ ],
						"detail" : null,
						"bdcanalysisResult" : null
					},
					"nil" : false,
					"globalScope" : true,
					"typeSubstituted" : true
				}, {
					"name" : "{http://www.iata.org/IATA/EDIST}ServiceReference",
					"declaredType" : "java.lang.Object",
					"scope" : "javax.xml.bind.JAXBElement$GlobalScope",
					"value" : {
						"serviceID" : {
							"value" : "1021",
							"owner" : "9A",
							"refs" : [ ],
							"objectKey" : null
						},
						"name" : {
							"value" : "Meal"
						},
						"encoding" : {
							"rfic" : null,
							"type" : null,
							"code" : null,
							"subCode" : null,
							"refs" : [ ]
						},
						"timeLimits" : null,
						"feeMethod" : {
							"value" : "OC"
						},
						"descriptions" : {
							"description" : [ {
								"text" : {
									"value" : "Vegetarian Vegan Meal",
									"refs" : [ ]
								},
								"markupStyle" : null,
								"link" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
								"media" : [ {
									"objectID" : {
										"value" : "int_economy_promo.jpg",
										"owner" : null,
										"refs" : [ ]
									},
									"mediaLink" : null,
									"attachmentID" : null
								}, {
									"objectID" : null,
									"mediaLink" : {
										"value" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
										"refs" : [ ],
										"objectMetaReferences" : [ ]
									},
									"attachmentID" : null
								} ],
								"objectKey" : null,
								"refs" : [ ],
								"application" : null
							} ],
							"refs" : [ ]
						},
						"settlement" : {
							"method" : {
								"code" : "AD",
								"definition" : "Internal Airline Document",
								"tableName" : null,
								"link" : null,
								"refs" : [ ]
							},
							"interlineSettlementValue" : null
						},
						"price" : [ {
							"total" : {
								"value" : 0,
								"taxable" : true,
								"code" : null
							},
							"refundableValue" : null,
							"details" : null,
							"taxes" : null,
							"fees" : null,
							"passengerReferences" : [ {
								"pricedInd" : null,
								"refs" : [ ],
								"objectKey" : "SH1",
								"ptc" : {
									"value" : "ADT",
									"quantity" : 1
								},
								"residenceCode" : null,
								"passengerAssociation" : null,
								"age" : null,
								"citizenshipCountryCode" : null
							} ],
							"refs" : [ ]
						} ],
						"bookingInstructions" : null,
						"validatingCarrier" : null,
						"associations" : [ {
							"traveler" : {
								"allTravelerInd" : null,
								"travelerReferences" : [ {
									"pricedInd" : null,
									"refs" : [ ],
									"objectKey" : "SH1",
									"ptc" : {
										"value" : "ADT",
										"quantity" : 1
									},
									"residenceCode" : null,
									"passengerAssociation" : null,
									"age" : null,
									"citizenshipCountryCode" : null
								} ]
							},
							"flight" : {
								"allFlightInd" : null,
								"allOriginDestinationInd" : null,
								"allSegmentInd" : null,
								"originDestinationReferencesOrSegmentReferences" : [ {
									"value" : [ {
										"departure" : {
											"airportCode" : {
												"value" : "ARN",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"airportName" : null,
											"terminal" : null,
											"refs" : [ ]
										},
										"arrival" : {
											"airportCode" : {
												"value" : "FRA",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"changeOfDay" : null,
											"airportName" : "Frankfurt International",
											"terminal" : null,
											"refs" : [ ]
										},
										"marketingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3803",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ]
										},
										"operatingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3803",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ],
											"disclosures" : null
										},
										"equipment" : {
											"aircraftCode" : {
												"value" : "E95",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"changeOfGaugeInd" : null,
											"refs" : [ ],
											"name" : "E95 - EMBRAER 195 JET",
											"airlineEquipCode" : null
										},
										"classOfService" : null,
										"flightDetail" : {
											"flightSegmentType" : null,
											"flightDistance" : null,
											"flightDuration" : {
												"value" : "PT2H10M",
												"application" : null,
												"refs" : [ ]
											},
											"stops" : null,
											"resDateTime" : null,
											"tourOperatorFlightID" : null,
											"refs" : [ ]
										},
										"onTimePerformance" : null,
										"settlement" : null,
										"segmentKey" : "SEG1",
										"connectInd" : null,
										"electronicTicketInd" : null,
										"ticketlessInd" : null,
										"secureFlight" : null,
										"refs" : [ ]
									}, {
										"departure" : {
											"airportCode" : {
												"value" : "FRA",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"airportName" : "Frankfurt International",
											"terminal" : null,
											"refs" : [ ]
										},
										"arrival" : {
											"airportCode" : {
												"value" : "LHR",
												"application" : null,
												"area" : null,
												"uom" : null
											},
											"date" : "2015-12-24T21:00:00.000+0000",
											"time" : null,
											"changeOfDay" : null,
											"airportName" : null,
											"terminal" : null,
											"refs" : [ ]
										},
										"marketingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3916",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ]
										},
										"operatingCarrier" : {
											"airlineID" : {
												"value" : "9A",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"name" : "Athena Air",
											"flightNumber" : {
												"value" : "3916",
												"operationalSuffix" : null
											},
											"resBookDesigCode" : null,
											"refs" : [ ],
											"disclosures" : null
										},
										"equipment" : {
											"aircraftCode" : {
												"value" : "E95",
												"refs" : [ ],
												"objectMetaReferences" : [ ]
											},
											"changeOfGaugeInd" : null,
											"refs" : [ ],
											"name" : "E95 - EMBRAER 195 JET",
											"airlineEquipCode" : null
										},
										"classOfService" : null,
										"flightDetail" : {
											"flightSegmentType" : null,
											"flightDistance" : null,
											"flightDuration" : {
												"value" : null,
												"application" : null,
												"refs" : [ ]
											},
											"stops" : null,
											"resDateTime" : null,
											"tourOperatorFlightID" : null,
											"refs" : [ ]
										},
										"onTimePerformance" : null,
										"settlement" : null,
										"segmentKey" : "SEG2",
										"connectInd" : null,
										"electronicTicketInd" : null,
										"ticketlessInd" : null,
										"secureFlight" : null,
										"refs" : [ ]
									} ],
									"onPoint" : null,
									"offPoint" : null
								} ]
							},
							"offer" : [ ],
							"otherAssociations" : [ ],
							"seatReference" : null
						} ],
						"baggageDeterminingCarrier" : null,
						"objectKey" : "SV3",
						"refs" : [ ],
						"detail" : null,
						"bdcanalysisResult" : null
					},
					"nil" : false,
					"globalScope" : true,
					"typeSubstituted" : true
				} ],
				"serviceID" : [ ]
			},
			"selection" : {
				"minimumQuantityOrMaximumQuantity" : [ {
					"name" : "{http://www.iata.org/IATA/EDIST}MaximumQuantity",
					"declaredType" : "java.math.BigInteger",
					"scope" : "org.iata.iata.edist.ServiceBundle$Selection",
					"value" : 2,
					"nil" : false,
					"globalScope" : false,
					"typeSubstituted" : false
				} ]
			},
			"bundleID" : {
				"value" : "B1004",
				"refs" : [ ],
				"objectKey" : null
			},
			"price" : [ {
				"total" : {
					"value" : 5000,
					"taxable" : true,
					"code" : null
				},
				"refundableValue" : null,
				"details" : null,
				"taxes" : null,
				"fees" : null,
				"passengerReferences" : [ {
					"pricedInd" : null,
					"refs" : [ ],
					"objectKey" : "SH1",
					"ptc" : {
						"value" : "ADT",
						"quantity" : 1
					},
					"residenceCode" : null,
					"passengerAssociation" : null,
					"age" : null,
					"citizenshipCountryCode" : null
				} ],
				"refs" : [ ]
			} ],
			"bundleName" : null,
			"refs" : [ ],
			"listKey" : "SB1"
		} ],
		"serviceList" : [ {
			"serviceID" : {
				"value" : "1022",
				"owner" : "9A",
				"refs" : [ ],
				"objectKey" : null
			},
			"name" : {
				"value" : "Advance Seat selection"
			},
			"encoding" : {
				"rfic" : null,
				"type" : null,
				"code" : null,
				"subCode" : null,
				"refs" : [ ]
			},
			"timeLimits" : null,
			"feeMethod" : {
				"value" : "OC"
			},
			"descriptions" : {
				"description" : [ {
					"text" : {
						"value" : "A convenient option that lets you reserve your preferred seat",
						"refs" : [ ]
					},
					"markupStyle" : null,
					"link" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
					"media" : [ {
						"objectID" : {
							"value" : "preferred_seat.jpg",
							"owner" : null,
							"refs" : [ ]
						},
						"mediaLink" : null,
						"attachmentID" : null
					}, {
						"objectID" : null,
						"mediaLink" : {
							"value" : "http://athena.jrtechnologies.com/ServiceImage/preferred_seat.jpg",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"attachmentID" : null
					} ],
					"objectKey" : null,
					"refs" : [ ],
					"application" : null
				} ],
				"refs" : [ ]
			},
			"settlement" : {
				"method" : {
					"code" : "AD",
					"definition" : "Internal Airline Document",
					"tableName" : null,
					"link" : null,
					"refs" : [ ]
				},
				"interlineSettlementValue" : null
			},
			"price" : [ {
				"total" : {
					"value" : 0,
					"taxable" : true,
					"code" : null
				},
				"refundableValue" : null,
				"details" : null,
				"taxes" : null,
				"fees" : null,
				"passengerReferences" : [ {
					"pricedInd" : null,
					"refs" : [ ],
					"objectKey" : "SH1",
					"ptc" : {
						"value" : "ADT",
						"quantity" : 1
					},
					"residenceCode" : null,
					"passengerAssociation" : null,
					"age" : null,
					"citizenshipCountryCode" : null
				} ],
				"refs" : [ ]
			} ],
			"bookingInstructions" : null,
			"validatingCarrier" : null,
			"associations" : [ {
				"traveler" : {
					"allTravelerInd" : null,
					"travelerReferences" : [ {
						"pricedInd" : null,
						"refs" : [ ],
						"objectKey" : "SH1",
						"ptc" : {
							"value" : "ADT",
							"quantity" : 1
						},
						"residenceCode" : null,
						"passengerAssociation" : null,
						"age" : null,
						"citizenshipCountryCode" : null
					} ]
				},
				"flight" : {
					"allFlightInd" : null,
					"allOriginDestinationInd" : null,
					"allSegmentInd" : null,
					"originDestinationReferencesOrSegmentReferences" : [ {
						"value" : [ {
							"departure" : {
								"airportCode" : {
									"value" : "ARN",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"airportName" : null,
								"terminal" : null,
								"refs" : [ ]
							},
							"arrival" : {
								"airportCode" : {
									"value" : "FRA",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"changeOfDay" : null,
								"airportName" : "Frankfurt International",
								"terminal" : null,
								"refs" : [ ]
							},
							"marketingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3803",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ]
							},
							"operatingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3803",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ],
								"disclosures" : null
							},
							"equipment" : {
								"aircraftCode" : {
									"value" : "E95",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"changeOfGaugeInd" : null,
								"refs" : [ ],
								"name" : "E95 - EMBRAER 195 JET",
								"airlineEquipCode" : null
							},
							"classOfService" : null,
							"flightDetail" : {
								"flightSegmentType" : null,
								"flightDistance" : null,
								"flightDuration" : {
									"value" : "PT2H10M",
									"application" : null,
									"refs" : [ ]
								},
								"stops" : null,
								"resDateTime" : null,
								"tourOperatorFlightID" : null,
								"refs" : [ ]
							},
							"onTimePerformance" : null,
							"settlement" : null,
							"segmentKey" : "SEG1",
							"connectInd" : null,
							"electronicTicketInd" : null,
							"ticketlessInd" : null,
							"secureFlight" : null,
							"refs" : [ ]
						} ],
						"onPoint" : null,
						"offPoint" : null
					} ]
				},
				"offer" : [ ],
				"otherAssociations" : [ ],
				"seatReference" : null
			} ],
			"baggageDeterminingCarrier" : null,
			"objectKey" : "SV1",
			"refs" : [ ],
			"detail" : null,
			"bdcanalysisResult" : null
		}, {
			"serviceID" : {
				"value" : "1023",
				"owner" : "9A",
				"refs" : [ ],
				"objectKey" : null
			},
			"name" : {
				"value" : "Inflight entertainment"
			},
			"encoding" : {
				"rfic" : null,
				"type" : null,
				"code" : null,
				"subCode" : null,
				"refs" : [ ]
			},
			"timeLimits" : null,
			"feeMethod" : {
				"value" : "OC"
			},
			"descriptions" : {
				"description" : [ {
					"text" : {
						"value" : "The latest blockbusters, classics from film history, music and games",
						"refs" : [ ]
					},
					"markupStyle" : null,
					"link" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
					"media" : [ {
						"objectID" : {
							"value" : "comfort-eco-int-1_title.jpg",
							"owner" : null,
							"refs" : [ ]
						},
						"mediaLink" : null,
						"attachmentID" : null
					}, {
						"objectID" : null,
						"mediaLink" : {
							"value" : "http://athena.jrtechnologies.com/ServiceImage/comfort-eco-int-1_title.jpg",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"attachmentID" : null
					} ],
					"objectKey" : null,
					"refs" : [ ],
					"application" : null
				} ],
				"refs" : [ ]
			},
			"settlement" : {
				"method" : {
					"code" : "AD",
					"definition" : "Internal Airline Document",
					"tableName" : null,
					"link" : null,
					"refs" : [ ]
				},
				"interlineSettlementValue" : null
			},
			"price" : [ {
				"total" : {
					"value" : 500,
					"taxable" : true,
					"code" : null
				},
				"refundableValue" : null,
				"details" : null,
				"taxes" : null,
				"fees" : null,
				"passengerReferences" : [ {
					"pricedInd" : null,
					"refs" : [ ],
					"objectKey" : "SH1",
					"ptc" : {
						"value" : "ADT",
						"quantity" : 1
					},
					"residenceCode" : null,
					"passengerAssociation" : null,
					"age" : null,
					"citizenshipCountryCode" : null
				} ],
				"refs" : [ ]
			} ],
			"bookingInstructions" : null,
			"validatingCarrier" : null,
			"associations" : [ {
				"traveler" : {
					"allTravelerInd" : null,
					"travelerReferences" : [ {
						"pricedInd" : null,
						"refs" : [ ],
						"objectKey" : "SH1",
						"ptc" : {
							"value" : "ADT",
							"quantity" : 1
						},
						"residenceCode" : null,
						"passengerAssociation" : null,
						"age" : null,
						"citizenshipCountryCode" : null
					} ]
				},
				"flight" : {
					"allFlightInd" : null,
					"allOriginDestinationInd" : null,
					"allSegmentInd" : null,
					"originDestinationReferencesOrSegmentReferences" : [ {
						"value" : [ {
							"departure" : {
								"airportCode" : {
									"value" : "ARN",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"airportName" : null,
								"terminal" : null,
								"refs" : [ ]
							},
							"arrival" : {
								"airportCode" : {
									"value" : "FRA",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"changeOfDay" : null,
								"airportName" : "Frankfurt International",
								"terminal" : null,
								"refs" : [ ]
							},
							"marketingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3803",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ]
							},
							"operatingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3803",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ],
								"disclosures" : null
							},
							"equipment" : {
								"aircraftCode" : {
									"value" : "E95",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"changeOfGaugeInd" : null,
								"refs" : [ ],
								"name" : "E95 - EMBRAER 195 JET",
								"airlineEquipCode" : null
							},
							"classOfService" : null,
							"flightDetail" : {
								"flightSegmentType" : null,
								"flightDistance" : null,
								"flightDuration" : {
									"value" : "PT2H10M",
									"application" : null,
									"refs" : [ ]
								},
								"stops" : null,
								"resDateTime" : null,
								"tourOperatorFlightID" : null,
								"refs" : [ ]
							},
							"onTimePerformance" : null,
							"settlement" : null,
							"segmentKey" : "SEG1",
							"connectInd" : null,
							"electronicTicketInd" : null,
							"ticketlessInd" : null,
							"secureFlight" : null,
							"refs" : [ ]
						}, {
							"departure" : {
								"airportCode" : {
									"value" : "FRA",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"airportName" : "Frankfurt International",
								"terminal" : null,
								"refs" : [ ]
							},
							"arrival" : {
								"airportCode" : {
									"value" : "LHR",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"changeOfDay" : null,
								"airportName" : null,
								"terminal" : null,
								"refs" : [ ]
							},
							"marketingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3916",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ]
							},
							"operatingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3916",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ],
								"disclosures" : null
							},
							"equipment" : {
								"aircraftCode" : {
									"value" : "E95",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"changeOfGaugeInd" : null,
								"refs" : [ ],
								"name" : "E95 - EMBRAER 195 JET",
								"airlineEquipCode" : null
							},
							"classOfService" : null,
							"flightDetail" : {
								"flightSegmentType" : null,
								"flightDistance" : null,
								"flightDuration" : {
									"value" : null,
									"application" : null,
									"refs" : [ ]
								},
								"stops" : null,
								"resDateTime" : null,
								"tourOperatorFlightID" : null,
								"refs" : [ ]
							},
							"onTimePerformance" : null,
							"settlement" : null,
							"segmentKey" : "SEG2",
							"connectInd" : null,
							"electronicTicketInd" : null,
							"ticketlessInd" : null,
							"secureFlight" : null,
							"refs" : [ ]
						} ],
						"onPoint" : null,
						"offPoint" : null
					} ]
				},
				"offer" : [ ],
				"otherAssociations" : [ ],
				"seatReference" : null
			} ],
			"baggageDeterminingCarrier" : null,
			"objectKey" : "SV2",
			"refs" : [ ],
			"detail" : null,
			"bdcanalysisResult" : null
		}, {
			"serviceID" : {
				"value" : "1021",
				"owner" : "9A",
				"refs" : [ ],
				"objectKey" : null
			},
			"name" : {
				"value" : "Meal"
			},
			"encoding" : {
				"rfic" : null,
				"type" : null,
				"code" : null,
				"subCode" : null,
				"refs" : [ ]
			},
			"timeLimits" : null,
			"feeMethod" : {
				"value" : "OC"
			},
			"descriptions" : {
				"description" : [ {
					"text" : {
						"value" : "Vegetarian Vegan Meal",
						"refs" : [ ]
					},
					"markupStyle" : null,
					"link" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
					"media" : [ {
						"objectID" : {
							"value" : "int_economy_promo.jpg",
							"owner" : null,
							"refs" : [ ]
						},
						"mediaLink" : null,
						"attachmentID" : null
					}, {
						"objectID" : null,
						"mediaLink" : {
							"value" : "http://athena.jrtechnologies.com/ServiceImage/int_economy_promo.jpg",
							"refs" : [ ],
							"objectMetaReferences" : [ ]
						},
						"attachmentID" : null
					} ],
					"objectKey" : null,
					"refs" : [ ],
					"application" : null
				} ],
				"refs" : [ ]
			},
			"settlement" : {
				"method" : {
					"code" : "AD",
					"definition" : "Internal Airline Document",
					"tableName" : null,
					"link" : null,
					"refs" : [ ]
				},
				"interlineSettlementValue" : null
			},
			"price" : [ {
				"total" : {
					"value" : 0,
					"taxable" : true,
					"code" : null
				},
				"refundableValue" : null,
				"details" : null,
				"taxes" : null,
				"fees" : null,
				"passengerReferences" : [ {
					"pricedInd" : null,
					"refs" : [ ],
					"objectKey" : "SH1",
					"ptc" : {
						"value" : "ADT",
						"quantity" : 1
					},
					"residenceCode" : null,
					"passengerAssociation" : null,
					"age" : null,
					"citizenshipCountryCode" : null
				} ],
				"refs" : [ ]
			} ],
			"bookingInstructions" : null,
			"validatingCarrier" : null,
			"associations" : [ {
				"traveler" : {
					"allTravelerInd" : null,
					"travelerReferences" : [ {
						"pricedInd" : null,
						"refs" : [ ],
						"objectKey" : "SH1",
						"ptc" : {
							"value" : "ADT",
							"quantity" : 1
						},
						"residenceCode" : null,
						"passengerAssociation" : null,
						"age" : null,
						"citizenshipCountryCode" : null
					} ]
				},
				"flight" : {
					"allFlightInd" : null,
					"allOriginDestinationInd" : null,
					"allSegmentInd" : null,
					"originDestinationReferencesOrSegmentReferences" : [ {
						"value" : [ {
							"departure" : {
								"airportCode" : {
									"value" : "ARN",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"airportName" : null,
								"terminal" : null,
								"refs" : [ ]
							},
							"arrival" : {
								"airportCode" : {
									"value" : "FRA",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"changeOfDay" : null,
								"airportName" : "Frankfurt International",
								"terminal" : null,
								"refs" : [ ]
							},
							"marketingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3803",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ]
							},
							"operatingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3803",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ],
								"disclosures" : null
							},
							"equipment" : {
								"aircraftCode" : {
									"value" : "E95",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"changeOfGaugeInd" : null,
								"refs" : [ ],
								"name" : "E95 - EMBRAER 195 JET",
								"airlineEquipCode" : null
							},
							"classOfService" : null,
							"flightDetail" : {
								"flightSegmentType" : null,
								"flightDistance" : null,
								"flightDuration" : {
									"value" : "PT2H10M",
									"application" : null,
									"refs" : [ ]
								},
								"stops" : null,
								"resDateTime" : null,
								"tourOperatorFlightID" : null,
								"refs" : [ ]
							},
							"onTimePerformance" : null,
							"settlement" : null,
							"segmentKey" : "SEG1",
							"connectInd" : null,
							"electronicTicketInd" : null,
							"ticketlessInd" : null,
							"secureFlight" : null,
							"refs" : [ ]
						}, {
							"departure" : {
								"airportCode" : {
									"value" : "FRA",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"airportName" : "Frankfurt International",
								"terminal" : null,
								"refs" : [ ]
							},
							"arrival" : {
								"airportCode" : {
									"value" : "LHR",
									"application" : null,
									"area" : null,
									"uom" : null
								},
								"date" : "2015-12-24T21:00:00.000+0000",
								"time" : null,
								"changeOfDay" : null,
								"airportName" : null,
								"terminal" : null,
								"refs" : [ ]
							},
							"marketingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3916",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ]
							},
							"operatingCarrier" : {
								"airlineID" : {
									"value" : "9A",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"name" : "Athena Air",
								"flightNumber" : {
									"value" : "3916",
									"operationalSuffix" : null
								},
								"resBookDesigCode" : null,
								"refs" : [ ],
								"disclosures" : null
							},
							"equipment" : {
								"aircraftCode" : {
									"value" : "E95",
									"refs" : [ ],
									"objectMetaReferences" : [ ]
								},
								"changeOfGaugeInd" : null,
								"refs" : [ ],
								"name" : "E95 - EMBRAER 195 JET",
								"airlineEquipCode" : null
							},
							"classOfService" : null,
							"flightDetail" : {
								"flightSegmentType" : null,
								"flightDistance" : null,
								"flightDuration" : {
									"value" : null,
									"application" : null,
									"refs" : [ ]
								},
								"stops" : null,
								"resDateTime" : null,
								"tourOperatorFlightID" : null,
								"refs" : [ ]
							},
							"onTimePerformance" : null,
							"settlement" : null,
							"segmentKey" : "SEG2",
							"connectInd" : null,
							"electronicTicketInd" : null,
							"ticketlessInd" : null,
							"secureFlight" : null,
							"refs" : [ ]
						} ],
						"onPoint" : null,
						"offPoint" : null
					} ]
				},
				"offer" : [ ],
				"otherAssociations" : [ ],
				"seatReference" : null
			} ],
			"baggageDeterminingCarrier" : null,
			"objectKey" : "SV3",
			"refs" : [ ],
			"detail" : null,
			"bdcanalysisResult" : null
		} ],
		"termsList" : null,
		"seatList" : [ ]
	},
	"metadata" : {
		"shopping" : null,
		"traveler" : null,
		"other" : [ {
			"aircraftMetadatas" : [ ],
			"airportMetadatas" : [ ],
			"cityMetadatas" : [ ],
			"codesetMetadatas" : [ ],
			"contactMetadatas" : [ ],
			"countryMetadatas" : [ ],
			"currencyMetadatas" : [ {
				"augmentationPoint" : null,
				"refs" : [ ],
				"metadataKey" : "EUR",
				"application" : null,
				"decimals" : 2,
				"name" : null
			} ],
			"descriptionMetadatas" : [ ],
			"equivalentIDMetadatas" : [ ],
			"languageMetadatas" : [ ],
			"paymentCardMetadatas" : [ ],
			"paymentFormMetadatas" : [ ],
			"priceMetadatas" : [ ],
			"ruleMetadatas" : [ ],
			"stateProvMetadatas" : [ ],
			"zoneMetadatas" : [ ],
			"addressMetadatas" : [ ]
		}, {
			"aircraftMetadatas" : [ ],
			"airportMetadatas" : [ ],
			"cityMetadatas" : [ ],
			"codesetMetadatas" : [ ],
			"contactMetadatas" : [ ],
			"countryMetadatas" : [ ],
			"currencyMetadatas" : [ ],
			"descriptionMetadatas" : [ {
				"augmentationPoint" : {
					"augPoint" : [ {
						"any" : "<?xml version=\"1.0\" encoding=\"UTF-16\"?>\n<a:Logo xmlns=\"http://www.iata.org/IATA/EDIST\" xmlns:a=\"http://www.iata.org\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n                      http://athena.jrtechnologies.com/ServiceImage/Athena-50x90.png\n                  </a:Logo>",
						"key" : null,
						"owner" : null,
						"seq" : null
					} ],
					"lists" : null
				},
				"refs" : [ ],
				"metadataKey" : "ID1",
				"application" : null,
				"topic" : null,
				"hint" : null,
				"copyright" : null,
				"sequence" : null
			} ],
			"equivalentIDMetadatas" : [ ],
			"languageMetadatas" : [ ],
			"paymentCardMetadatas" : [ ],
			"paymentFormMetadatas" : [ ],
			"priceMetadatas" : [ ],
			"ruleMetadatas" : [ ],
			"stateProvMetadatas" : [ ],
			"zoneMetadatas" : [ ],
			"addressMetadatas" : [ ]
		} ]
	},
	"policies" : [ ],
	"errors" : [ ],
	"echoToken" : null,
	"timeStamp" : null,
	"target" : "Production",
	"version" : "1.1.5",
	"transactionIdentifier" : null,
	"sequenceNmbr" : null,
	"transactionStatusCode" : null,
	"retransmissionIndicator" : null,
	"correlationID" : null,
	"asynchronousAllowedInd" : null,
	"altLangID" : null,
	"primaryLangID" : null
};


export default offers;
