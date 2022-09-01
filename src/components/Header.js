import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<>
			<nav>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							<button
								type="button"
								className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-4">
									<Link
										to="/"
										className="hover:bg-gray-700 hover:text-white text-gray-700 px-3 py-2 rounded-md text-md font-medium"
										aria-current="page"
									>
										Home
									</Link>

									<Link
										to="/about"
										className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
									>
										About
									</Link>

									<Link
										to="/contact"
										className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
									>
										Contact
									</Link>

									<Link
										to="/blog"
										className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
									>
										Blogs
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="sm:hidden" id="mobile-menu">
					<div className="space-y-1 px-2 pt-2 pb-3">
						<a
							href="#"
							className="text-gray-700 hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium"
							aria-current="page"
						>
							Dashboard
						</a>

						<a
							href="#"
							className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Team
						</a>

						<a
							href="#"
							className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Projects
						</a>

						<a
							href="#"
							className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
						>
							Calendar
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
