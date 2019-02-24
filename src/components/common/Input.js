import React from "react";

class InputComponent extends React.Component {
	render() {
		const { forwardedRef, ...props } = this.props;

		return (
				<input ref={forwardedRef} {...props} />
		)
	}
}

const Input = React.forwardRef((props, ref) => {
	return (
		<InputComponent {...props} forwardedRef={ref}></InputComponent>
	);
});

export default Input;
