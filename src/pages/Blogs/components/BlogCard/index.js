import React from "react";

const BlogCard = ({ blog }) => {
	return (
		<div className="border-gray-700 border-solid border rounded-md p-4 m-4">
			<div>
				<h className="text-xl font-bold text-gray-700 py-1">{blog.title}</h>
				<p className="text-md text-gray-600 py-1">{blog.description}</p>
				<a
					href={blog.link}
					className="text-blue-600 underline"
					target="_blank"
					rel="noreferrer"
				>
					Read More
				</a>
			</div>
		</div>
	);
};

export default BlogCard;
