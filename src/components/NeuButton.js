/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const NeuButton = props => {
	const optionalBtnStyles = {
		width: props.width,
		height: props.height,

		minHeight: props.minHeight || '50px',
		minWidth: props.minWidth || '50px',

		backgroundColor: props.bgColor || 'rgb(235, 245, 252)',

		color: props.color,
		fontSize: props.fontSize || '16px',
		fontWeight: props.fontWeight || 'bolder',

		padding: props.padding || '10px 15px',
		margin: props.margin,

		border: props.border || '0.5px solid rgba(235, 245, 252, 0.05)',
		borderRadius: props.borderRadius || '6px'
	};

	const btnStyles = css`
		box-shadow: -6px -6px 20px rgba(255, 255, 255, 1), 6px 6px 20px rgba(0, 0, 0, 0.1);
		cursor: pointer;

		&:hover {
			box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.7), inset 6px 6px 20px rgba(0, 0, 0, 0.05);
			transform: scale(0.98);
		}

		&:active {
			box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.7), inset 6px 6px 20px rgba(0, 0, 0, 0.1);
		}

		&:focus {
			outline: 0;
		}
	`;

	const handleClick = e => {
		e.preventDefault();
		props.clickFn && props.clickFn();
	};

	return (
		<button
			type={props.type}
			disabled={props.disable || false}
			css={btnStyles}
			style={{ ...optionalBtnStyles }}
			onClick={handleClick}
		>
			{props.text || props.children}
		</button>
	);
};

export default NeuButton;
