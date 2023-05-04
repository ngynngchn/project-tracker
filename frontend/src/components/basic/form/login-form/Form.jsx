import { useRef } from "react";
import toast from "react-hot-toast";
import Password from "../Password";

function Form() {
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const emailRef = useRef();
	const passwordRef = useRef();

	const login = async (event) => {
		event.preventDefault();

		const credentials = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};

		const verifyCredentials = fetch(url + "/login", {
			method: "POST",
			headers: { "content-type": "application/json" },
			credentials: "include",
			body: JSON.stringify(credentials),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Invalid password or email!");
				} else {
					return response.json();
				}
			})
			.then((data) => console.log(data.message))
			.catch((error) => console.error(error));

		await toast.promise(verifyCredentials, {
			loading: "Logging in",
			success: "Perfect! You logged in!!",
			error: (err) => {
				console.error(err);
				return "Login failed! SORRY!!!";
			},
		});
	};

	return (
		<form onSubmit={login}>
			<label htmlFor="email">YOUR EMAIL</label>
			<input type="email" name="email" id="email" ref={emailRef} />
			<label htmlFor="password">YOUR PASSWORD</label>
			<Password reference={passwordRef} name="password" />
			<input type="submit" value="LOGIN" />
		</form>
	);
}

export default Form;
