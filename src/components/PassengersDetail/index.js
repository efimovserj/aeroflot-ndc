import React, { Component } from 'react';
import moment from 'moment';

// import library from "../../lib/library";
import Select from '../select';
import Calendar from '../calendar';

import passengersTypes from '../../data/passengersTypes';
import appealList from '../../data/appealList';
import suffixList from '../../data/suffixList';

class TravelerInformation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mainInfo: {
				appeal: '',
				firstName: '',
				secondName: '',
				middleName: '',
				suffix: '',
				birthDate: '',
				sex: '',
			}
		}
	}

	handleSecondNameInput = (e) => {
		this.setState({
			mainInfo: {
				...this.state.mainInfo,
				secondName: e.target.value,
			}
		}, this.sendMainInfo)
	}

	handleFirstNameInput = (e) => {
		this.setState({
			mainInfo: {
				...this.state.mainInfo,
				firstName: e.target.value,
			}
		}, this.sendMainInfo)
	}

	handleMiddleNameInput = (e) => {
		this.setState({
			mainInfo: {
				...this.state.mainInfo,
				middleName: e.target.value,
			}
		}, this.sendMainInfo)
	}

	handleSuffixSelect = (e) => {
		this.setState({
			mainInfo: {
				...this.state.mainInfo,
				suffix: e.target.value,
			}
		}, this.sendMainInfo)
	}

	handleBirthDate = (result) => {
		this.setState({
			mainInfo: {
				...this.state.mainInfo,
				birthDate: result,
			}
		}, this.sendMainInfo)
	}

	handleAppealSelect = (e) => {
		this.setState({
			mainInfo: {
				...this.state.mainInfo,
				appeal: e.target.value,
			}
		}, this.sendMainInfo)
	}

	handleSexInput = (e) => {
		this.setState({
			mainInfo: {
				...this.state.mainInfo,
				sex: e.target.value,
			}
		}, this.sendMainInfo)
	}

	sendMainInfo = () => {
		this.props.onChange(this.state.mainInfo)
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-2">
						<p>Обращение</p>
						<select className="form-control" onChange={this.handleAppealSelect}>
							{appealList.map((appeal, id) => {
								return (
									<option key={id} value={appeal.id}>{appeal.text}</option>
								)
							})}
						</select>
					</div>

					<div className="col-xs-2">
						<p>Фамилия*</p>
						<input className="form-control" type="text" onChange={this.handleSecondNameInput}/>
					</div>

					<div className="col-xs-2">
						<p>Имя*</p>
						<input className="form-control" type="text" onChange={this.handleFirstNameInput}/>
					</div>

					<div className="col-xs-2">
						<p>Отчество**</p>
						<input className="form-control" type="text" onChange={this.handleMiddleNameInput}/>
					</div>

					<div className="col-xs-2">
						<p>Суффикс</p>
						<select className="form-control" onChange={this.handleSuffixSelect}>
							{suffixList.map((suffix, id) => {
								return (
									<option key={id} value={suffix.id}>{suffix.text}</option>
								)
							})}
						</select>
					</div>

					<p className="text-danger col-xs-12">
						**отчество (если имеется) вводится только для внутренних перевозок по Российской
						Федерации
					</p>
				</div>

				<div className="row">
					<h4 className="col-xs-12">Информация о путешественнике</h4>

					<div className="col-xs-2">
						<p>Дата рождения:*</p>
						<Calendar
							isManualInputAllowed={false}
							format="DD.MM.YYYY"
							value={this.state.mainInfo.birthDate}
							minDate={moment("01-01-1911", "MM-DD-YYYY")}
							maxDate={moment()}
							onChange={(result) => {
								this.handleBirthDate(result)
							}}
						/>
					</div>

					<div className="col-xs-2">
						<p>Пол:*</p>

						<label>
							<input type="radio" name='sex' value='men' onClick={this.handleSexInput} /> Мужской
						</label>

						<label>
							<input type="radio" name='sex' value='women' onClick={this.handleSexInput} /> Женский
						</label>
					</div>
				</div>
			</div>
		)
	}
}

class TravelerDocument extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<h4 className="col-xs-12">Предпочтения в путешествии</h4>

					<p className="col-xs-2">Участник программы Аэрофлот Бонус</p>

					<div className="col-xs-2">
						<select className="form-control" onChange={this.handleSuffixSelect}>
							{suffixList.map((suffix, id) => {
								return (
									<option key={id} value={suffix.id}>{suffix.text}</option>
								)
							})}
						</select>
					</div>
				</div>
			</div>
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
			passengers: {},
		};
	}

	componentDidMount() {
		let passengers = {};

		this.props.dataLists.anonymousTravelerList.forEach(type => {
			passengers[type.ptc.value] = [];

			for (let count = 1; count <= type.ptc.quantity; count++) {
				passengers[type.ptc.value].push({
					mainInfo: {},
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
		})

		this.setState({ passengers });
	}

	setMainInfo = (info, id, type) => {
		let tmpPassengers = this.state.passengers[type.id].slice();

		tmpPassengers[id] = info;

		this.setState({
			passengers: {
				...this.state.passengers,
				[type.id]: tmpPassengers,
			},
		})
	}

	render() {
		const { dataLists } = this.props;
		const { passengers } = this.state;

		return (
			<div>
				<div className="row">
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
				</div>

				<div className="row">
					<div className="col-xs-12">
						<h2>Информация о пассажирах</h2>

						<div id="passenger-notification" className="alertFullWidth">
							Фамилия, имя, отчество и номер документа пассажира вводятся латинскими буквами. При
							внесении данных заграничного паспорта - как указано в заграничном паспорте. При
							внесении данных паспорта гражданина РФ в поле «Срок действия» вводится любая дата
							более поздняя, чем дата Вашего полета. Номер документа вводится без пробелов.

							<p className="singleLine">
								Информация о документе пассажира вносится по требованию Министерства транспорта РФ.
							</p>

							<a href="https://www.aeroflot.ru/cms/before_and_after_fly/rules_online?_ga=1.57626666.
					1656093309.1481571411"
							   target="_blank">
								Пассажир несет ответственность за корректность ввода паспортных данных.
							</a>
						</div>

						<h4>
							Пассажирам c одинаковыми именами и фамилиями требуется указать суффикс.<br />
							Внимание! Взрослый пассажир, сопровождающий ребенка, не может быть моложе 18 лет.
						</h4>

						<small className="field-required-legend">
							Все поля, отмеченные * , являются обязательными для заполнения
						</small>
					</div>
				</div>

				{passengersTypes.map((type, id) => {
					if (passengers[type.id]) {
						return (
							<div key={id}>
								<h4>{type.text}</h4>

								{passengers[type.id].map((passenger, passId) => {
									return (
										<div key={passId}>
											<TravelerInformation mainInfo={passenger.mainInfo}
											                     onChange={(mainInfo) => {
												                     this.setMainInfo(mainInfo, id, type)
											                     }}
											/>
											<TravelerPreferences />
											<TravelerDocument />
										</div>
									)
								})}
							</div>
						)
					}

					return null;

				})}
			</div>
		)
	}
}

export default PassengersDetail;
