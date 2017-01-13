import React, { Component } from 'react';


class Final extends Component {

	render() {
		const { orderResult } = this.props;

		return (
			<div>
				<h2>Final order</h2>
				<pre>{JSON.stringify(JSON.parse(orderResult).response.order, null, " ")}</pre>
			</div>
		)
	}
}

export default Final;
