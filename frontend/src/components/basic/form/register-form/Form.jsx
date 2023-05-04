import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Password from "../Password";

function Form() {
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	const navigate = useNavigate();

	const register = async (event) => {
		event.preventDefault();

		const credentials = {
			user: nameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
			confirmPassword: confirmPasswordRef.current.value,
		};
		const createAccount = fetch(url + "/register", {
			method: "POST",
			headers: { "content-type": "application/json" },
			credentials: "include",
			body: JSON.stringify(credentials),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Invalid email or password");
				} else {
					return response.text();
				}
			})
			.then((data) => console.log(data))
			.catch((error) => console.error(error));

		await toast.promise(createAccount, {
			loading: "Checking Credentials",
			success: "Perfect! You signed up!",
			error: (err) => {
				console.error(err);
				return "Could not register! SORRY!!!";
			},
		});
	};

	return (
		<form onSubmit={register}>
			<label htmlFor="user">YOUR NAME</label>
			<input type="text" name="user" id="user" ref={nameRef} />
			<label htmlFor="email">YOUR EMAIL</label>
			<input type="email" name="email" id="email" ref={emailRef} />
			<label htmlFor="password">YOUR PASSWORD</label>
			<Password reference={passwordRef} name="password" />
			<label htmlFor="confirm-password">CONFIRM YOUR PASSWORD</label>
			<Password reference={confirmPasswordRef} name="confirmPassword" />
			<input type="submit" value="REGISTER" />
			<Toaster />
		</form>
	);
}

export default Form;
