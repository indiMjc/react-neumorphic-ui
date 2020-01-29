/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const NeuInput = props => {
	const divStyle = {
		// display: 'flex',
		// flexDirection: 'column-reverse'
	};

	const optionalStyles = {
		margin: props.inputMargin || '10px 0 0',
		fontSize: props.fontSize || '16px'
	};

	return (
		<div style={{ ...divStyle }}>
			<label>
				{props.label}
				{props.type === 'checkbox' ? (
					<input
						type={props.type}
						name={props.name}
						checked={props.checked}
						onChange={props.onChange}
						style={{ ...optionalStyles }}
					/>
				) : (
					<input
						type={props.type}
						name={props.name}
						value={props.value}
						onChange={props.onChange}
						placeholder={props.placeholder}
						style={{ ...optionalStyles }}
					/>
				)}
			</label>
		</div>
	);
};

export default NeuInput;
