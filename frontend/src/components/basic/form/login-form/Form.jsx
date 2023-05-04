import React from "react";
import { useRef } from "react";
import toast from "react-hot-toast";

function Form() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const login = async (event) => {
		const credentials = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		event.preventDefault();
		const verifyCredentials = async () => {
			try {
				const result = await fetch(url + "/login", {
					method: "POST",
					headers: { "content-type": "application/json" },
					credentials: "include",
					body: JSON.stringify(credentials),
				});
				if (!result.ok) {
					throw new Error("Invalid password or email!");
				} else {
					const message = await result.json();
					console.log(message.message);
				}
			} catch (error) {
				console.error(error);
			}
		};
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
			<input type="password" name="password" id="password" ref={passwordRef} />
			<input type="submit" value="LOGIN" />
		</form>
	);
}

export default Form;
