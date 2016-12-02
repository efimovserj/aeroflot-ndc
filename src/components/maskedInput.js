// Input with mask: static characters, generic masks and custom injected masks.

// Simplest case:
//	<MaskedInput simpleMask="+7(999)999-99-99" onChange=this.handleAnyInput />

// More comprehensive:
//	<MaskedInput
//		simpleMask="+7(9^9)999-99-99"
//		placeholder="_"
//		extraSymbols={[{symbol: "^", regexp: "[0-2]", placeholder: "?"}]}
//		backdrop={true}
//		fireChangeOn="blurValid"
//		onChange=this.handleCorrectInput
//	/>

//	simpleMask is a string of symbols. Those not in default symbols
//		(currently '9', 'Z' and 'Я') or extraSymbols are treated as
//		constant chars.

//	extraSymbols is an array of objects containing
//		symbol, its regexp or test function, and optional placeholder

//	detailedMask - array of objects with one of the following fields:
//		char - constant character
//		symbol - symbol with its test function or regexp defined in default
//					symbols or extraSymbols
//		regexp - symbol with this test regexp
//		test - symbol with this test function
//		(placeholder - optional)
//
//	For example:
/*
 detailedMask={[
 {char: "+"},
 {char: "("},
 {symbol: "9"},
 {regexp: "[0-2]"},
 {symbol: "9"},
 {char: ")"},
 {symbol: "9", placeholder: "x"},
 {symbol: "9", placeholder: "x"},
 {symbol: "9", placeholder: "x"},
 {symbol: "9", placeholder: "x"},
 {symbol: "9", placeholder: "x"},
 {symbol: "9", placeholder: "x"},
 {symbol: "9", placeholder: "x"}
 ]}
 */

//	placeholder - default placeholder for symbols

//	backdrop - second <input> absolutely positioned behind first, e.g. for
//		mask of different color.

//	fireChangeOn - one of key/blur/keyValid/blurValid
//		TODO blur/blurValid to include "enter" keypress

//	resultValidator - function or regexp to test full value string against, in
//		addition to individual symbols test against mask.

//	allowCursorMove - whether to allow cursor to be elsewhere rather than end of
//		input. TODO Not implemented yet.

//	onChange - function that is passed a single argument of
//		the format {isValid: bool, value: string}, e.g.
//		{value: "903373000", isValid: false}

//	initialValue - OBSOLETE external value to pass as an initial input. Setting
//		value is done via ref.trySetValue() now, so prop is obsolete.

//	wrapperClass - class for div wrapper
//	inputProps - spread-passed to main <input> element


//TODO:
// isValid allowance for empty - for partial default value
// implement allowCursorMove
// componentWillReceiveProps stuff! Changing mask will break component

import React from "react";
import ReactDOM from "react-dom";
import library from "../lib/library";

const DEFAULTS = {
	"standardSymbols": [
		{
			symbol: "9",
			regexp: '[\\d]' //String literal problem. We have to escape slash
		},
		{
			symbol: "Z",
			regexp: '[a-zA-Z]'
		},
		{
			symbol: "Я",
			regexp: '[a-zA-Zа-яА-ЯёЁ]'
		},
	],
	"movementCodes": [
		33, 34, 35, 36,
		37, 38, 39, 40,
	],
	"keyCodes": {
		46: "delete",
		8: "backspace",
		9: "tab"
	}
};

//TODO This should be a part of our common library...
// http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
//   (but actually we don't use it...)
const e = /[-\/\\^$*+?.()|[\]{}]/g;
RegExp.escape = function (s) {
	return s.replace(e, '\\$&');
};

class MaskedInput extends React.Component {
	constructor(props) {
		super(props);
		let mask = this.generateMask(props),
			cursorIndex = this.getNextValIndex(-1, false, mask),
			value = new Array(mask.length);

		/*	Commented because setting value is now done via ref.trySetValue()

		 if (props.initialValue) {
		 let valueGenerated = this.generateValue(props.initialValue, mask);
		 if (this.isValid(valueGenerated, false, mask)) {
		 value = valueGenerated;
		 cursorIndex = this.getLastGapStart(value, false, mask);
		 }
		 else {
		 console.warn("Non-valid initial value passed to MaskedInput; using empty instead");
		 }
		 }
		 */

		this.state = {
			cursorIndex: cursorIndex,
			mask: mask,
			value: value
		};

		this.getInputString = (!props.backdrop)
			? this.getFullInputString
			: (props.allowCursorMove)
			? this.getHoleyInputString
			: this.getTruncatedInputString
	}

