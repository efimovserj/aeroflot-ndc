import React, {Component} from 'react';
import moment from 'moment';

// import Components
import Calendar from '../calendar';
import Button from '../button';

// import data
import passengersTypes from '../../data/passengersTypes';
import appealList from '../../data/appealList';
import suffixList from '../../data/suffixList';
import bonusPartner from '../../data/bonusPartner';
import specialRequests from '../../data/specialRequests';
import countries from '../../data/countries';

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
							<input type="radio" name='sex' value='men' onClick={this.handleSexInput}/> Мужской
						</label>

						<label>
							<input type="radio" name='sex' value='women' onClick={this.handleSexInput}/> Женский
						</label>
					</div>
				</div>
			</div>
		)
	}
}

class TravelerPreferences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			preference: {
				name: '',
				number: '',
				specialRequest: '',
			},
		};
	}

	handleBonusPartnerSelect = (e) => {
		this.setState({
			preference: {
				...this.state.preference,
				name: e.target.value,
			}
		}, this.sendPreference)
	}

	handleNumberInput = (e) => {
		this.setState({
			preference: {
				...this.state.preference,
				number: e.target.value,
			}
		}, this.sendPreference)
	}

	handleSpecialRequestSelect = (e) => {
		this.setState({
			preference: {
				...this.state.preference,
				specialRequest: e.target.value,
			}
		}, this.sendPreference)
	}

	sendPreference = () => {
		this.props.onChange(this.state.preference)
	}

	render() {
		const {preference} = this.state;

		return (
			<div>
				<div className="row">
					<h4 className="col-xs-12">Предпочтения в путешествии</h4>

					<p className="col-xs-2">Участник программы Аэрофлот Бонус</p>

					<div className="col-xs-2">
						<select className="form-control" onChange={this.handleBonusPartnerSelect}>
							{bonusPartner.map((partner, id) => {
								return (
									<option key={id} value={partner.id}>{partner.text}</option>
								)
							})}
						</select>
					</div>

					<div className="col-xs-2">
						<input type="number"
						       className="form-control"
						       placeholder="Номер"
						       value={preference.number}
						       onChange={this.handleNumberInput}
						/>
					</div>

					<div className="col-xs-4">
						Специальные запросы:
						<select className="form-control" onChange={this.handleSpecialRequestSelect}>
							{specialRequests.map((request, id) => {
								return (
									<option key={id} value={request.id}>{request.text}</option>
								)
							})}
						</select>
					</div>

					<div className="col-xs-12">
						<div id="extra-services-request" className="singleLine">
							<p>
								Если вам нужны услуги, требующие подтверждения (носилки, сопровождение, провоз
								медицинского оборудования или собственного кресла-коляски),пожалуйста, закажите их
								через
								<a href="https://www.aeroflot.ru/feedback/questions/extra_services/service_booking"
								   target="_blank"
								>
									<b> «Обратную связь»</b>
								</a>.
								Вы можете завершить бронирование самостоятельно и указать его номер в заявке, или
								указать в заявке параметры бронирования, и оно будет создано для вас сотрудником
								компании.
							</p>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

class TravelerDocument extends Component {
	constructor(props) {
		super(props);
		this.state = {
			document: {
				type: 'passport',
				number: '',
				country: '',
				expire: moment(),
				citizenship: ''
			}
		};
	}

	handleNumberInput = (e) => {
		this.setState({
			document: {
				...this.state.document,
				number: e.target.value,
			}
		}, this.sendDocument)
	}

	handleCountrySelect = (e) => {
		this.setState({
			document: {
				...this.state.document,
				country: e.target.value,
			}
		}, this.sendDocument)
	}

	handleExpireDate = (date) => {
		this.setState({
			document: {
				...this.state.document,
				expire: date,
			}
		}, this.sendDocument)
	}

	handleCitizenshipSelect = (e) => {
		this.setState({
			document: {
				...this.state.document,
				citizenship: e.target.value,
			}
		}, this.sendDocument)
	}

	sendDocument = () => {
		this.props.onChange(this.state.document)
	}

	render() {
		const {document} = this.state;

		return (
			<div>
				<div className="row">
					<div className="col-xs-2">Тип документа:</div>
					<div className="col-xs-4">
						<select className="form-control">
							<option>Паспорт/Св. о рождении</option>
						</select>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">Серия и номер:*</div>
					<div className="col-xs-4">
						<input type="text"
						       onChange={this.handleNumberInput}
						       value={document.number}
						       className="form-control"
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">Страна выдачи:*</div>
					<div className="col-xs-4">
						<select className="form-control" onChange={this.handleCountrySelect}>
							{countries.map((country, id) => {
								return (
									<option key={id} value={country.id}>{country.text}</option>
								)
							})}
						</select>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">Срок действия:*</div>
					<div className="col-xs-4">
						<Calendar
							isManualInputAllowed={false}
							format="DD.MM.YYYY"
							value={document.expire}
							minDate={moment("01-01-1911", "MM-DD-YYYY")}
							maxDate={moment()}
							onChange={(result) => {
								this.handleExpireDate(result)
							}}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">Гражданство:*</div>
					<div className="col-xs-4">
						<select className="form-control" onChange={this.handleCitizenshipSelect}>
							{countries.map((country, id) => {
								return (
									<option key={id} value={country.id}>{country.text}</option>
								)
							})}
						</select>
					</div>
				</div>
			</div>
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
					preference: {},
					document: {}
				})
			}
		})

		this.setState({passengers});
	}

	setMainInfo = (info, id, type) => {
		let tmpPassengers = this.state.passengers[type.id].slice();

		tmpPassengers[id]['mainInfo'] = info;

		this.setState({
			passengers: {
				...this.state.passengers,
				[type.id]: tmpPassengers,
			},
		})
	}

	setPreference = (preference, id, type) => {
		let tmpPassengers = this.state.passengers[type.id].slice();

		tmpPassengers[id]['preference'] = preference;

		this.setState({
			passengers: {
				...this.state.passengers,
				[type.id]: tmpPassengers,
			},
		})
	}

	setDocument = (document, id, type) => {
		let tmpPassengers = this.state.passengers[type.id].slice();

		tmpPassengers[id]['document'] = document;

		this.setState({
			passengers: {
				...this.state.passengers,
				[type.id]: tmpPassengers,
			},
		})
	}

	sendData = () => {
		this.props.callback(this.state.passengers);
	};

	render() {
		const {dataLists} = this.props;
		const {passengers} = this.state;

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

											<TravelerPreferences preference={passenger.preference}
											                     onChange={(preference) => {
												                     this.setPreference(preference, id, type)
											                     }}
											/>
											<TravelerDocument document={passenger.document}
											                  onChange={(document) => {
												                  this.setDocument(document, id, type)
											                  }}/>
										</div>
									)
								})}
							</div>
						)
					}

					return null;
				})}

				<Button title='Продолжить'
				        onChange={this.sendData}
				        type="button"
				        class="btn btn-primary"
				/>
			</div>
		)
	}
}

export default PassengersDetail;
