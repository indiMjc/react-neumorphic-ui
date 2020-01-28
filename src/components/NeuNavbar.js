/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { NavLink, withRouter } from 'react-router-dom';

const NeuNavbar = props => {
	const optionalContainerStyles = {
		display: props.containerDisplay || 'flex',
		justifyContent: props.containerJustify || 'space-between',
		alignItems: props.containerAlign || 'center',

		color: props.containerColor,
		fontSize: props.containerFontSize || '16px',
		fontWeight: props.containerFontWeight || 'bolder',

		height: props.containerHeight || '15vh',
		width: props.containerWidth || '80vw',

		backgroundColor: props.containerBgColor || 'ecedf1',

		margin: props.containerMargin || '0 auto',
		padding: props.containerPadding || '0 40px',

		borderRadius: props.containerRadius || '7px'
	};

	const optionalLinkStyles = {
		color: props.linkColor,
		fontSize: props.linkFontSize || '16px',
		fontWeight: props.linkFontWeight || 'bolder',

		height: props.linkHeight,
		width: props.linkWidth,

		backgroundColor: props.linkBgColor || '#ecedf1',

		padding: props.linkPadding || '10px 15px',

		borderRadius: props.linkRadius || '6px'
	};

	const containerStyles = css`
		box-shadow: -7px -7px 20px #fafbff, 7px 7px 20px #a6abbd;

		&:hover {
			box-shadow: inset -6px -6px 10px #fafbff, inset 6px 6px 20px #a6abbd;
			transform: scale(0.98);
		}

		&:focus {
			outline: 0;
		}
	`;

	const linkStyles = css`
		box-shadow: -6px -6px 10px rgba(255, 255, 255, 1), 7px 7px 20px #a6abbd;
		cursor: pointer;
		text-decoration: none;

		&:hover {
			box-shadow: inset -6px -6px 10px #fafbff, inset 6px 6px 20px #a6abbd;
			transform: scale(0.98);
		}

		&:active {
			color: black;
			box-shadow: inset -6px -6px 10px #fafbff, inset 10px 10px 20px #a6abbd;
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
							<NavLink
								key={link.to}
								exact={true}
								to={link.to}
								css={linkStyles}
								style={{ ...optionalLinkStyles }}
								activeStyle={{
									boxShadow: 'inset -6px -6px 10px #fafbff, inset 10px 10px 20px #a6abbd'
								}}
							>
								{link.text}
							</NavLink>
						);
					} else {
						return (
							<NavLink
								key={link.to}
								to={link.to}
								css={linkStyles}
								style={{ ...optionalLinkStyles }}
								activeStyle={{
									boxShadow: 'inset -6px -6px 10px #fafbff, inset 10px 10px 20px #a6abbd'
								}}
							>
								{link.text}
							</NavLink>
						);
					}
				})}
		</div>
	);
};

export default withRouter(NeuNavbar);
