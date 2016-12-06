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
				direction: '',
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
		const { dateFrom, dateTo, airportFrom, airportTo, passengers } = this.state.searchParams;

		let request = {
			pointOfSaleEvent: {
				code: 9,
				definition: 'Shop agent'
			},
			onds: [{
				flights: [{
					departure: {
						date: moment(dateFrom).format('YYYY-MM-DD'),
						airportCode: airportFrom.id,
					},
					arrival: {
						date: moment(dateTo).format('YYYY-MM-DD'),
						airportCode: airportTo.id,
					},
					airline: senderConfig.sender
				}]
			}],
			cabin: 'S',
			fareCodes: ['BRO'],
			travelers: [{
				anonymous: true,
				count: passengers.adults,
				type: 'ADT'
			}],
		};

		if (passengers.children > 0) {
			request.travelers.push({
				anonymous: true,
				count: passengers.children,
				type: 'CNN'
			})
		}

		if (passengers.babies > 0) {
			request.travelers.push({
				anonymous: true,
				count: passengers.babies,
				type: 'INF'
			})
		}

		this.props.callback(request);
	};

	render() {
		const { airports } = this.props;
		let { searchParams } = this.state;
		let {
			// direction
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

		let passengerCounter = this.generatePassengerCounter();

		return (
			<div>
				<h2>Куда и когда</h2>

				<div className="row">
					<div className="col-xs-2">
						<p>Откуда</p>
					</div>
					<div className="col-xs-10">
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
								const changeParams = Object.assign({}, searchParams);
								changeParams.airportFrom = current;

								this.setState({ searchParams: changeParams });
							}}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">
						<p>Куда</p>
					</div>
					<div className="col-xs-10">
						<Select
							itemList={airports}
							currentItem={airportTo}
							filter={true}
							inputProps={{
								placeholder: 'Enter country name'
							}}

							onChange={(current) => {
								const changeParams = Object.assign({}, searchParams);
								changeParams.airportTo = current;

								this.setState({ searchParams: changeParams });
							}}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">
						<p>Дата вылета</p>
					</div>
					<div className="col-xs-2">
						<Calendar
							isManualInputAllowed={false}
							format="DD.MM.YYYY"
							value={dateFrom}
							minDate={moment()}
							onChange={(result) => {
								const changeParams = Object.assign({}, searchParams);
								changeParams.dateFrom = result;

								this.setState({ searchParams: changeParams });
							}}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">
						<p>Дата прибытия</p>
					</div>
					<div className="col-xs-2">
						<Calendar
							isManualInputAllowed={false}
							format="DD.MM.YYYY"
							value={dateTo}
							minDate={moment()}
							onChange={(result) => {
								const changeParams = Object.assign({}, searchParams);
								changeParams.dateTo = result;

								this.setState({ searchParams: changeParams });
							}}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12">
						<input type="checkbox" value={paymentMiles} onChange={() => {

							const changeParams = Object.assign({}, searchParams);
							changeParams.paymentMiles = !paymentMiles;

							this.setState({ searchParams: changeParams });
						}}/>
						<span>Оплата милями</span>
					</div>
				</div>

				<h2>Пассажиры</h2>

				<div className="row">
					<div className="col-xs-1">
						<p>Взрослые</p>
					</div>
					<div className="col-xs-3">
						<select className="form-control"
						        onChange={(e) => this.setPassengerCounter(e, 'adults')}
						        disabled={passengers.youth > 0 && !paymentMiles}
						>
							{ passengerCounter.adults.map((item, i) => {
								return (
									<option key={i} value={item}>{item}</option>
								)
							}) }
						</select>
						<small>(от 12 лет)</small>
					</div>

					<div className="col-xs-1">
						<p>Дети</p>
					</div>
					<div className="col-xs-3">
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

					<div className="col-xs-1">
						{!paymentMiles && <p>Младенцы</p>}
					</div>
					<div className="col-xs-3">
						{!paymentMiles && <div>
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
					<div className="col-xs-12">
						{paymentMiles &&
						<p className="text-danger">Оформление премиальных билетов за мили программы Аэрофлот
							Бонус
							не применяется для бронирования младенцев, молодежи и для нескольких пунктов
							назначения</p>
						}
					</div>
				</div>

				{!paymentMiles && <div className="row">
					<div className="col-xs-12">
						<p className="text-danger"> Тип пассажира "Молодежь" не комбинируется с другими типами
							пассажиров.</p>
					</div>
					<div className="col-xs-1">
						<p>Молодежь</p>
					</div>
					<div className="col-xs-3">
						<select value={passengers.youth} className="form-control"
						        onChange={(e) => this.setPassengerCounter(e, 'youth')}>
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

				<h2>Предпочтения</h2>


				{!paymentMiles && <div className="row">
					<div className="col-xs-2">
						<p>Класс обслуживания</p>
					</div>
					<div className="col-xs-10">
						<Select
							itemList={serviceList}
							currentItem={currentService}
							filter={false}
							inputProps={{
								placeholder: 'Enter service type'
							}}

							onChange={(current) => {
								const changeParams = Object.assign({}, searchParams);
								changeParams.currentService = current;

								this.setState({ searchParams: changeParams });
							}}
						/>
					</div>
				</div>
				}

				<div className="row">
					<div className="col-xs-2">
						<p>Страна</p>
					</div>
					<div className="col-xs-4">
						<Select
							itemList={countriesList}
							currentItem={currentCountry}
							filter={true}
							inputProps={{
								placeholder: 'Enter country name'
							}}

							onChange={(current) => {
								const changeParams = Object.assign({}, searchParams);
								changeParams.currentCountry = current;

								this.setState({ searchParams: changeParams });
							}}
						/>
					</div>
					<div className="col-xs-2">
						<p>Валюта: {currentCountry.currencyTitle}</p>
					</div>

					<Button title='Найти рейсы'
					        onChange={this.sendData}
					        type="button"
					        class="btn btn-primary"
					/>
				</div>
			</div>
		)
	}
}

export default SearchFlights;