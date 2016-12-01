//    Example:
//
//    <Select
//
//        itemList = {itemList}
//        currentItem = {currentItem}
//        filter = {true}
//        inputProps = {{
//                      placeholder : 'With love, your placeholder!'
//                     }}
//
//        onChange = {(current) => {
//                    this.setState({currentItem : current});
//                   }}
//        />
//
//    itemList - array of objects with keys:
//        - 'id' - name of item;
//        - 'text' - value of item;
//        - 'type' - it s gonna be 'item' or 'divider'.
//        If object have type: 'divider', then  his 'id' and 'text' equals empty string ('').
//
//    currentItem - item of 'itemList' that must be have class 'active' and selected as default
//    filter - boolean. If you need filter list with input then set true
//    inputProps - object with default attributes for filter input
//    buttonProps - object with default attributes for button
//    onChange - function that gets changed 'currentItem'
//    parentClass - add one or several class with space
//    placeholderOptionText - text to be used when currentItem is not in itemList (or absent)

import React from 'react';
import ReactDOM from 'react-dom';

class Select extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			openStatus: false,
			filterValue: ''
		};
	}

	// Click outside functionality (IE9+), part 1 of 1
	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside, false);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, false);
	}

	shouldComponentUpdate = (nextProps, nextState) => {
		let result = (
			nextProps.currentItem !== this.props.currentItem ||
			nextState.openStatus !== this.state.openStatus ||
			nextState.filterValue !== this.state.filterValue ||
			nextProps.itemList !== this.props.itemList ||
			nextProps !== this.props
		);

		return result;
	}

	handleClickOutside = (e) => {
		if (!ReactDOM.findDOMNode(this).contains(e.target)) {
			this.setState({ openStatus: false });
		}
	}
	// End click outside functionality, part 1 of 1


	handleClick = () => {
		this.setState({ openStatus: !this.state.openStatus });
	};

	filterList = (event) => {
		this.setState({ filterValue: event.target.value });
	}


	changeOption = (current) => {
		let onChange = this.props.onChange;

		this.setState({
			openStatus: false
		}, () => {
			onChange(current)
		});
	}

	render() {
		let {
				itemList,
				filter,
				currentItem,
				inputProps,
				parentClass,
				placeholderOptionText,
				buttonProps
			} = this.props,

			{ openStatus, filterValue } = this.state;

		if (!currentItem || itemList.indexOf(currentItem) === -1) {
			currentItem = { text: placeholderOptionText };
		}

		if (filter) {
			itemList = itemList.filter((item) => {
				return (item['text'].toLowerCase().indexOf(filterValue.toLowerCase()) > -1)
			});
		}

		return (
			<div
				className={[
					'btn-dropdown-toggle-wrap btn-group dropdown',
					parentClass,
					(openStatus) ? ' open' : ''
				].join(' ')}

				role='combobox'
			>

				<button
					{...buttonProps}
					tabIndex='0'
					type='button'
					className='btn-dropdown-toggle'
					style={{ width: '100%' }}
					aria-label=''
					aria-haspopup='true'
					aria-expanded='true'
					title={currentItem.text}
					onClick={this.handleClick}
				>

					<span>{currentItem.text}</span>

					<span className='caret'/>
				</button>


				<ul className='dropdown-menu' role='listbox' style={{ width: '100%' }}>

					{(filter) ? (
						<li style={{ padding: '5px' }}>
							<input
								{...inputProps}
								tabIndex='-1'
								type='search'
								className='form-control ng-pristine ng-valid'
								style={{ width: '100%' }}
								value={filterValue}
								onChange={this.filterList}
							/>
						</li>
					) : (null)}

					{ itemList.map((item, id) => {

						if (item.type === 'divider') {
							return (
								<li className='divider' key={id}/>
							);
						}

						return (
							<li tabIndex={(currentItem === item) ? '0' : '-1'}
							    key={id}
							    className={(currentItem === item) ? 'active' : '' }
							    aria-selected={(currentItem === item) ? 'true' : 'false'}
							    onClick={() => {
								    this.changeOption(item)
							    }}
							>
								<a title={item['text']} tabIndex='-1'>{item['text']}</a>
							</li>
						);
					}) }
				</ul>
			</div>
		);

	}
}


Select.propTypes = {
	placeholderOptionText: React.PropTypes.string,
	itemList: React.PropTypes.array,
	currentItem: React.PropTypes.object
};
Select.defaultProps = {
	placeholderOptionText: '',
	itemList: [],
	currentItem: {}
};

export default Select;

/*
 * todo headers group
 * <li className='dropdown-header'>Default</li>
 *
 * todo add attribute aria-activedescendant to main idv with role combobox and filter input
 * */
