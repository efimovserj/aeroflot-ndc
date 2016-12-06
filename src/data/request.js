const request = {
	"pointOfSale" : {
	"location" : {
		"countryCode" : {
			"value" : "US",
				"refs" : [ ],
				"objectMetaReferences" : [ ]
		},
		"cityCode" : {
			"value" : "WAS",
				"refs" : [ ],
				"objectMetaReferences" : [ ]
		}
	},
	"requestTime" : {
		"value" : "2015-10-14T04:38:00.000+0000",
			"zone" : "EST"
	},
	"touchPoint" : {
		"device" : {
			"code" : "2",
				"definition" : "Web Browser",
				"tableName" : null,
				"link" : null,
				"refs" : [ ],
				"position" : {
				"latitude" : {
					"value" : "38.89756",
						"sign" : null,
						"minute" : null,
						"second" : null
				},
				"longitude" : {
					"value" : "-77.03650",
						"sign" : null,
						"minute" : null,
						"second" : null
				},
				"altitude" : null,
					"nac" : "8KD7V PGGM0",
					"refs" : [ ]
			}
		},
		"event" : {
			"code" : "9",
				"definition" : "Shop",
				"tableName" : null,
				"link" : null,
				"refs" : [ ]
		}
	},
	"id" : null,
		"refs" : [ ],
		"agentDutyCode" : null
},
	"document" : {
	"metadata" : null,
		"name" : "ATHENA NDC GATEWAY",
		"referenceVersion" : "1.0",
		"id" : null,
		"refs" : [ ]
},
	"party" : {
	"sender" : {
		"agentUserSender" : null,
			"aggregatorSender" : null,
			"enabledSystemSender" : null,
			"marketingCarrierSender" : null,
			"operatingCarrierSender" : null,
			"retailPartnerSender" : null,
			"travelAgencySender" : {
			"metadata" : [ ],
				"refs" : [ ],
				"name" : null,
				"type" : null,
				"contacts" : [ {
				"addressContact" : null,
				"emailContact" : {
					"application" : null,
					"address" : {
						"value" : "ndc@usdtravel.com",
						"refs" : [ ],
						"objectMetaReferences" : [ ]
					},
					"refs" : [ ]
				},
				"otherContactMethod" : null,
				"phoneContact" : null,
				"name" : null,
				"contactType" : null
			} ],
				"otherIDs" : [ ],
				"pseudoCity" : {
				"value" : "A4A",
					"owner" : null
			},
			"agencyID" : {
				"value" : "9A",
					"owner" : null,
					"refs" : [ ]
			},
			"agentUser" : {
				"metadata" : [ ],
					"refs" : [ ],
					"name" : "ksmith",
					"type" : null,
					"contacts" : [ ],
					"otherIDs" : [ ],
					"pseudoCity" : null,
					"agentUserID" : {
					"value" : "ksmith212",
						"owner" : null,
						"refs" : [ ]
				},
				"userRole" : "Admin",
					"iatanumber" : null
			},
			"iatanumber" : "98417900"
		},
		"corporateSender" : null,
			"orasender" : null,
			"poasender" : null
	},
	"participants" : null,
		"recipient" : null
},
	"parameters" : {
	"languages" : [ ],
		"currCodes" : [ {
		"value" : "EUR",
		"id" : null,
		"metadata" : [ ],
		"refs" : [ ],
		"application" : null
	} ],
		"refs" : [ ],
		"inventory" : null,
		"serviceFilters" : null,
		"pricing" : null,
		"group" : null,
		"baggageDeterminingCarrier" : null
},
	"travelers" : [ {
	"anonymousTraveler" : [ {
		"pricedInd" : null,
		"refs" : [ ],
		"objectKey" : null,
		"ptc" : {
			"value" : "ADT",
			"quantity" : 1
		},
		"residenceCode" : null,
		"passengerAssociation" : null,
		"age" : null,
		"citizenshipCountryCode" : null
	} ],
	"recognizedTraveler" : [ ]
} ],
	"coreQuery" : {
	"affinity" : null,
		"originDestinations" : [ {
		"approxInd" : null,
		"refundAllInd" : null,
		"exemptAllInd" : null,
		"allGuaranteeInd" : null,
		"disclosureInd" : null,
		"browserInd" : null,
		"refs" : [ ],
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
				"value" : "LHR",
				"application" : null,
				"area" : null,
				"uom" : null
			},
			"date" : null,
			"time" : null,
			"changeOfDay" : null,
			"airportName" : null,
			"terminal" : null,
			"refs" : [ ]
		},
		"segMaxTimePreferences" : null,
		"shoppingResponseID" : null,
		"marketingCarrierAirline" : {
			"metadata" : [ ],
			"refs" : [ ],
			"otherIDs" : [ ],
			"airlineID" : {
				"value" : "9A",
				"refs" : [ ],
				"objectMetaReferences" : [ ]
			},
			"name" : "Athena Air",
			"flightNumber" : null
		},
		"calendarDates" : null,
		"originDestinationKey" : null
	} ],
		"flightSpecific" : null,
		"shoppingResponseID" : null
},
	"qualifier" : null,
	"preference" : {
	"airlinePreferences" : null,
		"alliancePreferences" : null,
		"farePreferences" : null,
		"flightPreferences" : null,
		"pricingMethodPreference" : null,
		"segMaxTimePreferences" : null,
		"servicePricingOnlyPreference" : null,
		"transferPreferences" : null,
		"cabinPreferences" : {
		"cabinType" : [ {
			"code" : "M",
			"definition" : "Economy/coach discounted",
			"tableName" : null,
			"link" : null,
			"refs" : [ ],
			"name" : null,
			"originDestinationReferences" : [ ]
		} ],
			"refs" : [ ]
	}
},
	"metadata" : {
	"shopping" : null,
		"traveler" : null,
		"other" : [ {
		"addressMetadatas" : [ ],
		"aircraftMetadatas" : [ ],
		"airportMetadatas" : [ ],
		"cityMetadatas" : [ ],
		"codesetMetadatas" : [ ],
		"contactMetadatas" : [ ],
		"currencyMetadatas" : [ {
			"augmentationPoint" : null,
			"refs" : [ ],
			"metadataKey" : null,
			"application" : null,
			"decimals" : 2,
			"name" : "EUR"
		} ],
		"descriptionMetadatas" : [ ],
		"equivalentIDMetadatas" : [ ],
		"languageMetadatas" : [ ],
		"paymentCardMetadatas" : [ ],
		"paymentFormMetadatas" : [ ],
		"priceMetadatas" : [ ],
		"ruleMetadatas" : [ ],
		"stateProvMetadatas" : [ ],
		"zoneMetadatas" : [ ]
	} ]
},
	"policies" : [ ],
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
}

export default request;