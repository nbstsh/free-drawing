import React, { useEffect, useState } from 'react';

import './App.scss';

import Container from './components/container/contaner';
import { auth } from './utils/firebase-init';
import { signIn } from './utils/users';

const App = () => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		return auth.onAuthStateChanged(user => {
			if (user) {
				setIsReady(true);
			} else {
				signIn();
			}
		});
	}, []);

	return (
		<div className='App'>
			{isReady ? <Container /> : <h1>Loading .....</h1>}
		</div>
	);
};

export default App;
