import { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import "./Buttons.css";

function AddButton() {
	const [toggle, setToggle] = useState();
	const projectRef = useRef();

	const addProject = async (e) => {
		e.preventDefault();
		console.log("input", projectRef.current.value);
		try {
			const result = await fetch("http://localhost:8886/api/v1/add", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ project_name: projectRef.current.value }),
			});
			const message = await result.json();
			console.log(message.message);
			window.location.reload(false);
		} catch (err) {
			console.error(err);
		}
	};

	return toggle ? (
		<div className="addProject">
			<input
				type="text"
				name="project_name"
				id="project_name"
				ref={projectRef}
			/>
			<button onClick={addProject}>ADD</button>
		</div>
	) : (
		<button onClick={() => setToggle(true)}>
			<Icon icon="material-symbols:add-circle-rounded" />
			ADD NEW PROJECT
		</button>
	);
}

export default AddButton;
