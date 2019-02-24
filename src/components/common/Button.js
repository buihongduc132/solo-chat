import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
	render() {
		const { text, ...props } = this.props;
		return <button {...props}>{text}</button>;
	}
}

Button.propTypes = {
	text: PropTypes.string.isRequired
}

export default Button;
