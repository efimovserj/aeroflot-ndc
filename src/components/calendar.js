// Full-blown calendar with different modes, using LP css classes

//	className - extra classes for outer div
//	initialOpen - initial state of calendar, false by default
//	isOpen - you may control the state with this prop
//	format - format sting for moment.js
//	initialValue - moment.js object for initial value, moment() by default
//	value - moment.js object for controlled datetime. If not passed, component
//		will handle the state value itself
//	initialMode - what time unit will calendar initially choose. Options:
//		days, months, years
//	mode - same as above, but for controlled datetime
//	minDate, maxDate - moment objects that define min-max dates allowable for
//		selection in calendar. Recommended (works nicely in months/years modes)
//	isAllowedDate - function that tests if date can be selected in
//		calendar. Works in days mode.
// disabled - to disable editing calendar
// isManualInputAllowed - user can enter date manually if he would like

//	TODO allow for non-moment objects to be passed as value and/or returned in
//		callbacks

import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import MaskedInput from "./maskedInput";

const isDateInvalid = function (date, minDate, maxDate, isAllowedDate, mode) {
	let result = false;

	if (minDate) {
		let dayEnd = moment(date).endOf("day");
		if (minDate.isAfter(dayEnd)) {
			result = true;
		}
	}
	if (maxDate) {
		let dayStart = moment(date).startOf("day");
		if (maxDate.isBefore(dayStart)) {
			result = true;
		}
	}
	if (mode === 'days') {
		if (isAllowedDate && !isAllowedDate(date)) {
			result = true;
		}
	}

	return result;
};

class YearsView extends React.Component {
	constructor(props) {
		super(props);

		this.offsetsTable = {
			37: -1,
			39: +1,
			38: -5,
			40: +5
		};
	}

	componentDidMount() {
		// $(React.findDOMNode(this.refs["tbody"])).find("button.active").focus();
	}

	move = (delta) => {
		let result = moment(this.props.value).add(delta, "years");
		this.props.onMove(result);
	};

	setYear = (year) => {
		let result = moment(this.props.value).year(year);
		this.props.onChange(result);
	};

	handleKeyDown = (e) => {
		let code = e.which,
			delta = this.offsetsTable[code];
		e.stopPropagation();
		if (delta) {
			this.move(delta);
		}
		else if (code === 13) {
			if (!this.isDisabled(this.props.value)) {
				this.props.onChange(this.props.value);
			}
		}
	};

	isDisabled = (date) => {
		let { minDate, maxDate } = this.props;

		if (minDate) {
			let yearEnd = moment(date).endOf("year");
			if (minDate.isAfter(yearEnd)) {
				return true;
			}
		}
		if (maxDate) {
			let yearStart = moment(date).startOf("year");
			if (maxDate.isBefore(yearStart)) {
				return true;
			}
		}

		return false;
	};

	render() {
		let { ariaKey, value, onEscalate, chosen } = this.props,
			ariaLabel = ariaKey + "-title",
			currentYear = value.year(),
			frameStart = Math.floor((moment(value).year() - 1) / 20) * 20 + 1,
			frameEnd = frameStart + 20 - 1;
		return (
			<table
				role="grid" tabIndex="0"
				onKeyDown={this.handleKeyDown}
				className="calendar-yearsview"
				aria-labelledby={ariaLabel}
			>

				<thead>
				<tr className="table-header-nav">
					<th colSpan="5">
						<button type="button" className="left-arrow pull-left" onClick={() => {
							this.move(-20)
						}} tabIndex="-1"><i className="lp-icon lp-icon-angle-left" /></button>
						<button id={ariaLabel} onClick={onEscalate} role="heading" aria-live="assertive"
						        aria-atomic="true" type="button" className="middle-btn" tabIndex="-1">
							<strong>{frameStart + " - " + frameEnd}</strong></button>
						<button type="button" className="right-arrow pull-right" onClick={() => {
							this.move(+20)
						}} tabIndex="-1"><i className="lp-icon lp-icon-angle-right"/></button>
					</th>
				</tr>
				</thead>

				<tbody ref="tbody">
				{[0, 1, 2, 3].map((valNotUsed, row) => {
					return (
						<tr key={row}>

							{[0, 1, 2, 3, 4].map((valNotUsed, col) => {
								let offset = row * 5 + col,
									year = frameStart + offset,

									y = moment(value).year(year),
									isDisabled = this.isDisabled(y),
									isChosen = y.isSame(chosen, "year");
								return (
									<td
										key={col} id={ariaKey + "-" + offset}
										className="text-center" role="gridcell"
										aria-disabled={String(isDisabled)}>

										<button
											type="button" style={{ width: "100%" }}
											className={
												"btn btn-default" +
												((isChosen) ? " btn-info" : "") +
												((currentYear === year) ? " active" : "")
											}
											disabled={isDisabled} tabIndex="-1"
											onClick={() => {
												this.setYear(year)
											}}>

											<span className={((isChosen) ? "text-info" : "")}>{year}</span>
										</button>
									</td>
								);
							})}
						</tr>
					);
				})}
				</tbody>
			</table>
		);
	}
}

