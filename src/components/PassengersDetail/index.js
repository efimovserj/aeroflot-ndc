import React, { Component } from 'react';
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

	shouldComponentUpdate(nextProps) {
		return nextProps === this.props;
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
						<p>Appeal</p>
						<select className="form-control" onChange={this.handleAppealSelect}>
							{appealList.map((appeal, id) => {
								return (
									<option key={id} value={appeal.id}>{appeal.text}</option>
								)
							})}
						</select>
					</div>

					<div className="col-xs-3">
						<p>Second name*</p>
						<input className="form-control" type="text" onChange={this.handleSecondNameInput}/>
					</div>

					<div className="col-xs-2">
						<p>First name*</p>
						<input className="form-control" type="text" onChange={this.handleFirstNameInput}/>
					</div>

					<div className="col-xs-3">
						<p>Middle name**</p>
						<input className="form-control" type="text" onChange={this.handleMiddleNameInput}/>
					</div>

					<div className="col-xs-2">
						<p>Suffix</p>
						<select className="form-control" onChange={this.handleSuffixSelect}>
							{suffixList.map((suffix, id) => {
								return (
									<option key={id} value={suffix.id}>{suffix.text}</option>
								)
							})}
						</select>
					</div>

					<p className="text-danger col-xs-12">
						**Middle name (if any) is introduced only for internal transport in the Russian
						Federation
					</p>
				</div>

				<div className="row">
					<h4 className="col-xs-12">Information about traveler</h4>

					<div className="col-xs-2">
						<p>Date of Birth:*</p>
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
						<p>Sex:*</p>

						<label className="sex">
							<input type="radio" name='sex' value='men' onClick={this.handleSexInput}/> Male
						</label>

						<label className="sex">
							<input type="radio" name='sex' value='women' onClick={this.handleSexInput}/> Female
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
		const { preference } = this.state;

		return (
			<div>
				<div className="row">
					<h4 className="col-xs-12">Предпочтения в путешествии</h4>

					<p className="col-xs-2">Участник программы Аэрофлот Бонус</p>

					<div className="col-xs-3">
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
				</div>

				<div className="row">
					<p className="col-xs-2">Специальные запросы:</p>

					<div className="col-xs-3">
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

	shouldComponentUpdate(nextProps) {
		return nextProps === this.props;
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
		const { document } = this.state;

		return (
			<div>
				<div className="row">
					<h4 className="col-xs-12">Information about the travel document</h4>
					<p className="col-xs-12">
						<strong>Attention traveling to USA!</strong><br />
						Due to the additional checks US Immigration Service on the accuracy of the entered
						information to passengers purchasing air tickets on flights to US cities is required to
						fill in the field very closely with the passport data.

						After receiving your visa information and address of residence in the United States, you
						should contact the sales office for inclusion of this information in your reservation,
						or provide information to the employee at the front desk Aeroflot.
					</p>
				</div>
				<div className="row">
					<div className="col-xs-2">Document type:</div>
					<div className="col-xs-4">
						<select className="form-control">
							<option>Passport/Birth certificate</option>
						</select>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">Series and number:*</div>
					<div className="col-xs-4">
						<input type="text"
						       onChange={this.handleNumberInput}
						       value={document.number}
						       className="form-control"
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">Country extradition:*</div>
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
					<div className="col-xs-2">Validity:*</div>
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
					<div className="col-xs-2">Citizenship:*</div>
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

		this.setState({ passengers });
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
		//const {dataLists} = this.props;
		const { passengers } = this.state;

		return (
			<div>
				<div className="row">
					<div className="col-xs-12">
						<h2>Information about passengers</h2>

						<div id="passenger-notification" className="alertFullWidth">
							<p>Last name, first name, middle name and the document number of the passenger must be
								entered in Latin characters. When making passport data - as mentioned in the
								passport. When making the data of the passport of a Russian citizen in the field
								"Term" entered any date later than the date of your flight. The document number is
								entered without spaces.</p>

							<p className="singleLine">
								Information about the passenger document introduced at the request of the Ministry
								of Transport.
							</p>

							<p><a href="https://www.aeroflot.ru/cms/before_and_after_fly/rules_online?_ga=1.57626666.
					1656093309.1481571411"
							      target="_blank">
								Passenger is responsible for the correctness of entering the passport data.
							</a></p>
						</div>
						<strong>
							<p>Passengers are c the same first and last names must specify the suffix.<br />
								Attention! An adult passenger accompanying the child can not be younger than 18
								years.
							</p>
						</strong>

						<small className="field-required-legend">
							All fields marked * are mandatory
						</small>
					</div>
				</div>

				{passengersTypes.map((type, id) => {
					if (passengers[type.id]) {
						return (
							<div key={id} className="passenger-detail">
								<h2>{type.text}</h2>

								{passengers[type.id].map((passenger, passId) => {
									return (
										<div key={passId} className="block">
											{<TravelerInformation mainInfo={passenger.mainInfo}
											                      onChange={(mainInfo) => {
												                      this.setMainInfo(mainInfo, passId, type)
											                      }}
											/>}

											{false && <TravelerPreferences preference={passenger.preference}
											                               onChange={(preference) => {
												                               this.setPreference(preference, passId, type)
											                               }}
											/>}

											{<TravelerDocument document={passenger.document}
											                   onChange={(document) => {
												                   this.setDocument(document, passId, type)
											                   }}
											/> }
										</div>
									)
								})}
							</div>
						)
					}

					return null;
				})}

				<Button title='Go to the payment'
				        buttonProps={{
					        type: "button",
					        className: "btn btn-primary",
				        }}
				        onChange={this.sendData}
				/>
			</div>
		)
	}
}

export default PassengersDetail;
