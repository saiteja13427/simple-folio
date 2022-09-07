import React from "react";
import EducationCard from "./components/EducationCard";
import { education } from "../../data/portfolio";

const Education = () => {
	return (
		<div className="flex flex-row grow justify-center py-8">
			<div className="flex-col w-11/12 md:w-8/12">
				{education.map((ed) => {
					return <EducationCard education={ed} />;
				})}
			</div>
		</div>
	);
};

export default Education;