class MonthsView extends React.Component {
	constructor(props) {
		super(props);

		this.offsetsTable = {
			37: -1,
			39: +1,
			38: -3,
			40: +3
		};
	}

	componentDidMount() {
		// $(React.findDOMNode(this.refs["tbody"])).find("button.active").focus();
	}

	move = (delta) => {
		let result = moment(this.props.value).add(delta, "months");
		this.props.onMove(result);
	};
	setMonth = (month) => {
		let result = moment(this.props.value).month(month);
		this.props.onChange(result);
	};
	handleKeyDown = (e) => {
		let code = e.which,
			delta = this.offsetsTable[code];
		e.stopPropagation();
		if (delta) {
			this.move(delta);
		}
		else if (code === 13) {
			if (!this.isDisabled(this.props.value)) {
				this.props.onChange(this.props.value);
			}
		}
	};
	isDisabled = (date) => {
		let { minDate, maxDate } = this.props;

		if (minDate) {
			let monthEnd = moment(date).endOf("month");
			if (minDate.isAfter(monthEnd)) {
				return true;
			}
		}
		if (maxDate) {
			let monthStart = moment(date).startOf("month");
			if (maxDate.isBefore(monthStart)) {
				return true;
			}
		}

		return false;
	};

	render() {
		let { ariaKey, value, onEscalate, chosen } = this.props,
			ariaLabel = ariaKey + "-title",
			currentMonth = value.month(),
			currentYear = value.year();
		return (
			<table
				role="grid" tabIndex="0"
				onKeyDown={this.handleKeyDown}
				className="calendar-monthsview"
				aria-labelledby={ariaLabel} >

				<thead>
				<tr className="table-header-nav">
					<th colSpan="4">
						<button type="button" className="left-arrow pull-left" onClick={() => {
							this.move(-12)
						}} tabIndex="-1"><i className="lp-icon lp-icon-angle-left"/></button>
						<button id={ariaLabel} onClick={onEscalate} role="heading" aria-live="assertive"
						        aria-atomic="true" type="button" className="middle-btn" tabIndex="-1">
							<strong>{currentYear}</strong></button>
						<button type="button" className="right-arrow pull-right" onClick={() => {
							this.move(+12)
						}} tabIndex="-1"><i className="lp-icon lp-icon-angle-right"/></button>
					</th>
				</tr>
				</thead>

				<tbody ref="tbody">
				{[0, 1, 2, 3].map((valNotUsed, row) => {
					return (
						<tr key={row}>

							{[0, 1, 2].map((valNotUsed, col) => {
								let offset = row * 3 + col,
									month = offset,

									m = moment(value).month(month),
									monthName = moment.months()[offset],
									isDisabled = this.isDisabled(m),
									isChosen = m.isSame(chosen, "month");
								return (
									<td
										key={col} id={ariaKey + "-" + offset}
										className="text-center" role="gridcell"
										aria-disabled={String(isDisabled)}>

										<button
											type="button" style={{ width: "100%" }}
											className={
												"btn btn-default" +
												((isChosen) ? " btn-info" : "") +
												((currentMonth === month) ? " active" : "")
											}
											disabled={isDisabled} tabIndex="-1"
											onClick={() => {
												this.setMonth(month)
											}}>

											<span className={((isChosen) ? "text-info" : "")}>{monthName}</span>
										</button>
									</td>
								);
							})}
						</tr>
					);
				})}
				</tbody>
			</table>
		);
	}
}

