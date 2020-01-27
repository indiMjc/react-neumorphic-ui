import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NeuNavbar = props => {
	return (
		<div>
			{props.links &&
				props.links.map((link, index) => {
					if (index === 0) {
						return (
							<Link key={link.to} exact='true' to={link.to}>
								{link.text}
							</Link>
						);
					} else {
						return (
							<Link key={link.to} to={link.to}>
								{link.text}
							</Link>
						);
					}
				})}
		</div>
	);
};

export default withRouter(NeuNavbar);
