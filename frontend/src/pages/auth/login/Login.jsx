import "./Login.css";

import { Link } from "react-router-dom";
import Form from "../../../components/basic/form/login-form/Form";
import { Toaster } from "react-hot-toast";

function Login() {
	return (
		<div className="login">
			<div className="login-container">
				<h2>Welcome Back!</h2>
				<h2>Please login!</h2>
				<Form />
				<p>
					Don't have an account yet?
					<Link to="/register"> Create an account!</Link>
				</p>
				<Toaster />
			</div>
		</div>
	);
}

export default Login;
