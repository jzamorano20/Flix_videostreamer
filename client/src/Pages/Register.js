import React from "react";

function Register(props) {

return (
	<div className='flex flex-wrap justify center mt-20'>
		<div className='w-full max-w-small'>
			<form className='shadow-md bg-black-300 rounded-sm px-8 pt-6 pb-8 mb-4'>
				<div className='mb-5'>

					<label type='text' className='block text-black-950 text-sm font-bold mb-2'>username</label>
					<input
					type='text'
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline'
					id='username'
					placeholder='username'
					/>

					<label type='email' className='block text-black-950 text-sm font-bold mb-2'>email</label>
					<input
					type='email'
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline'
					id='email'
					placeholder='email'
					/>
					<label type='text' className='block text-black-950 text-sm font-bold mb-2'>password</label>
					<input
					type='password'
					className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline'
					id='password'
					placeholder='password'
					/>
				</div>
				<div>
				<button className='bg-black600 hover:bg-white-50 text-black-950 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
					Register
				</button>
				</div>
			</form>
			</div>
			</div>
  )

}

export default Register;
