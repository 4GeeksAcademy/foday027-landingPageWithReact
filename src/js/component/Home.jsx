import React from "react";
import Cards from './Cards.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Nav/>
			<Cards/>
			<Footer/>

		</div>
	);
};

export default Home;