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

		minHeight: props.containerMinHeight,
		minWidth: props.containerMinWidth,

		backgroundColor: props.containerBgColor || '#ebf5fc',

		margin: props.containerMargin || '0 auto',
		padding: props.containerPadding || '0 40px',

		border: props.containerBorder || '1px solid #dae2e936',
		borderRadius: props.containerRadius || '7px'
	};

	const optionalLinkStyles = {
		color: props.linkColor,
		fontSize: props.linkFontSize || '16px',
		fontWeight: props.linkFontWeight || 'bolder',
		textDecoration: props.decoration || 'none',

		cursor: props.cursor || 'pointer',

		height: props.linkHeight,
		width: props.linkWidth,

		minHeight: props.linkMinHeight,
		minWidth: props.linkMinWidth,

		backgroundColor: props.linkBgColor || '#ebf5fc',

		padding: props.linkPadding || '10px 15px',

		border: props.linkBorder || '1px solid #dae2e936',
		borderRadius: props.linkRadius || '6px'
	};

	const containerHover =
		props.containerHover &&
		`box-shadow: inset -6px -6px 10px #fafbff, inset 6px 6px 20px rgba(166, 171, 189, 0.25);
	transform: scale(0.98);`;

	const containerStyles = css`
		box-shadow: -7px -7px 10px #fafbff, 3px 3px 20px rgba(166, 171, 189, 0.5);

		&:hover {
			${containerHover}
		}

		&:focus {
			outline: 0;
		}
	`;

	const linkHover =
		props.linkHover &&
		`
	box-shadow: inset -6px -6px 10px #fafbff, inset 6px 6px 20px rgba(166, 171, 189, 0.25);
	transform: scale(0.98);`;

	const linkStyles = css`
		box-shadow: -6px -6px 10px #fafbff, 3px 3px 15px rgba(166, 171, 189, 0.5);

		&:hover {
			${linkHover}
		}

		&:active {
			color: black;
			box-shadow: inset -6px -6px 10px #fafbff, inset 10px 10px 20px rgba(166, 171, 189, 0.25);
		}

		&:focus {
			outline: 0;
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
									boxShadow: 'inset -6px -6px 10px white, inset 0 0 25px rgba(166, 171, 189, 0.7)',
									transform: 'scale(0.96)'
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
									boxShadow: 'inset -6px -6px 10px white, inset 0 0 25px rgba(166, 171, 189, 0.7)',
									transform: 'scale(0.96)'
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
