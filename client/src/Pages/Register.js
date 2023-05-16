import React from 'react';

function Register(props) {
return (
	<form>
		 <input
        name="username"
        type="text"
        placeholder="Enter your desired username" />
      <input
        name="email"
        type="email"
        placeholder="Enter your desired email address" />
      <input
        name="password"
        type="password"
        placeholder="Enter your desired password" />
      <button>Submit</button>
    </form>
  )
}

export default Register;
