import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { name, tagline } from "../../data/portfolio";

const Home = () => {
	return (
		<div className="flex grow justify-center items-center">
			<div className="text-center">
				<h1 className="text-gray-600 font-bold text-6xl">{name}</h1>
				<p className="text-gray-600 text-lg font-medium py-4">{tagline}</p>
			</div>
		</div>
	);
};

export default Home;
