import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./Password.css";

function Password({ reference, name }) {
	const [visible, setVisible] = useState(false);
	const [type, setType] = useState("password");

	return (
		<div className="pwd-container">
			<Icon className="key" icon="material-symbols:vpn-key-rounded" />

			<input type={type} name={name} id={name} ref={reference} />
			{visible ? (
				<Icon
					className="pwd"
					icon="mdi:eye"
					onClick={() => {
						setVisible(false);
						setType("password");
					}}
				/>
			) : (
				<Icon
					className="pwd"
					icon="mdi:eye-off"
					onClick={() => {
						setVisible(true);
						setType("text");
					}}
				/>
			)}
		</div>
	);
}

export default Password;
