import React from 'react';
import { ToastContainer } from 'react-toastify';
import PasswordGenerator from './components/PasswordGenerator';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<div className="background">
			<div className="app">
				<h1 className="heading">Password Generator</h1>
				<PasswordGenerator />
				<ToastContainer />
			</div>
		</div>
	);
};

export default App;
