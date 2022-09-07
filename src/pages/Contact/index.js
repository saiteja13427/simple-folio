import React from "react";
import { name, contact } from "../../data/portfolio";
import Social from "../../components/Social";

const Contact = () => {
	return (
		<div className="flex flex-col grow items-center">
			<div className="mt-8 mb-4">
				<img
					src={require(`../../assets/images/${contact["image"]}`)}
					className="h-auto rounded-full w-48  opacity-90 bg-slate-800"
					alt=""
				/>
			</div>
			<p className="text-gray-600 text-2xl font-medium py-1 text-center">
				{name}
			</p>
			<p className="text-gray-600 text-md font-medium text-center">
				{contact.phone}
			</p>
			<p className="text-gray-600 text-md font-medium text-center">
				{contact.email}
			</p>
			<Social />
		</div>
	);
};

export default Contact;
