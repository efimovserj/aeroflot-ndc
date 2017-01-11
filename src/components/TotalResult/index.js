import React, { Component } from 'react';
import moment from 'moment';


class TotalResult extends Component {
	render() {
		const { dataLists, searchParams } = this.props;

		return (
			<div className="total-result">
				<div className="row">
					<div className="col-xs-2">
						<h4>Passengers</h4>
						<ul className="passengers-list">
							{dataLists.anonymousTravelerList.map((type, id) => {
								let title = '';
								let img = '';

								if (type.ptc.value === 'ADT') {
									title = 'Adults: ';
									img = 'glyphicon glyphicon-king'
								}

								if (type.ptc.value === 'CHD') {
									title = 'Children: ';
									img = 'glyphicon glyphicon-knight'
								}

								if (type.ptc.value === 'INF') {
									title = 'Infants: ';
									img = 'glyphicon glyphicon-pawn'
								}

								return (
									<li key={id}><span className={img}>&nbsp;</span>{title} {type.ptc.quantity}</li>
								)
							})}
						</ul>
					</div>

					<div className="col-xs-3">
						<h4>Departure</h4>
						<p>
							<span className='glyphicon glyphicon-plane icon-departure'></span>&nbsp;&nbsp;

							{
								`(${searchParams[0].departure.airportCode.value})
								${moment(searchParams[0].departure.date).format('YYYY-MM-DD')}`
							}
						</p>

						<h4>Arrive</h4>
						<p>
							<span className='glyphicon glyphicon-plane icon-arrive'></span>&nbsp;&nbsp;

							{searchParams.length > 1
								? `(${searchParams[1].departure.airportCode.value})
								${moment(searchParams[1].departure.date).format('YYYY-MM-DD')}`
								: `(${searchParams[0].arrival.airportCode.value})
								${moment(searchParams[0].arrival.date).format('YYYY-MM-DD')}`
							}
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default TotalResult;
