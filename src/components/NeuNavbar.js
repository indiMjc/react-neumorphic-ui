/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link, withRouter } from 'react-router-dom';

const NeuNavbar = props => {
	const optionalContainerStyles = {
		justifyContent: props.containerJustify || 'space-between',
		alignItems: props.containerAlign || 'center',

		width: props.containerWidth || '80vw',
		height: props.containerHeight || '15vh',

		backgroundColor: props.containerBgColor || 'rgb(235, 245, 252)',

		color: props.containerColor,
		fontSize: props.containerFontSize || '16px',
		fontWeight: props.containerFontWeight || 'bolder',

		margin: props.containerMargin || '0 auto',
		padding: props.containerPadding || '0 40px',

		border: props.containerBorder || '0.5px solid rgba(235, 245, 252, 0.05)',
		borderRadius: props.containerRadius || '7px'
	};

	const optionalLinkStyles = {
		// backgroundColor: props.linkBgColor || '#ecedf1',
		backgroundImage: 'linear-gradient(to bottom right, #ebf5fc, #ecedf1)',
		padding: props.linkPadding || '10px 15px',
		borderRadius: props.linkRadius || '6px'
	};

	const containerStyles = css`
		display: flex;
		box-shadow: -6px -6px 20px rgba(255, 255, 255, 1), 6px 6px 20px rgba(0, 0, 0, 0.2);

		&:hover {
			box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.7), inset 6px 6px 20px rgba(0, 0, 0, 0.05);
			transform: scale(0.98);
		}

		&:focus {
			outline: 0;
		}
	`;

	const linkStyles = css`
		box-shadow: -6px -6px 10px rgba(255, 255, 255, 1), 6px 6px 15px rgba(0, 0, 0, 0.2);
		cursor: pointer;
		text-decoration: none;

		&:hover {
			box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.7), inset 6px 6px 20px rgba(0, 0, 0, 0.05);
			transform: scale(0.98);
		}

		&:active {
			color: black;
			box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.7), inset 6px 6px 20px rgba(0, 0, 0, 0.1);
		}

		&:focus {
			outline: 0;
		}

		&:visited {
			color: black;
		}
	`;

	return (
		<div css={containerStyles} style={{ ...optionalContainerStyles }}>
			{props.links &&
				props.links.map((link, index) => {
					if (index === 0) {
						return (
							<Link
								key={link.to}
								exact='true'
								to={link.to}
								css={linkStyles}
								style={{ ...optionalLinkStyles }}
								activeStyle={{ color: props.activeStyle || 'black' }}
							>
								{link.text}
							</Link>
						);
					} else {
						return (
							<Link
								key={link.to}
								to={link.to}
								css={linkStyles}
								style={{ ...optionalLinkStyles }}
								activeStyle={{ color: props.activeStyle || 'black' }}
							>
								{link.text}
							</Link>
						);
					}
				})}
		</div>
	);
};

export default withRouter(NeuNavbar);
