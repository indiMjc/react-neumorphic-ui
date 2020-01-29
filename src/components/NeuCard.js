/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const NeuCard = props => {
	const optionalCardStyles = {
		display: props.display || 'block',
		flexDirection: props.flexDirection,
		justifyContent: props.justify,
		alignContent: props.align,

		height: props.height,
		width: props.width,

		minHeight: props.minHeight || '50px',
		minWidth: props.minWidth || '50px',

		backgroundColor: props.bgColor || '#ebf5fc',

		margin: props.margin || '0 auto',
		padding: props.padding || '0 40px',

		border: props.containerBorder || '1px solid #dae2e936',
		borderRadius: props.containerRadius || '7px'
	};

	const hover =
		props.hover &&
		`box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.7), inset 6px 6px 20px rgba(0, 0, 0, 0.05);
    transform: scale(0.98);
    `;

	const cardStyles = css`
		box-shadow: -7px -7px 10px #fafbff, 3px 3px 20px rgba(166, 171, 189, 0.5);

		&:hover {
			${hover}
		}
	`;

	return (
		<div css={cardStyles} style={{ ...optionalCardStyles }}>
			{props.children}
		</div>
	);
};

export default NeuCard;
