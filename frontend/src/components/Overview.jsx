import { useEffect, useState } from "react";
import { v4 as uuid4 } from "uuid";

import Card from "./Card";
import AddButton from "./basic/buttons/AddButton";

function Overview() {
	const [projects, setProjects] = useState([]);
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	useEffect(() => {
		const getData = async () => {
			const response = await fetch(url + "/projects");
			const data = await response.json();
			setProjects(data);
		};
		getData();
	}, []);

	if (!projects) return;

	return (
		<div className="overview-container">
			<div className="top">
				<h2>YOUR CURRENT PROJECTS</h2>
				<AddButton />
			</div>
			<section className="header">
				<h3>Project </h3>
				<h3>Session</h3>
				<h3>Timer</h3>
			</section>
			<hr />
			{projects.map((project) => (
				<Card project={project} key={uuid4()} />
			))}
		</div>
	);
}
export default Overview;
