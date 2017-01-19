//const urlBase = 'http://192.168.192.29:8395/api/';
const urlBase = '/api/';

const urlsLibrary = {
	offers: urlBase + 'offers',
	orders: urlBase + 'orders',
};

const noop = () => {
}

let getResponse = ({ method, data = null, url, callback }) => {
	const xhr = new XMLHttpRequest();

	xhr.open(method, url, true);

	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	xhr.setRequestHeader('Accept', 'application/json');

	xhr.onreadystatechange = function () {
		let headers = {};
		if (this.readyState === 4) {
			headers = xhr.getResponseHeader('x-bpm-process-id');
			callback(this['response'], headers)
		}
	};

	xhr.send(JSON.stringify(data));
};

let formatNumber = (number) => {
	if (String(number).length > 2) {
		return String(number).slice(0, -2);
	}

	return number;
}

let convertTime= (PTString) => {
	const re = new RegExp('(PT)([0-9]*)(H)([0-9]*)');
	const time = PTString.match(re);

	const hours = time[2];
	let minutes = time[4];

	if (minutes === '0') {
		minutes = '00'
	}

	return hours + ":" + minutes;
}

let determineServiceType = (name) => {
	name = name.toLowerCase();

	if (~name.indexOf('lounge')) {
		return 'lounge'
	}
	if (~name.indexOf('wi-fi')) {
		return 'wifi'
	}
	if (~name.indexOf('seat') ) {
		return 'seat'
	}
	if (~name.indexOf('meal') || ~name.indexOf('snack')) {
		return 'meal'
	}
	if (~name.indexOf('bag')) {
		return 'bag'
	}

	return 'other';
};


const library = {
	lib: {
		noop,
		getResponse,
		formatNumber,
		convertTime,
		determineServiceType,
		urlsLibrary,
	}
};

export default library;
