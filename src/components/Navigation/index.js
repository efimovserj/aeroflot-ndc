import React, { Component } from 'react';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemList: [
				{
					type: 'search',
					title: 'Поиск',
				},
				{
					type: 'chooseFlight',
					title: 'Выбор рейса',
				},
				{
					type: 'passengers',
					title: 'Пассажиры',
				},
				{
					type: 'payment',
					title: 'Оплата',
				},
				{
					type: 'final',
					title: 'Итоговая',
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
