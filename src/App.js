import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/education" element={<Education />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
