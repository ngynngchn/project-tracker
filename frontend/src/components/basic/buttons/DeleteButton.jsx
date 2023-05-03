import { useState } from "react";
import "./DeleteButton.css";
import { Icon } from "@iconify/react";

function DeleteButton({ project_id }) {
	const [active, setActive] = useState();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const deleteProject = async () => {
		try {
			const result = await fetch(url + "/delete", {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ id: project_id }),
			});
			if (result.ok) {
				const message = await result.json();
				console.log(message.message);
				window.location.reload(false);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="delete-btn">
			<button onClick={() => setActive(true)}>
				<Icon icon="material-symbols:delete-rounded" />
			</button>
			{active && (
				<div className="window">
					<div className="modal">
						<p>Are you sure, you want to delete this project?</p>
						<div className="actions">
							<button onClick={deleteProject}>YES!</button>
							<button onClick={() => setActive(false)}>NO!</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default DeleteButton;
