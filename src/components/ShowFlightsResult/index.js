import React, {Component} from 'react';
import moment from 'moment';

// import components
// import Select from '../select';

// import additional data
// import service from '../../data/service';

class ShowFlightsResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chosenFlight: {},
		};
	}

	render() {
		const {offersGroup, dataLists} = this.props;

		// console.log(offersGroup.airlineOffer)

		//const { totalPrice, airlineOffer } = this.props.airlineOffer;

		return (
			<div>
				<p>Параметры поиска</p>
				{
					//TODO: createmodules for each ul block
				}
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

				<h4>Вылет</h4>
				<p>
					{dataLists.flightSegmentList[0].departure.airportName}&nbsp;
					({dataLists.flightSegmentList[0].departure.airportCode.value})&nbsp;
					{moment(dataLists.flightSegmentList[0].departure.date).format('YYYY-MM-DD')}
				</p>

				<h4>Прилет</h4>
				<p>
					{dataLists.flightSegmentList[0].arrival.airportName}&nbsp;
					({dataLists.flightSegmentList[0].arrival.airportCode.value})&nbsp;
					{moment(dataLists.flightSegmentList[0].arrival.date).format('YYYY-MM-DD')}
				</p>

				<p>Всего найдено <strong>{offersGroup.totalOfferQuantity}</strong> рейса.</p>

				{offersGroup.airlineOffer.map((offer, id) => {
					const totalPrice = offer.totalPrice.detailCurrencyPrice.total;
					return (
						<div key={id}>
							<p>Стоимость {totalPrice.value} {totalPrice.code}</p>

						</div>
					)
				})}

			</div>
		)
	}
}

export default ShowFlightsResult;