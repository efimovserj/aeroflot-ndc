import React, { Component } from 'react';
import moment from 'moment';

// import components
import Select from '../select';
import Calendar from '../calendar';
import Button from '../button';

// import additional data
import service from '../../data/service';
import countriesList from '../../data/countries';
import senderConfig from '../../data/senderConfig';

class SearchFlights extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchParams: {
				direction: 'roundWay',
				airportFrom: this.props.airports[0],
				airportTo: this.props.airports[0],
				dateFrom: moment(),
				dateTo: moment(),
				passengers: {
					adults: 1,
					children: 0,
					babies: 0,
					youth: 0,
					quantity: 6,
				},
				paymentMiles: false,
				currentService: service[0],
				serviceList: service,
				countriesList,
				currentCountry: countriesList[0],
			}
		};
	}

	generatePassengerCounter = () => {
		const { adults, children, babies, quantity } = this.state.searchParams.passengers;
		let selfCounter = [];

		for (let i = 0; i <= quantity; i++) {
			selfCounter.push(i);
		}

		const result = {
			adults: selfCounter.slice(1, quantity - (children + babies) + 1),
			children: selfCounter.slice(0, quantity - (adults + babies) + 1),
			babies: selfCounter.slice(0, Math.min((quantity - children - adults), adults) + 1),
			youth: selfCounter.slice(0, quantity + 1),
		}

		return result;
	};

	setPassengerCounter = (e, category) => {
		const changeParams = Object.assign({}, this.state.searchParams);
		changeParams['passengers'][category] = Number(e.target.value);

		this.setState({ searchParams: changeParams });
	}

	sendData = () => {
		const {
			direction,
			dateFrom,
			dateTo,
			airportFrom,
			airportTo,
			passengers,
			currentCountry,
			currentService,
		} = this.state.searchParams;

		let request = Object.assign(senderConfig, {
			"parameters": {
				"currCodes": [
					{
						"value": currentCountry.currency
					}
				]
			},
			"coreQuery": {
				"originDestinations": [
					{
						"departure": {
							"airportCode": {
								"value": airportFrom.id,
							},
							"date": moment(dateFrom),
						},
						"arrival": {
							"airportCode": {
								"value": airportTo.id,
							},
						},
						"marketingCarrierAirline": {
							"airlineID": {
								"value": "C9"
							},
							"name": "Kronos Air"
						},
					}
				]
			},
			"preference": {
				"cabinPreferences": {
					"cabinType": [
						{
							"code": currentService.id,
							"definition": currentService.text
						}
					]
				}
			},
			"metadata": {
				"other": [
					{
						"currencyMetadatas": [
							{
								"metadataKey": currentCountry.currency,
								"decimals": 2
							}
						]
					}
				]
			},
			"travelers": [
				{
					"anonymousTraveler": [
						{
							"ptc": {
								"value": "ADT",
								"quantity": passengers.adults
							}
						}
					]
				}
			],
		});

		if (passengers.children > 0) {
			request.travelers.push({
				"anonymousTraveler": [{
					"ptc": {
						quantity: passengers.children,
						value: 'CHD'
					}
				}],
			})
		}

		if (passengers.babies > 0) {
			request.travelers.push({
				"anonymousTraveler": [{
					"ptc": {
						quantity: passengers.babies,
						value: 'INF'
					}
				}],
			})
		}

		if (direction === 'roundWay') {
			request.coreQuery.originDestinations.push({
				"departure": {
					"airportCode": {
						"value": airportTo.id,
					},
					"date": moment(dateTo),
				},
				"arrival": {
					"airportCode": {
						"value": airportFrom.id,
					},
				},
				"marketingCarrierAirline": {
					"airlineID": {
						"value": "C9"
					},
					"name": "Kronos Air"
				},
			})
		}

		// console.log('request', request);

		this.props.callback(request);
	};

	handleDirection = (e) => {
		this.setState({
			searchParams: {
				...this.state.searchParams,
				direction: e.target.value,
			}
		})
	}

	render() {
		const { airports } = this.props;
		let { searchParams } = this.state;
		let {
			direction,
			airportFrom,
			airportTo,
			dateFrom,
			dateTo,
			passengers,
			paymentMiles,
			currentService,
			serviceList,
			countriesList,
			currentCountry,
		} = this.state.searchParams;

		// TODO: the following function must be execute when a passenger's counter is changed
		let passengerCounter = this.generatePassengerCounter();

		return (
			<div>
				<div className="block">
					<h2>Куда и когда</h2>

					<div className="row">
						<div className="col-xs-3 direction">
							<label>
								<p>
									<input type="radio"
									       name="direction"
									       value='roundWay'
									       onChange={this.handleDirection}
									       defaultChecked
									/>&nbsp;Туда и обратно</p>
							</label>

							<label>
								<p>
									<input type="radio"
									       name="direction"
									       value='oneWay'
									       onChange={this.handleDirection}
									/>&nbsp;В одну сторону
								</p>
							</label>

							<label>
								<input type="checkbox" value={paymentMiles} onChange={() => {
									this.setState({
										searchParams: {
											...searchParams,
											paymentMiles: !paymentMiles,
										}
									});
								}}
								/>
								&nbsp;Оплата милями
							</label>
						</div>

						<div className="col-xs-9">
							<div className="row">
								<div className="col-xs-2">
									<p>Откуда</p>
								</div>

								<div className="col-xs-6">
									<Select
										itemList={airports}
										currentItem={airportFrom}
										filter={true}
										inputProps={{
											placeholder: 'Enter country name',
										}}
										buttonProps={{
											className: "form-control",
											value: 'Откуда'
										}}
										onChange={(current) => {
											this.setState({
												searchParams: {
													...searchParams,
													airportFrom: current,
												}
											});
										}}
									/>
								</div>

								<div className="col-xs-4">
									<Calendar
										isManualInputAllowed={false}
										format="DD.MM.YYYY"
										value={dateFrom}
										minDate={moment()}
										onChange={(result) => {
											this.setState({
												searchParams: {
													...searchParams,
													dateFrom: result,
												}
											});
										}}
									/>
								</div>
							</div>

							<div className="row">
								<div className="col-xs-2">
									<p>Куда</p>
								</div>

								<div className="col-xs-6">
									<Select
										itemList={airports}
										currentItem={airportTo}
										filter={true}
										inputProps={{
											placeholder: 'Enter country name'
										}}

										onChange={(current) => {
											this.setState({
												searchParams: {
													...searchParams,
													airportTo: current,
												}
											});
										}}
									/>
								</div>

								<div className="col-xs-4">
									{direction === "roundWay" &&
									<Calendar
										isManualInputAllowed={false}
										format="DD.MM.YYYY"
										value={dateTo}
										minDate={moment()}
										onChange={(result) => {
											this.setState({
												searchParams: {
													...searchParams,
													dateTo: result,
												}
											});
										}}
									/>}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="block">
					<h2>Пассажиры</h2>

					<div className="row">

						<div className="col-xs-3">
							<p>Взрослые</p>
							<select className="form-control"
							        onChange={(e) => this.setPassengerCounter(e, 'adults')}
							        disabled={passengers.youth > 0 && !paymentMiles}
							>
								{passengerCounter.adults.map((item, i) => {
									return (
										<option key={i} value={item}>{item}</option>
									)
								})}
							</select>
							<small>(от 12 лет)</small>
						</div>

						<div className="col-xs-3">
							<p>Дети</p>

							<select className="form-control"
							        onChange={(e) => this.setPassengerCounter(e, 'children')}
							        disabled={passengers.youth > 0 && !paymentMiles}
							>
								{ passengerCounter.children.map((item, i) => {
									return (
										<option key={i} value={item}>{item}</option>
									)
								}) }
							</select>
							<small>(от 0 до 12 лет)</small>
						</div>

						<div className="col-xs-3">
							{!paymentMiles && <div>
								<p>Младенцы</p>

								<select className="form-control"
								        value={passengers.babies}
								        onChange={(e) => this.setPassengerCounter(e, 'babies')}
								        disabled={passengers.youth > 0 && !paymentMiles}
								>
									{ passengerCounter.babies.map((item, i) => {
										return (
											<option key={i} value={item}>{item}</option>
										)
									}) }
								</select>
								<small>(до 2 лет)</small>
							</div>
							}

						</div>
					</div>

					{paymentMiles && <div className="row">
						<div className="col-xs-12">
							<p className="text-danger">Оформление премиальных билетов за мили программы Аэрофлот
								Бонус не применяется для бронирования младенцев, молодежи и для нескольких пунктов
								назначения</p>
						</div>
					</div>}

					{!paymentMiles &&
					<div className="row">
						<div className="col-xs-12">
							<hr />

							<p className="text-danger"> Тип пассажира "Молодежь" не комбинируется с другими типами
								пассажиров.</p>
						</div>


						<div className="col-xs-3">
							<p>Молодежь</p>

							<select value={passengers.youth}
							        className="form-control"
							        onChange={(e) => this.setPassengerCounter(e, 'youth')}
							>
								{ passengerCounter.youth.map((item, i) => {
									return (
										<option key={i} value={item}>{item}</option>
									)
								}) }
							</select>
							<small>(от 12 до 25 лет)</small>
						</div>
					</div>
					}
				</div>	

				<div className="block">
					<h2>Предпочтения</h2>

					{!paymentMiles &&
					<div className="row">
						<div className="col-xs-3">
							<p>Класс обслуживания</p>
						</div>

						<div className="col-xs-3">
							<Select
								itemList={serviceList}
								currentItem={currentService}
								filter={false}
								inputProps={{
									placeholder: 'Enter service type'
								}}
								onChange={(current) => {
									this.setState({
										searchParams: {
											...searchParams,
											currentService: current,
										}
									});
								}}
							/>
						</div>
					</div>
					}

					<div className="row">
						<div className="col-xs-3">
							<p>Страна</p>
						</div>

						<div className="col-xs-3">
							<Select
								itemList={countriesList}
								currentItem={currentCountry}
								filter={true}
								inputProps={{
									placeholder: 'Enter country name'
								}}

								onChange={(current) => {
									this.setState({
										searchParams: {
											...searchParams,
											currentCountry: current,
										}
									});
								}}
							/>
						</div>

						<div className="col-xs-3">
							<p>Валюта: {currentCountry.currencyTitle}</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">
						<Button title='Найти рейсы'
						        buttonProps={{
							        type: "button",
							        className: "btn btn-primary"
						        }}
						        onChange={this.sendData}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchFlights;