import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../mutations/userMutations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loginUser, { error, loading }] = useMutation(LOGIN_USER);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginUser({
      variables: {
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
    <div className="flex flex-wrap justify center mt-20">
      <div className="w-full max-w-small">
        <form
          className="shadow-md bg-black-300 rounded-sm px-8 pt-6 pb-8 mb-4"
          // onSubmit={handleFormSubmit}
        >
          <div className="mb-5">
           <label
              type="email"
              className="block text-black-950 text-sm font-bold mb-2"
            >
              email
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleOnChange}
            />
            <label
              type="text"
              className="block text-black-950 text-sm font-bold mb-2"
            >
              password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
            	 onChange={handleOnChange}
            />
          </div>
          <div>
            <button
              className="bg-black-600 hover:bg-white-50 text-white-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >Login
             {loading ? "Logging in..." : "Login"}
            </button>
            {error && <p className="text-red-500">{error.message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
