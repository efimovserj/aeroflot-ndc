import React, {Component} from 'react';

import Button from '../button';

import months from '../../data/months';

class PaymentInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardNumber: '',
			expireYear: '',
			yearsList: [],
			expireMonth: months[0].id,
			nameOwner: '',
			clientVerification: ''
		};
	}

	componentDidMount() {
		this.yearsGenerate();
	}

	yearsGenerate = () => {
		let years = [];

		for (let i = 2016; i < 2035; i++) {
			years.push({
				id: i,
				text: i,
			})
		}

		this.setState({
			yearsList: years,
			expireYear: years[0].id
		})
	}

	handleEventValue = (e, option) => {
		this.setState({
			[option]: e.target.value
		})
	}

	render() {
		const {cardNumber, clientVerification, nameOwner, yearsList} = this.state;

		return (
			<div>
				<div className="row">
					<div className="col-xs-2">Введите номер вашей карты:</div>

					<div className="col-xs-4">
						<input type="number"
						       className='form-control'
						       value={cardNumber}
						       onChange={(e) => this.handleEventValue(e, 'cardNumber')}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">Срок действия карты:</div>

					<div className="col-xs-2">
						<select className='form-control'
						        onChange={(e) => this.handleEventValue(e, 'expireMonth')}
						>
							{months.map((month, id) => {
								return <option key={id} value={month.id}>{month.text}</option>
							})}
						</select>
					</div>

					<div className="col-xs-2">
						<select className='form-control'
						        onChange={(e) => this.handleEventValue(e, 'expireYear')}
						>
							{yearsList.map((year, id) => {
								return <option key={id} value={year.id}>{year.text}</option>
							})}
						</select>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">Имя владельца карты:</div>

					<div className="col-xs-4">
						<input type="text"
						       className='form-control'
						       value={nameOwner}
						       onChange={(e) => this.handleEventValue(e, 'nameOwner')}
						/>
					</div>
				</div>

				<div className="row">
					<div className="col-xs-2">CVC@/CVV2 код:</div>

					<div className="col-xs-4">
						<input type="number"
						       className='form-control'
						       value={clientVerification}
						       onChange={(e) => this.handleEventValue(e, 'clientVerification')}
						       max='3'
						/>
					</div>
				</div>

				<Button title='Оплатить'
				        onChange={this.sendData}
				        type="button"
				        class="btn btn-primary"
				/>
			</div>
		)
	}
}

export default PaymentInfo;
