import React, { Component } from 'react';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemList: [
				{
					type: 'search',
					title: 'Search',
				},
				{
					type: 'chooseFlight',
					title: 'Flights',
				},
				{
					type: 'passengers',
					title: 'Passengers',
				},
				{
					type: 'booking',
					title: 'Booking Confirmation',
				},
				{
					type: 'travel',
					title: 'Travel Documentation',
				},
			]
		}
	}

	render() {
		return (
			<div className="container navigator">
				<ul>
					{this.state.itemList.map((item, id) => {
						return (
							<li key={id}
							    className={[this.props.status[item.type] ? 'active' : '',
								    this.props.status[item.type] === 'done' ? 'done' : ''].join(' ')}>
								{item.title}
							</li>)
					})}
				</ul>
			</div>
		);
	}
}

export default Navigation;
