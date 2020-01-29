/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const NeuInput = props => {
	const containerStyle = {
		display: props.containerDisplay || 'flex',
		justifyContent: props.containerJustify || 'flex-end',
		width: props.containerWidth
	};

	const labelStyle = {
		fontSize: props.labelFontSize || '16px'
	};

	const inputStyles = {
		margin: props.inputMargin || '10px 0 0',
		fontSize: props.fontSize || '16px'
	};

	return (
		<div style={{ ...containerStyle }}>
			<label style={{ ...labelStyle }}>
				{props.label}
				{props.type === 'checkbox' ? (
					<input
						type={props.type}
						name={props.name}
						checked={props.checked}
						onChange={props.onChange}
						style={{ ...inputStyles }}
					/>
				) : (
					<input
						type={props.type}
						name={props.name}
						value={props.value}
						onChange={props.onChange}
						placeholder={props.placeholder}
						style={{ ...inputStyles }}
					/>
				)}
			</label>
		</div>
	);
};

export default NeuInput;
