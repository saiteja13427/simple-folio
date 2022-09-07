import React from "react";
import BlogCard from "./components/BlogCard";
import { blogs } from "../../data/portfolio";

const Blogs = () => {
	return (
		<div className="flex grow justify-center py-8">
			<div className="flex-col w-11/12 md:w-8/12">
				{blogs.map((blog) => {
					return <BlogCard blog={blog} />;
				})}
			</div>
		</div>
	);
};

export default Blogs;