	componentDidMount() {
		//Set cursor to first variable symbol
		// Commented because there can be several masks on page
		/*		React.findDOMNode(this.refs["inputElement"])
		 .setSelectionRange(this.state.cursorIndex, this.state.cursorIndex); */
	}

	getTestFunction(test) {
		if (!test) {
			return test;
		}

		if (typeof(test) === "function") {
			return test;
		}
		else {
			let regexpCompiled = (test instanceof RegExp)
				? test
				: new RegExp(test);
			return function (val) {
				return regexpCompiled.test(val)
			}
		}
	}

	generateMask = (props) => {
		let { extraSymbols, simpleMask, detailedMask, placeholder } = props,
			symbols = {},
			result = [];

		DEFAULTS["standardSymbols"].concat(extraSymbols || [])
			.forEach((el) => {
				symbols[el.symbol] = {
					placeholder: el.placeholder || placeholder,
					test: (typeof(el.test) === "function")
						? el.test
						: this.getTestFunction(el.regexp)
				};
			});

		if (detailedMask) {
			detailedMask.forEach((el) => {
				let piece;
				if (el.char) {
					piece = {
						type: "char",
						placeholder: el.char
					}
				}
				else if (el.symbol && symbols[el.symbol]) {
					piece = {
						type: "val",
						placeholder: el.placeholder || symbols[el.symbol].placeholder || placeholder,
						test: symbols[el.symbol].test
					}
				}
				else if (el.regexp) {
					piece = {
							type: "val",
							placeholder: el.placeholder || placeholder,
							test: this.getTestFunction(el.regexp)
						}
				}
				else if (el.test) {
					piece = {
							type: "val",
							placeholder: el.placeholder || placeholder,
							test: el.test
						}
				}
				else {
					console.warn(`Incorrect detailedMask format for ${el}`);
				}

				result.push(piece);
			});
		}
		else if (simpleMask) {
			simpleMask.split("").forEach((el) => {
				if (symbols[el]) {
					result.push({
						type: "val",
						placeholder: symbols[el].placeholder || placeholder,
						test: symbols[el].test
					});
				}
				else {
					result.push({
						type: "char",
						placeholder: el
					});
				}
			});
		}

		if (result.length === 0) {
			console.warn('Generated zero-length mask; check props for MaskedInput')
		}
		return result;
	}
	generateValue = (valueString, mask) => {
		let result = new Array(mask.length),
			source = valueString.split("");
		for (let i = 0; i < mask.length; i++) {
			if (mask[i].type === "val") {
				result[i] = source.shift();
			}
		}
		return result;
	}

	getValueString = (value = this.state.value) => {
		return value.join("");
	}
	getFullInputString = () => {
		let { mask, value } = this.state,
			defaultPlaceholder = this.props.placeholder,
			result = "";

		for (let i = 0; i < mask.length; i++) {
			result += value[i] || mask[i].placeholder || defaultPlaceholder;
		}
		return result;
	}
	getHoleyInputString = () => {
		let { mask, value } = this.state,
			result = "";

		for (let i = 0; i < mask.length; i++) {
			result += value[i] || " ";
		}
		return result;
	}
	getTruncatedInputString = () => {
		let { cursorIndex, mask, value } = this.state,
			defaultPlaceholder = this.props.placeholder,
			result = "";

		for (let i = 0; i < cursorIndex; i++) {
			result += value[i] || mask[i].placeholder || defaultPlaceholder;
		}
		return result;
	}

