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
					adults: 0,
					children: 0,
					babies: 0,
					youth: 0,
				},
				paymentMiles: false,
				paymentCurrency: 'RUB',
				service: 'economy',
			}
		};
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

		return (
			<div>
				<p>Откуда</p>
				<Select
					itemList={airports}
					currentItem={airportFrom}
					filter={true}
					inputProps={{
						placeholder: 'With love, your placeholder!'
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


			</div>
		)
	}
}

export default SearchFlights;