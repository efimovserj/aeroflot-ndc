import React, { Component } from 'react';
import moment from 'moment';


class TotalResult extends Component {
	render() {
		const { dataLists, searchParams } = this.props;

		return (
			<div className="total-result">
				<div className="row">
					<div className="col-xs-2">
						<h4>Пассажиры</h4>
						<ul className="passengers-list">
							{dataLists.anonymousTravelerList.map((type, id) => {
								let title = '';
								let img = '';

								if (type.ptc.value === 'ADT') {
									title = 'Взрослых: ';
									img = 'glyphicon glyphicon-king'
								}

								if (type.ptc.value === 'CHD') {
									title = 'Детей: ';
									img = 'glyphicon glyphicon-knight'
								}

								if (type.ptc.value === 'INF') {
									title = 'Младенцев: ';
									img = 'glyphicon glyphicon-pawn'
								}

								return (
									<li key={id}><span className={img}>&nbsp;</span>{title} {type.ptc.quantity}</li>
								)
							})}
						</ul>
					</div>

					<div className="col-xs-3">
						<h4>Вылет</h4>
						<p>
							<span className='glyphicon glyphicon-plane icon-departure'></span>&nbsp;&nbsp;

							{
								/*
								 searchParams.departure.airportName
								 ? searchParams.departure.airportName + ' '
								 : ''
								 */

								`(${searchParams.departure.airportCode.value})
								${moment(searchParams.departure.date).format('YYYY-MM-DD')}`
							}
						</p>

						<h4>Прилет</h4>
						<p>
							<span className='glyphicon glyphicon-plane icon-arrive'></span>&nbsp;&nbsp;

							{
								/*
								 searchParams.arrival.airportName
								 ? searchParams.arrival.airportName + ' '
								 : ''
								 */


								`(${searchParams.arrival.airportCode.value})
								${moment(searchParams.arrival.date).format('YYYY-MM-DD')}`
							}
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default TotalResult;
