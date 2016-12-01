import React, { Component } from 'react';
import moment from 'moment';

// import Components
import Select from '../select';
import Calendar from '../calendar';

class SearchFlights extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchParams: {
				direction: '',
				airportFrom: {},
				airportTo: {},
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
				paymentCurrency: 'RUB',
				service: 'economy',
			}
		};
	}

	generatePassengerCounter = () => {
		const { adults, children, babies, quantity } = this.state.searchParams.passengers;
		let selfCounter = [];

		for (let i = 0; i <= quantity; i++ ) {
			selfCounter.push(i);
		}

		const result = {
			adults : selfCounter.slice(1, quantity - (children + babies) + 1),
			children : selfCounter.slice(0, quantity - (adults + babies) + 1),
			babies : selfCounter.slice(0, Math.min((quantity - children - adults), adults) + 1),
			youth : selfCounter.slice(0, quantity + 1),
		}

		return result;
	};

	setPassengerCounter = (e, category) => {
		const changeParams = Object.assign({}, this.state.searchParams);
		changeParams['passengers'][category] = Number(e.target.value);

		this.setState({searchParams : changeParams});
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
			paymentCurrency,
			service
		} = this.state.searchParams;

		let passengerCounter = this.generatePassengerCounter();

		return (
			<div>
				<h2>Куда и когда</h2>

				<p>Откуда</p>
				<Select
					itemList={airports}
					currentItem={airportFrom}
					filter={true}
					inputProps={{
						placeholder: 'With love, your placeholder!',
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

				<br />
				<p>Куда</p>
				<Select
					itemList={airports}
					currentItem={airportTo}
					filter={true}
					inputProps={{
						placeholder: 'With love, your placeholder!'
					}}

					onChange={(current) => {
						const changeParams = Object.assign({}, searchParams);
						changeParams.airportTo = current;

						this.setState({ searchParams: changeParams });
					}}
				/>

				<br />

				<p>Дата вылета</p>
				<Calendar
					isManualInputAllowed={false}
					format="DD.MM.YYYY"
					value={dateFrom}
					minDate={moment()}
					onChange={(result) => {
						const changeParams = Object.assign({}, searchParams);
						changeParams.dateFrom = result;

						this.setState({searchParams : changeParams});
					}}
				/>

				<br />

				<p>Дата прибытия</p>
				<Calendar
					isManualInputAllowed={false}
					format="DD.MM.YYYY"
					value={dateTo}
					minDate={moment()}
					onChange={(result) => {
						const changeParams = Object.assign({}, searchParams);
						changeParams.dateTo = result;

						this.setState({searchParams : changeParams});
					}}
				/>

				<br />

				<p>Оплата милями</p>
				<input type="checkbox" value={paymentMiles} onChange={() => {

					const changeParams = Object.assign({}, searchParams);
					changeParams.paymentMiles = !paymentMiles;

					this.setState({searchParams : changeParams});
				}}/>

				<br />

				<h2>Пассажиры</h2>

				<p>Взрослые</p>
				<select className="form-control"
				        onChange={(e) => this.setPassengerCounter(e, 'adults')}
				        disabled={passengers.youth > 0}
				>
					{ passengerCounter.adults.map((item, i) => {
						return (
							<option key={i} value={item} >{item}</option>
						)
					}) }
				</select>
				<small>(от 12 лет)</small>

				<br />
				<br />

				<p>Дети</p>
				<select className="form-control"
				        onChange={(e) => this.setPassengerCounter(e, 'children')}
				        disabled={passengers.youth > 0}
				>
					{ passengerCounter.children.map((item, i) => {``
						return (
							<option key={i} value={item} >{item}</option>
						)
					}) }
				</select>
				<small>(от 0 до 12 лет)</small>

				<br />
				<br />

				<p>Младенцы</p>
				<select className="form-control"
				        onChange={(e) => this.setPassengerCounter(e, 'babies')}
				        disabled={passengers.youth > 0}
				>
					{ passengerCounter.babies.map((item, i) => {
						return (
							<option key={i} value={item} >{item}</option>
						)
					}) }
				</select>
				<small>(до 2 лет)</small>

				<br />
				<br />

				<p className="text-danger">Тип пассажира "Молодежь" не комбинируется с другими типами пассажиров.</p>

				<p>Молодежь</p>
				<select className="form-control" onChange={(e) => this.setPassengerCounter(e, 'youth')}>
					{ passengerCounter.youth.map((item, i) => {
						return (
							<option key={i} value={item} >{item}</option>
						)
					}) }
				</select>
				<small>(от 12 до 25 лет)</small>


			</div>
		)
	}
}

export default SearchFlights;