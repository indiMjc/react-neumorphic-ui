import React from 'react';
import CardWithButton from './components/CardWithButton';
import NeuButton from './components/NeuButton';
import NeuNavbar from './components/NeuNavbar';

const links = [
	{
		text: 'Home',
		to: '/'
	},
	{
		text: 'Login',
		to: '/login'
	},
	{
		text: 'Register',
		to: '/register'
	},
	{
		text: 'My account',
		to: '/my_account'
	}
];

function App() {
	const testingClick = () => console.log('clicked');
	return (
		<div className='App'>
			<CardWithButton />
			<NeuButton
				text={'Submit'}
				clickFn={testingClick}
				margin={'2rem 0'}
				padding={'1rem'}
				activeStyle={'blue'}
			/>
			<NeuNavbar links={links} decoration={'none'} />
		</div>
	);
}

export default App;
