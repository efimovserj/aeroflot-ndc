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
					type: 'payment',
					title: 'Payment',
				},
				{
					type: 'final',
					title: 'Final',
				}
			]
		}}

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
