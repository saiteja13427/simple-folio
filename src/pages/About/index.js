import React from "react";
import Markdown from "markdown-to-jsx";
import { about } from "../../data/portfolio";

const About = () => {
	return (
		<div className="flex grow justify-center items-center">
			<p className="text-gray-600 text-lg font-medium py-4 w-8/12 md:w-3/12 text-center">
				<Markdown>{about}</Markdown>
			</p>
		</div>
	);
};

export default About;
