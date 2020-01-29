import React from 'react';
import CardWithButton from './components/CardWithButton';
import NeuButton from './components/NeuButton';
import NeuNavbar from './components/NeuNavbar';
import NeuCard from './components/NeuCard';

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
			<NeuCard
				display={'flex'}
				justify={'center'}
				align={'center'}
				flexDirection={'column'}
				margin={'3rem auto'}
				width={'15rem'}
				hover={true}
			>
				<NeuButton
					text={'Submit'}
					clickFn={testingClick}
					margin={'1rem auto'}
					padding={'1rem'}
					activeStyle={'blue'}
				/>
				<input type='text' />
			</NeuCard>
			<CardWithButton />
			{/* <NeuButton
				text={'Submit'}
				clickFn={testingClick}
				margin={'2rem 0'}
				padding={'1rem'}
				activeStyle={'blue'}
			/> */}
			<NeuNavbar links={links} linkColor={'teal'} decoration={'underline'} />
		</div>
	);
}

export default App;
