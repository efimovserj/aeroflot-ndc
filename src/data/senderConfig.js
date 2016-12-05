const senderConfig = {
	latitude: 38.89756,
	longitude: -77.03650,
	providerName: 'KRONOS NDC GATEWAY',
	currencyCode: 'EUR',
	countryCode: 'US',
	cityCode: 'WAS',
	language: 'en',
	endpoint: 'http://iata.api.mashery.com/kronos/api',
	APIAuthKey: 'xxxxxxxxxxxxxxxxxxxxxxxx',
	airline: {
		id: 'C9',
		name: 'Kronos Air',
	},
	sender: {
		id: 'C9',
		name: 'Kronos Air',
		pseudoCity: 'A4A',
		IATANumber: '98417900',
		type: 'TravelManagementCompany',
		email: 'info@carsontravels.com'
	},
	agent: {
		name: 'Carson Travels',
		id: 'ksmith212'
	}
};

export default senderConfig;