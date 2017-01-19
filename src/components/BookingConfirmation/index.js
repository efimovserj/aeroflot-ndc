import React, { Component } from 'react';
import library from "../../lib/library";

import Button from '../button';

class BookingConfirmation extends Component {

	sendData = () => {
		this.props.onChange()
	}

	render() {
		const orderResult = JSON.parse(this.props.orderResult);
		const { offers, header } = this.props;

		return (
			<div>
				<h2>Booking Confirmation</h2>
				<div className="row">
					<h3 className="col-xs-5">Booking Reference(PNR): <span
						className="blue">{orderResult.response.order[0].bookingReferences[0].id}</span></h3>
					<div className="col-xs-2">
						<Button title='Payment by Passenger'
						        buttonProps={{
							        type: "button",
							        className: "btn btn-primary payment"
						        }}
						        onChange={this.sendData}
						/>
					</div>
					<div className="col-xs-2">
						<Button title='Payment by Agent'
						        buttonProps={{
							        type: "button",
							        className: "btn btn-primary payment"
						        }}
						        onChange={this.sendData}
						/>
					</div>
					<h5 className="col-xs-3 bpm">BPM process: <span className="blue">{header}</span></h5>

					<p className="offer col-xs-12"><label>Order Id:</label> {offers[0].offerID.value}</p>
				</div>

				{orderResult.response.passengers.passenger.map((passenger, passengerId) => {
					return (
						<div key={passengerId} className="block row result">

							{orderResult.response.dataLists.flightSegmentList.map((flight, flightId) => {
								return (
									<div key={flightId} className="col-xs-6 flight">
										<p className="name">{flight.marketingCarrier.name}</p>
										<p>
											<label>Flight number: </label>
											{flight.marketingCarrier.airlineID.value}&nbsp;
											{flight.marketingCarrier.flightNumber.value}
										</p>

										<p>
											<label>Departure: </label>
											({flight.departure.airportCode.value}) {flight.departure.airportName},&nbsp;
											{flight.departure.time}
										</p>
										<p>
											<label>Arrival: </label>
											({flight.arrival.airportCode.value}) {flight.arrival.airportName},&nbsp;
											{flight.arrival.time}
										</p>
										<p><label>Plane: </label>{flight.equipment.name}</p>
										<p>
											<label>Flight duration: </label>
											{library.lib.convertTime(flight.flightDetail.flightDuration.value)}
										</p>

										<h4>{passenger.name.surname.value} {passenger.name.middle[0].value} {passenger.name.given[0].value}</h4>
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
		)
	}
}

export default BookingConfirmation;
