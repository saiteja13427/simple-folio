import React from "react";
import { Link } from "react-router-dom";
import { name, resume, tagline } from "../../data/portfolio";

const Home = () => {
	return (
		<div className="flex grow justify-center items-center">
			<div className="text-center">
				<h1 className="text-gray-600 font-bold text-6xl">{name}</h1>
				<p className="text-gray-600 text-lg font-medium py-4">{tagline}</p>
				<a
					href={resume}
					rel="noreferrer"
					target="_blank"
					class="border border-gray-700 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
				>
					<svg
						class="fill-gray-700 w-4 h-4 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
					</svg>
					<span className="text-gray-700">Resume</span>
				</a>
			</div>
		</div>
	);
};

export default Home;
