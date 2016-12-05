// const urlBase = 'http://192.168.192.17:8080/api/offers/oneway';

/*const urlsLibrary = {
	contacts: '/offers/oneway',
	region: '/rest-service/api/contacts/region',
	object: '/rest-service/api/object/',
	operation: '/rest-service/api/operation/',
	answer: '/rest-service/api/answer/',
	question: '/rest-service/api/question/',
	standard: '/rest-service/api/standard/',
	document: '/rest-service/api/document/',
	match: '/rest-service/api/match/',
	theme: '/rest-service/api/theme/',
	faq: '/rest-service/api/faq/',
};*/



const noop = () => {
}

const getResponse = ({ method, data = null, url, callback }) => {
	const xhr = new XMLHttpRequest();

	xhr.open(method, url, true);

	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			callback(this['response'])
		}
	};

	xhr.send(data);
};

const library = {
	lib: {
		noop,
		getResponse,
	}
};

export default library;