class DaysView extends React.Component {
	constructor(props) {
		super(props);

		this.offsetsTable = {
			37: -1,
			39: +1,
			38: -7,
			40: +7
		};
	}

	componentDidMount() {
		// $(React.findDOMNode(this.refs["tbody"])).find("button.active").focus();
	}

	move = (delta, period = "days") => {
		let result = moment(this.props.value).add(delta, period);
		this.props.onMove(result);
	};
	setMoment = (m) => {
		if (!this.isDisabled(m)) {
			this.props.onChange(m);
		}
	};
	handleKeyDown = (e) => {
		let code = e.which,
			delta = this.offsetsTable[code];
		e.stopPropagation();
		if (delta) {
			this.move(delta);
		}
		else if (code === 13) {
			this.setMoment(this.props.value);
		}
	};

	isDisabled = (date) => {
		let { minDate, maxDate, isAllowedDate } = this.props;

		if (minDate) {
			let dayEnd = moment(date).endOf("day");
			if (minDate.isAfter(dayEnd)) {
				return true;
			}
		}
		if (maxDate) {
			let dayStart = moment(date).startOf("day");
			if (maxDate.isBefore(dayStart)) {
				return true;
			}
		}
		return isAllowedDate && !isAllowedDate(date);


	};

	render() {
		let { ariaKey, value, chosen, onEscalate } = this.props,
			ariaLabel = ariaKey + "-title",

			frameStart = moment(value).startOf("month").startOf("week"),
			frameEnd = moment(value).endOf("month").endOf("week"),
			weeksCount = Math.ceil(frameEnd.diff(frameStart, "days") / 7),
			currentOffset = value.diff(frameStart, "days"),

			currentMonth = value.format("MMMM"),
			currentYear = value.year();

		return (
			<table
				role="grid" tabIndex="0"
				onKeyDown={this.handleKeyDown}
				className="calendar-daysview"
				aria-labelledby={ariaLabel}
				>

				<thead>
				<tr className="table-header-nav">
					<th colSpan="7">
						<button type="button" className="left-arrow pull-left" onClick={() => {
							this.move(-1, "months")
						}} tabIndex="-1"><i className="lp-icon lp-icon-angle-left"/></button>
						<button id={ariaLabel} onClick={onEscalate} role="heading" aria-live="assertive"
						        aria-atomic="true" type="button" className="middle-btn" tabIndex="-1">
							<strong>{currentMonth + " " + currentYear}</strong></button>
						<button type="button" className="right-arrow pull-right" onClick={() => {
							this.move(+1, "months")
						}} tabIndex="-1"><i className="lp-icon lp-icon-angle-right"/></button>
					</th>
				</tr>
				<tr className="table-header-col-names">
					{[0, 1, 2, 3, 4, 5, 6].map((valNotUsed, col) => {
						let d = moment(value).weekday(col);
						return (
							<th key={col} className="text-center">
								<small aria-label={d.format("dddd")}>{d.format("ddd")}</small>
							</th>
						);
					})}
				</tr>
				</thead>

				<tbody ref="tbody">
				{Array.apply(null, new Array(weeksCount)).map((valNotUsed, row) => {
					return (
						<tr key={row}>

							{[0, 1, 2, 3, 4, 5, 6].map((valNotUsed, col) => {
								let offsetToFrameStart = row * 7 + col,

									d = moment(frameStart).add(offsetToFrameStart, "days"),
									isDisabled = this.isDisabled(d),
									isChosen = d.isSame(chosen, "day"),
									isCurrentMonth = d.isSame(value, "month");
								return (
									<td
										key={col} id={ariaKey + "-" + offsetToFrameStart}
										className="text-center" role="gridcell"
										aria-disabled={String(isDisabled)}>

										<button
											type="button" style={{ width: "100%" }}
											className={
												"btn btn-default" +
												((currentOffset === offsetToFrameStart) ? " active" : "") +
												((isChosen) ? " btn-info" : "") +
												((!isCurrentMonth) ? " btn-muted" : "")
											}
											disabled={isDisabled} tabIndex="-1"
											onClick={() => {
												this.setMoment(d)
											}}>

												<span className={
													((isChosen) ? " text-info" : "") +
													((!isCurrentMonth) ? " text-muted" : "")
												}>
													{d.date()}
												</span>
										</button>
									</td>
								);
							})}
						</tr>
					);
				})}
				</tbody>
			</table>
		);
	}
}


