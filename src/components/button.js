import React from 'react';
import library from "../lib/library";

class Button extends React.Component {
	render() {
		let {
				onChange,
				title,
				buttonProps
			} = this.props;

		return (
			<button onClick={onChange} {...buttonProps}>{title}</button>
		);

	}
}


Button.propTypes = {
	onChange: React.PropTypes.func,
	title: React.PropTypes.string,
};
Button.defaultProps = {
	onChange: library.lib.noop,
	title: 'Next Step',
};

export default Button;