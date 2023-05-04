import React from "react";
import "./Register.css";
import Form from "../../../components/basic/form/register-form/Form";

function Register() {
	return (
		<div className="register">
			<div className="register-container">
				<h2>Welcome!</h2>
				<h2>Get started:</h2>

				<Form />
			</div>
		</div>
	);
}

export default Register;
