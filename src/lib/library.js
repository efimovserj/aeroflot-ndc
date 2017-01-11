const urlBase = 'http://192.168.192.126:8395/api/';
// const urlBase = '';

const urlsLibrary = {
	oneway: urlBase + 'offers',
	orders: urlBase + 'orders',
	processId: urlBase + 'orders/',
};

const noop = () => {
}

let getResponse = ({ method, data = null, url, callback }) => {
	const xhr = new XMLHttpRequest();

	xhr.open(method, url, true);

	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	xhr.setRequestHeader('Accept', 'application/json');

	xhr.onreadystatechange = function () {
		if (this.readyState === 4) {
			callback(this['response'])
		}
	};

	xhr.send(JSON.stringify(data));
};


const library = {
	lib: {
		noop,
		getResponse,
		urlsLibrary,
	}
};

export default library;
