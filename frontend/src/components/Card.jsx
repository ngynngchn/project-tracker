import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import { Icon } from "@iconify/react";
import DeleteButton from "./basic/buttons/DeleteButton";

function Card({ project }) {
	const [sessionID, setSessionID] = useState();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	useEffect(() => {
		const getSession = async () => {
			try {
				const result = await fetch(url + "/session/" + project._id);
				const data = await result.json();
				setSessionID(data.recent.session_id);
			} catch (err) {
				console.log(err);
			}
		};
		getSession();
	}, []);

	const startSession = async () => {
		const result = await fetch(url + "/start-session", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ id: project._id }),
		});
		if (result.ok) {
			const data = await result.json();
			console.log(data.message);
			console.log(data.recent);
			setSessionID(data.recent.session_id);
		}
	};

	const endSession = async () => {
		console.log(project._id, sessionID);
		const result = await fetch(url + "/end-session", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ id: project._id, session_id: sessionID }),
		});
		if (result.ok) {
			const data = await result.json();
			console.log(data.message);
			console.log("End", data.recent);
		}
	};

	return (
		<div className="card">
			<h3>{project.project_name}</h3>
			<h4>Session {sessionID + 1}</h4>

			<Timer
				setStart={startSession}
				setEnd={endSession}
				project_id={project._id}
			/>

			<DeleteButton project_id={project._id} />
		</div>
	);
}

export default Card;
