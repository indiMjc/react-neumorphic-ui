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
				<NeuInput
					type={'text'}
					placeholder={'Enter username'}
					label={'username: '}
					containerWidth={'269px'}
				/>
				<NeuInput
					type={'text'}
					placeholder={'Enter email address'}
					label={'email: '}
					containerWidth={'269px'}
				/>
				<NeuInput
					type={'text'}
					placeholder={'Enter location'}
					label={'location: '}
					containerWidth={'269px'}
				/>
				<NeuInput type={'text'} placeholder={'Enter role'} label={'role: '} containerWidth={'269px'} />
				<NeuInput type={'text'} containerWidth={'269px'} />
				<NeuInput type={'text'} containerWidth={'269px'} />
				<NeuInput type={'checkbox'} containerWidth={'269px'} />
				<NeuButton
					text={null}
					color={'teal'}
					onClick={testingClick}
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