	getNextValIndex = (idx = 0, nullIfNone = false, mask = this.state.mask) => {
		// Get index of next variable symbol in mask relative to given idx, or end if no var.symbols left
		for (let i = idx + 1; i < mask.length; i++) {
			if (mask[i].type === "val") {
				return i;
			}
		}
		return (nullIfNone) ? null : mask.length;
	}
	getPrevValIndex = (idx = this.state.mask.length, nullIfNone = false, mask = this.state.mask) => {
		// Get index of previous variable symbol (see above)
		for (let i = idx - 1; i >= 0; i--) {
			if (mask[i].type === "val") {
				return i;
			}
		}
		return (nullIfNone) ? null : 0;
	}
	getLastGapStart = (value, nullIfNone = false, mask) => {
		//Get start index of last series of undefined symbols.
		//Generally to put cursor there
		let gapStarts = mask.length;
		for (let i = mask.length - 1; i >= 0; i--) {
			if (mask[i].type !== "val") continue;
			if (!!value[i]) {
				return gapStarts;
			}
			else {
				gapStarts = i;
			}
		}
		return (nullIfNone) ? null : gapStarts;
	}

	isValid = (value, disallowIncompleteValue = true, mask = this.state.mask) => {
		let resultValidator = this.getTestFunction(this.props.resultValidator);

		if (resultValidator
			&& !resultValidator(this.getValueString(value))) {

			return false;
		}


		if (disallowIncompleteValue) {
			for (let i = 0; i < mask.length; i++) {
				if (mask[i].type === "val" && (!mask[i].test(value[i] || ""))) {
					return false;
				}
			}
		}
		else {
			for (let i = 0; i < mask.length; i++) {
				if ((mask[i].type === "val") && value[i] && (!mask[i].test(value[i]))) {
					return false;
				}
			}
		}

		return true;
	}

	handleKeyDown = (e) => {
		// Check movement stuff here, incl. del and backspace.
		let code = e.which,
			idx = e.target.selectionStart,
			{ mask } = this.state;

		if (!this.props.allowCursorMove) {
			if (DEFAULTS["movementCodes"].indexOf(code) > -1 || DEFAULTS["keyCodes"][code] === "delete") {
				e.preventDefault();
				e.stopPropagation();
			}
			else if (DEFAULTS["keyCodes"][code] === "tab") {
				//Allow native Tab behaviour
			}
			else if (DEFAULTS["keyCodes"][code] === "backspace") {
				let prevVar = this.getPrevValIndex(idx, true);
				e.preventDefault();
				e.stopPropagation();
				if (prevVar !== null) {
					delete this.state.value[prevVar];
					this.change(this.state.value, prevVar);
				}
			}
			else if (idx >= mask.length || mask[idx].type === "char") {
				e.preventDefault();
				e.stopPropagation();
			}
			else {
				//Everything seems to be OK, let trigger keypress
			}
		}

		else console.warn('allowCursorMove not implemented');
	}
	handleKeyPress = (e) => {
		// ...(assume valid cursor position - checks done at keydown)
		// Got actual character, now we can check its validity
		let char = String.fromCharCode(e.which),
			idx = e.target.selectionStart,
			{ mask } = this.state,
			isValid = mask[idx].test(char);

		e.preventDefault();
		e.stopPropagation();

		if (isValid) {
			let tempValue = [];
			tempValue[idx] = char;
			this.setState({ value: tempValue});
			this.change(this.state.value, this.getNextValIndex(idx));
		}
	}
	handleCut = () => {
		//Disallow cut for now
		e.preventDefault();
		e.stopPropagation();
	}
	handlePaste = () => {
		//Disallow paste for now
		e.preventDefault();
		e.stopPropagation();
	}
	handleMouseDown = (e) => {
		let inputEl = ReactDOM.findDOMNode(this.refs["inputElement"]);
		inputEl.focus();
		setTimeout(() => {
			inputEl.setSelectionRange(this.state.cursorIndex, this.state.cursorIndex)
		}, 0);
		e.preventDefault();
		if (this.props.allowMouseClickPropagate === false) {
			e.stopPropagation();
		}
	}
	handleFocus = (e) => {
		let inputEl = ReactDOM.findDOMNode(this.refs["inputElement"]);
		setTimeout(() => {
			inputEl.setSelectionRange(this.state.cursorIndex, this.state.cursorIndex)
		}, 0);
	}
	handleBlur = () => {
		let isValid = this.isValid(this.state.value, true);

		if ((this.props.fireChangeOn === "blur"
			|| this.props.fireChangeOn === "blurValid") && isValid) {

			this.props.onChange(
				{
					value: this.getValueString(this.state.value),
					isValid: isValid
				}
			);
		}
	}

