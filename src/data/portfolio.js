const name = "Sai Teja";
const tagline = "Dev + Growth";

/**
 * About page content. Supports markdown
 *
 * <br> for next line
 **/
const about =
	"A **passionate individual** looking forward to develop products which solve real problems";

const resume = "https://swiy.co/resume";
const contact = {
	phone: "6300300300",
	email: "saiteja@gmail.com",
	image: "sai-teja.jpeg",
	address: {
		address: "11-6-18/1, SVR Colony, Saroornagar",
		city: "Hyderabad",
		state: "Telanagar",
		country: "India",
		pin: "500035",
	},
};

const social = {
	facebook: "https://www.facebook.com/sai.baadshah.7/",
	twitter: "https://twitter.com/saai_tejaa",
	linkedin: "https://www.linkedin.com/in/saai-tejaa/",
	github: "https://github.com/saiteja13427",
	youtube: "",
	instagram: "https://www.instagram.com/saai_tejaa/",
	website: "https://lightmap.dev",
};

const blogs = [
	{
		title:
			"How Does JavaScript Even Work? Things Which 90% of JavaScript Developers Don't Know! (Part 1)",
		description:
			"ECMA Specifications, JS Engines, Single Thread, Asynchronous, Web APIs, JS Call Stack, Task Queue and more",
		link: "https://lightmap.dev/how-does-javascript-even-work-1",
	},
	{
		title:
			"How Does JavaScript Even Work? Things Which 90% of JavaScript Developers Don't Know! (Part 2)",
		description:
			"Render Queue, Microtask Queue, Promises, Order of Execution and more..",
		link: "https://lightmap.dev/how-does-javascript-even-work-2",
	},
];

const projects = {};

const experience = {};

const education = [
	{
		degree: "IMTech(CS)",
		duration: "2018-2023",
		institution: "University of Hyderabad",
		grade: "9.32/10",
		description:
			"Pursuing a 5 year integrated masters in CS. Took multiple courses on OS, DBMS, Compiler Design, Networking, Computer Architecture, Distributed Computing and Data Processing",
		website: "https://uohyd.ac.in",
	},
	{
		degree: "11th & 12th",
		duration: "2016-2018",
		institution: "Ramaiah IIT Study Circle",
		grade: "984/1000",
		description:
			"Pursued Sciences in my intermediate and achieved 6th highest mark in the state in the board exams. Also was among the top 1% in JEE Mains and TS EAMCET entrance exams",
	},
	{
		degree: "10th",
		duration: "2015-2016",
		institution: "Dilsukhnagar Public School",
		grade: "9.8/10",
	},
];

const certificates = {};

const skills = {};

export {
	name,
	tagline,
	resume,
	about,
	contact,
	social,
	blogs,
	experience,
	education,
	projects,
	certificates,
	skills,
};
