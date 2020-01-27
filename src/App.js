import React from 'react';
import CardWithButton from './components/CardWithButton';
import NeuButton from './components/NeuButton';

function App() {
	const testingClick = () => console.log('clicked');
	return (
		<div className='App'>
			<CardWithButton />
			<NeuButton
				text={'Submit'}
				clickFn={testingClick}
				margin={'2rem 0 0'}
				padding={'1rem'}
				borderRadius={'0rem'}
			/>
		</div>
	);
}

export default App;