	change = (value, cursorIndex) => {
		//Handles setting state, cursor position and calling onChange callbacks

		let inputEl = ReactDOM.findDOMNode(this.refs["inputElement"]);

		this.setState({ value: value, cursorIndex: cursorIndex }, () => {
			inputEl.setSelectionRange(this.state.cursorIndex, this.state.cursorIndex);
			let isValid = this.isValid(this.state.value, true);
			if ((this.props.fireChangeOn === "key")
				|| (this.props.fireChangeOn === "keyValid" && isValid)) {

				this.props.onChange(
					{
						value: this.getValueString(this.state.value),
						formattedValue: this.getFullInputString(),
						isValid: isValid
					}
				);
			}
		});
	}


	trySetValue = (val, forceSet = false) => {
		let { mask } = this.state;

		if (typeof(val) !== "string") {
			console.warn("Non-string passed to trySetValue() method! Not setting value");
			return false;
		}

		let valueGenerated = this.generateValue(val, mask),
			cursorIndex = this.getLastGapStart(valueGenerated, false, mask);

		if (!forceSet && !this.isValid(valueGenerated, false, mask)) {
			console.warn("Non-valid value passed to trySetValue() method! Not setting value");
			return false;
		}

		this.change(valueGenerated, cursorIndex);
	}

	mobilecheck() {
		if (navigator.userAgent.match(/Android/i)
			|| navigator.userAgent.match(/webOS/i)
			|| navigator.userAgent.match(/iPhone/i)
			|| navigator.userAgent.match(/iPad/i)
			|| navigator.userAgent.match(/iPod/i)
			|| navigator.userAgent.match(/BlackBerry/i)
			|| navigator.userAgent.match(/Windows Phone/i)
		) {
			return true;
		}
		else {
			return false;
		}
	}

	sendValue(e) {
		this.props.onChange({
			value: e.target.value,
			isValid: true
		});
	}


	render() {
		let { wrapperClass, backdrop, inputProps } = this.props,
			isValid = this.isValid(this.state.value, true),
			fullWrapperClass = ["masked-input", wrapperClass || "", (isValid) ? "valid" : "invalid"].join(" "),

			fullInputClass = ["masked-input-value", inputProps && (inputProps["className"] || "")].join(" "),
			type = window.isMobile ? this.props.hintType : this.props.type;
		//okSelectionAttributeType = (/text|password|search|tel|url/).test(type);

		return (
			<div className={fullWrapperClass}>

				{(this.mobilecheck()) ? (
					<input
						tabIndex="1"
						{...inputProps}
						className={fullInputClass}
						ref="inputElement"
						value={this.state.mobileValue}
						autoComplete="off"
						type={type}
						onChange={(e) => {
							this.setState({ mobileValue: e.target.value }, this.sendValue(e))
						}}/>
				) : (
					<input
						tabIndex="1"
						{...inputProps}
						className={fullInputClass}
						ref="inputElement"
						value={this.getInputString()}
						autoComplete="off"
						type={type}
						onChange={library.lib.noop}
						onKeyDown={this.handleKeyDown}
						onKeyPress={this.handleKeyPress}
						onCut={this.handleCut}
						onPaste={this.handlePaste}

						onMouseDown={this.handleMouseDown}
						onFocus={this.handleFocus}

						onBlur={this.handleBlur}/>
				)}

				{(!!backdrop)
					?
					<input
						tabIndex="-1"
						type={type}
						className="masked-input-backdrop"
						value={this.getFullInputString()}
						onChange={library.lib.noop}/>
					: null
				}
			</div>
		);
	}
}
MaskedInput.propTypes = {
//	initialValue: React.PropTypes.string,
	resultValidator: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func,
		React.PropTypes.instanceOf(RegExp)
	]),

	placeholder: React.PropTypes.string,
	allowCursorMove: React.PropTypes.bool,
	fireChangeOn: React.PropTypes.oneOf(['keyValid', 'blurValid', 'key', 'blur']),

	wrapperClass: React.PropTypes.string
};
MaskedInput.defaultProps = {
//	initialValue: null,
	resultValidator: null,

	placeholder: "_",
	allowCursorMove: false,
	allowMouseClickPropagate: false,
	fireChangeOn: "key",

	wrapperClass: null
};

MaskedInput.DEFAULTS = DEFAULTS; // This is to check against standard symbols in case we convert from external mask


export default MaskedInput;
