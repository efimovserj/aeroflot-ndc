const senderConfig = {
	"pointOfSale": {
		"location": {
			"countryCode": {
				"value": "US"
			},
			"cityCode": {
				"value": "WAS"
			}
		},
		"requestTime": {
			"value": "2015-10-12T04:38:00.000+0000",
			"zone": "EST"
		},
		"touchPoint": {
			"device": {
				"code": "2",
				"definition": "Web Browser",
				"position": {
					"latitude": {
						"value": "38.89756"
					},
					"longitude": {
						"value": "-77.03650"
					},
					"nac": "8KD7V PGGM0"
				}
			},
			"event": {
				"code": "9",
				"definition": "Shop"
			}
		}
	},
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
						"value": "ksmith212"
					},
					"userRole": "Admin"
				},
				"iatanumber": "98417900"
			}
		}
	},
	"echoToken": "8fdb1c621a7a4454aa3360556e7784d5",
	"timeStamp": "2015-12-10T12:39:00.000+0000",
	"target": "Test",
	"version": "16.1",
	"transactionIdentifier": "a",
	"sequenceNmbr": 201,
	"retransmissionIndicator": false,
	"asynchronousAllowedInd": false,
	"altLangID": "en",
	"primaryLangID": "en",
};

export default senderConfig;