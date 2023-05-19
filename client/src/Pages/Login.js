import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/userMutations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import verifyToken from "../components/auth";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [loginUser, { error, loading }] = useMutation(LOGIN_USER);

	const handleFormSubmit = (event) => {
		event.preventDefault();
		loginUser({
			variables: {
				email,
				password,
			},
		})
			.then((data) => {
				// const token = data.login.token;
				// localStorage.setItem('token', token);

				// const decodedToken = verifyToken()
				// if (decodedToken) {
				// 	console.log('Token is valid:', decodedToken);
				// }
				console.log(data);
				navigate("/dashboard");
			})
			.catch((error) => {
				console.error({ error });
			});

	};

	return (
		<main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gradient-to-tr from-black-800 to-white-50 text-white-50">
			<section className="flex w-[30rem] flex-col space-y-10">
				<div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-600">
					<input
						id="email"
						name="email"
						placeholder="Enter your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
					/>
				</div>
				<div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gray-600">
					<input
						type="password"
						className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
						id="password"
						name="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="transform rounded-sm bg-gray-500 py-2 font-bold duration-300 hover:bg-black-800"
					onClick={handleFormSubmit}
				>
					{loading ? "Logging in..." : "Login"}
				</button>
				{error && <p className="text-red-500">{error.message}</p>}
				<p class="text-center text-lg">
					No account?
					<a href="/login" className="font-medium text-white-50 underline-offset-4 hover:underline px-1">
						CREATE AN ACCOUNT
					</a>
				</p>
			</section>
		</main>
	);
}

export default Login;
