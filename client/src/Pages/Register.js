import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../utils/userMutations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [registerUser, { error, loading }] = useMutation(REGISTER_USER);

	const handleOnChange = (event) => {
		const { name, value } = event.target;

		if (name === "username") {
			setUsername(value);
		}
		if (name === "email") {
			setEmail(value);
		}
		if (name === "password") {
			setPassword(value);
		}
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();

		registerUser({
			variables: {
				username,
				email,
				password,
			},
		})
			.then((data) => {
				console.log(data);
				navigate("/dashboard");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gradient-to-tr from-black-800 to-white-50 text-white-50">
			<section className="flex w-[30rem] flex-col space-y-10">
				<div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-600">
					<input
						id="username"
						name="username"
						placeholder="Enter a username"
						value={username}
						onChange={handleOnChange}
						className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
					/>
				</div>
				<div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-600">
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Enter an email"
						value={email}
						onChange={handleOnChange}
						className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
					/>
				</div>
				<div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-600">
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Enter a password"
						value={password}
						onChange={handleOnChange}
						className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
					/>
				</div>
				<button
					type="submit"
					className="transform rounded-sm bg-gray-500 py-2 font-bold duration-300 hover:bg-black-800"
					onClick={handleFormSubmit}
				>
					{loading ? "Registering User..." : "Register"}
				</button>
				{error && <p className="text-red-500">{error.message}</p>}
			</section>
		</main>
	);
}

export default Register;
