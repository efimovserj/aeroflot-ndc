import React, {Component} from 'react';
// import moment from 'moment';

// import library from "../../lib/library";

class TravelerInformation extends Component {
	render() {
		return (
			<div>TravelerInformation</div>
		)
	}
}

class TravelerDocument extends Component {
	render() {
		return (
			<div>TravelerDocument</div>
		)
	}
}

class TravelerPreferences extends Component {
	render() {
		return (
			<div>TravelerPreferences</div>
		)
	}
}

class PassengersDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenFlight: {},
			customOffers: [],
		};
	}

	componentDidMount() {
		let passengers = {};

		{this.props.dataLists.anonymousTravelerList.map(type => {
			passengers[type.ptc.value] = [];

			for (let count = 1; count <= type.ptc.quantity; count++) {
				passengers[type.ptc.value].push({
					appeal: '',
					firstName: '',
					secondName: '',
					middleName: '',
					suffix: '',
					birthDate: '',
					sex: '',
					preference: {
						name: '',
						number: '',
						specialRequest: '',
					},
					document: {
						type: '',
						number: '',
						country: '',
						expire: '',
						citizenship: ''
					}
				})
			}
		})}
	}

	render() {
		const { dataLists, searchParams } = this.props;

		return (
			<div>
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

				<h2>Информация о пассажирах</h2>

				<div id="passenger-notification" className="alertFullWidth">
					Фамилия, имя, отчество и номер документа пассажира вводятся латинскими буквами. При
					внесении данных заграничного паспорта - как указано в заграничном паспорте. При внесении
					данных паспорта гражданина РФ в поле «Срок действия» вводится любая дата более поздняя,
					чем дата Вашего полета. Номер документа вводится без пробелов.

					<p className="singleLine">
						Информация о документе пассажира вносится по требованию Министерства транспорта РФ.
					</p>

					<a href="https://www.aeroflot.ru/cms/before_and_after_fly/rules_online?_ga=1.57626666.
					1656093309.1481571411"
					   target="_blank">
						Пассажир несет ответственность за корректность ввода паспортных данных.
					</a>
				</div>

				<TravelerInformation />
				<TravelerPreferences />
				<TravelerDocument />

			</div>
		)
	}
}

export default PassengersDetail;
