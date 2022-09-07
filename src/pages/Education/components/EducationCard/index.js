import React from "react";

const EducationCard = ({ education }) => {
	return (
		<div className="flex flex-row items-center">
			<div className="border rounded-full p-2 py-8 border-gray-600">
				<p className="text-md text-gray-600 py-1">{education.duration}</p>
			</div>
			<div className="border-gray-700 border-solid border rounded-md p-4 m-4 grow">
				<h className="text-xl text-gray-700 py-1">{education.institution}</h>
				<p className="text-md text-gray-600 py-1 font-bold">
					{education.degree} |{" "}
					<span className="font-normal text-blue-600">({education.grade})</span>
				</p>
				<p className="text-md text-gray-600 py-1">{education.description}</p>
				{education.website && (
					<a
						href={education.website}
						className="text-blue-600 underline"
						target="_blank"
						rel="noreferrer"
					>
						Website ￫
					</a>
				)}
			</div>
		</div>
	);
};

export default EducationCard;
