import React from 'react';
import CardWithButton from './components/CardWithButton';
import NeuButton from './components/NeuButton';

function App() {
	const testingClick = () => console.log('clicked');
	return (
		<div className='App'>
			<CardWithButton />
			<NeuButton
				margin={'2rem 0 0'}
				// padding={'1rem'}
				clickFn={testingClick}
				text={'test'}
				// color={'green'}
				// borderRadius={'0rem'}
			/>
		</div>
	);
}

export default App;