let calendarComponents = {
	days: DaysView,
	months: MonthsView,
	years: YearsView
};

class Calendar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: props.value || props.initialValue,
			calendarValue: moment(props.value || props.initialValue),
			isOpen: props.isOpen || props.initialOpen,
			mode: props.mode || props.initialMode,
			ariaKey: "datepicker-" + Math.round(Math.random() * 10000),
			isError: false
		}
	}

	// Click outside functionality (IE9+), part 1 of 1
	componentDidMount() {
		document.addEventListener('click', this.handleClickOutside, true);
		if (this.props.isManualInputAllowed) {
			this.refs["calendarMaskedInput"].trySetValue(this.getFormattedDate().replace(/[.]/g, ''), false);
		}
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleClickOutside, true);
	}

	handleClickOutside = (e) => {
		if (!ReactDOM.findDOMNode(this).contains(e.target)) {
			this.setState({ isOpen: false });
		}
	};
	// End click outside functionality, part 1 of 1


	componentWillReceiveProps(nextProps) {
		let result = {};
		if (typeof(nextProps.isOpen) === "boolean") {
			result.isOpen = nextProps.isOpen;
		}
		if (moment.isMoment(nextProps.value)) {
			result.value = nextProps.value;
		}
		if (typeof(nextProps.mode) === "string") {
			result.mode = nextProps.mode;
		}

		if (this.props.isManualInputAllowed && !(this.state.value.isSame(result.value))) {
			this.refs["calendarMaskedInput"].trySetValue(this.getFormattedDate(result.value).replace(/[.]/g, ''), false);
		} // set manual input
		else {
			this.setState(result);
		}
	}

	open = () => {
		if (!this.props.disabled) this.setState({ isOpen: true });
	};

	toggle = () => {
		if (!this.props.disabled) {
			if (this.state.isOpen) {
				this.setState({ isOpen: false });
			}
			else {
				this.setState({ isOpen: true });
			}
		}
	};

	getFormattedDate = (value = this.state.value, format = this.props.format) => {
		return value.format(format);
	};

	handleChange = (newVal) => {
		let { modesOrder } = this.props,
			{ mode } = this.state,
			newMode = modesOrder[modesOrder.indexOf(mode) + 1],
			result = {};

		result["value"] = newVal;
		result["calendarValue"] = newVal;
		if (newMode) {
			result["mode"] = newMode;
			// console.log('mode', newMode);
		}
		else {
			result["isOpen"] = false;
		}

		if (this.props.isManualInputAllowed) {
			this.setState(result, this.refs["calendarMaskedInput"].trySetValue(this.getFormattedDate(newVal).replace(/[.]/g, ''), false));
		} // set manual input
		else {
			this.setState(result, () => {
				this.props.onChange(newVal)
			});
		}
	};

	handleEscalate = () => {
		let { modesOrder } = this.props,
			{ mode } = this.state,
			newMode = modesOrder[modesOrder.indexOf(mode) - 1],
			result = {};

		if (newMode) {
			result["mode"] = newMode;
			this.setState(result);
		}

	};

	// Helper functions that are handling manual input **START**
	isManualInputValid = (testedValue) => {
		let result = false;
		if (testedValue.isValid) {
			testedValue = moment(testedValue.formattedValue, this.props.format);
			if (testedValue.isValid()) {
				let { minDate, maxDate, isAllowedDate, mode } = this.props;
				result = !isDateInvalid(testedValue, minDate, maxDate, isAllowedDate, mode);
			}
		}

		return result;
	};
	handleManualInput = (newVal) => {
		/*** {value: "31013000", formattedValue:31-01-3000, isValid: false} ***/
		// console.log('Calendar :: handleManualInput :: ', newVal);
		if (this.props.disabled) {
			return;
		}
		let valid = this.isManualInputValid(newVal);
		let result = { isError: !valid };
		if (!this.state.isError) {
			if (valid) {
				result.value = moment(newVal.value, this.props.format);
				result.calendarValue = moment(newVal.value, this.props.format);
				this.setState(result, () => {
					this.props.onChange({ value: result.value, isValid: valid })
				});
			}
			else {
				this.setState(result, () => {
					this.props.onChange({ value: this.props.value, isValid: valid })
				});
			}
		}
		else if (this.state.isError && valid) {
			result.value = moment(newVal.value, this.props.format);
			result.calendarValue = moment(newVal.value, this.props.format);
			this.setState(result, () => {
				this.props.onChange({ value: result.value, isValid: valid })
			});
		}

		// console.log(result, this.state);
	};
	// Helper functions that are handling manual input **END**

	render() {
		let { className, isAllowedDate, minDate, maxDate, isManualInputAllowed } = this.props,
			{ isOpen, mode, value, calendarValue, ariaKey } = this.state,
			Calendar = calendarComponents[mode];

		return (
			<div className={"date-picker" + ((className) ? " " + className : "")}>

				{isManualInputAllowed ?
					<MaskedInput
						inputProps={{
							className: "form-control"
						}}
						backdrop={false}
						onClick={this.toggle}
						disabled={this.props.disabled}
						ref='calendarMaskedInput'
						fireChangeOn="key"
						allowMouseClickPropagate={true}
						onChange={this.handleManualInput}
						detailedMask={[
							{ regexp: "[0-3]", placeholder: "D" },
							{ symbol: "9", placeholder: "D" },
							{ char: "." },
							{ regexp: "[0-1]", placeholder: "M" },
							{ symbol: "9", placeholder: "M" },
							{ char: "." },
							{ regexp: "[1-2]", placeholder: "Y" },
							{ regexp: "[09]", placeholder: "Y" },
							{ symbol: "9", placeholder: "Y" },
							{ symbol: "9", placeholder: "Y" }
						]}/>
					:
					<input
						value={this.getFormattedDate()}
						onChange={function () {/*To squelch Reactjs warning 'no onChange whilst value is present'*/
						}}
						onClick={this.toggle}
						disabled={this.props.disabled}
						type="text" className="form-control"
						tabIndex="0"
						placeholder="select date" aria-label="select date"/>
				}

				<ul className="dropdown-menu lp-datepicker"
				    style={{ display: (isOpen) ? "block" : "none" }}>
					<li>
						<div role="application">
							<Calendar
								value={calendarValue}
								isAllowedDate={isAllowedDate}
								minDate={minDate}
								maxDate={maxDate}
								chosen={value}
								onChange={this.handleChange}
								onMove={(newVal) => {
									this.setState({ calendarValue: newVal })
								} }
								onEscalate={this.handleEscalate}
								ariaKey={ariaKey}/>
						</div>
					</li>
				</ul>

				<span
					onClick={this.toggle}
					className="lp-icon lp-icon-calendar calendar-icon"/>
			</div>
		);
	}
}
function momentPropCheck(props, propName, componentName) {
	if (props[propName] && !moment.isMoment(props[propName])) {
		return new Error(`Non-moment object passed as ${propName} for ${componentName}`);
	}
}
let modes = ["years", "months", "days"];
Calendar.propTypes = {
	onChange: React.PropTypes.func,
	isAllowedDate: React.PropTypes.func,
	minDate: momentPropCheck,
	maxDate: momentPropCheck,
	className: React.PropTypes.string,
	format: React.PropTypes.string,
	initialOpen: React.PropTypes.bool,
	isOpen: React.PropTypes.bool,
	initialValue: momentPropCheck,
	value: momentPropCheck,
	initialMode: React.PropTypes.oneOf(modes),
	mode: React.PropTypes.oneOf(modes),
	disabled: React.PropTypes.bool,
	isManualInputAllowed: React.PropTypes.bool
};
Calendar.defaultProps = {
	onChange: function (newVal) {
		console.log('New outer change val', newVal)
	},
	className: "",
	format: "DD-MM-YYYY",
	initialOpen: false,
	initialValue: moment(),
	initialMode: "days",
	disabled: false,
	isManualInputAllowed: false,

	modesOrder: modes,
	minDate: moment()
};


export default Calendar;
