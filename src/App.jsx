import React from 'react';
import { useState } from 'react';
import 'App.css';
import Movies from 'pages/Movies/Movies';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ScreenWidth from 'components/Context/screen-width-context';

function App() {
	const [sideMenuStatus, setSideMenuStatus] = useState(false);
	/**
	 * Show or hide the side menu
	 */
	const hamburgerMenuClickHandler = () => {
		setSideMenuStatus((prev) => {
			return !prev;
		});
	};
	return (
		<ScreenWidth.Provider value={{ screenWidth: window.innerWidth }}>
			<Header hamburgerMenuClickHandler={hamburgerMenuClickHandler} />
			<Movies sideMenuStatus={sideMenuStatus} />
			<Footer />
		</ScreenWidth.Provider>
	);
}

export default App;
