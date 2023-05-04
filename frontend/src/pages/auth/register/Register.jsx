import "./Register.css";

import Form from "../../../components/basic/form/register-form/Form";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Register() {
	return (
		<div className="register">
			<div className="register-container">
				<h2>Welcome!</h2>
				<h2>Get started:</h2>
				<Form />
				<p>
					Already have an account? <Link to="/">Sign in!</Link>
				</p>
			</div>
			<Toaster />
		</div>
	);
}

export default Register;
