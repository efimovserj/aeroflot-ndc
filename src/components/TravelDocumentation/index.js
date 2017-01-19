import React, {Component} from 'react';
import ItineraryReceipt from "../../data/ItineraryReceipt.pdf";

class TravelDocumentation extends Component {
	render() {
		const orderResult = JSON.parse(this.props.orderResult);
		const {offers, header} = this.props;

		return (
			<div>
				<h2>Travel Documentation</h2>
				<div className="row">
					<h3 className="col-xs-9">Booking Reference(PNR): <span
						className="blue">{orderResult.response.order[0].bookingReferences[0].id}</span></h3>
					<h5 className="col-xs-3 bpm">BPM process: <span className="blue">{header}</span></h5>

					<p className="offer col-xs-12"><label>Order Id:</label> {offers[0].offerID.value}</p>
					<div className="col-xs-12"><a target="blank" href={ItineraryReceipt} className="btn btn-primary ">Get Itinerary Receipt</a></div>
				</div>
			</div>
		)
	}
}

export default TravelDocumentation;
