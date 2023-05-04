import React, { useRef } from "react";

import { Toaster } from "react-hot-toast";
import "./Login.css";
import Form from "../../../components/basic/form/login-form/Form";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="login">
			<div className="login-container">
				<h2>Welcome Back!</h2>
				<h2>Please login!</h2>
				<Form />
				<Toaster />
				<p>
					Don't have an account yet? Register<Link to="/register">here</Link>.
				</p>
			</div>
		</div>
	);
}

export default Login;
