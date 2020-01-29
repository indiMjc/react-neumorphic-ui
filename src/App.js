import React from 'react';
import CardWithButton from './components/CardWithButton';
import NeuButton from './components/NeuButton';
import NeuNavbar from './components/NeuNavbar';
import NeuCard from './components/NeuCard';
import NeuInput from './components/NeuInput';

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
				width={'25rem'}
			>
				<NeuInput type={'text'} placeholder={'Enter email address'} label={'email'} />
				<NeuInput type={'text'} />
				<NeuInput type={'text'} />
				<NeuInput type={'text'} />
				<NeuInput type={'text'} />
				<NeuInput type={'text'} />
				<NeuInput type={'checkbox'} />
				<NeuButton
					text={null}
					color={'teal'}
					clickFn={testingClick}
					margin={'1rem auto'}
					padding={'1rem'}
					activeStyle={'blue'}
				>
					testing
				</NeuButton>
			</NeuCard>
			<CardWithButton />
			<NeuNavbar
				links={links}
				linkColor={'teal'}
				decoration={'underline'}
				containerHover={true}
				linkHover={true}
			/>
		</div>
	);
}

export default App;
