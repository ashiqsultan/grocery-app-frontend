import React, { Fragment, useState } from 'react';
var axios = require('axios');

const RegisterForm = () => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [newPassword, setNewPassword] = useState('');

	const handleOnUserNameChange = (event) => {
		event.preventDefault();
		setUserName(event.target.value);
	};
	const handleOnEmailChange = (event) => {
		event.preventDefault();
		setEmail(event.target.value);
	};
	const handleOnNewPasswordChange = (event) => {
		event.preventDefault();
		setNewPassword(event.target.value);
	};

	const axiosData = {
		name: userName,
		email: email,
		password: newPassword,
	};

	const axiosConfig = {
		method: 'post',
		url: 'http://localhost:8000/v1/user/signup',
		headers: {},
		data: axiosData,
	};

	const registerUserHandler = (event) => {
		event.preventDefault();
		axios(axiosConfig)
			.then(function (response) {
				console.log(response.data);
				sessionStorage.setItem('token',response.data.token)
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Fragment>
			<div>
				<h3>New User</h3>
				<h4>Register here</h4>
				<div className="form-group">
					<label htmlFor="username">Enter your Name</label>
					<input
						className="form-control"
						id="username"
						placeholder="Enter your Name"
						value={userName}
						onChange={handleOnUserNameChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Enter New Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="Enter email"
						value={email}
						onChange={handleOnEmailChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Create Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						value={newPassword}
						placeholder="Enter password"
						onChange={handleOnNewPasswordChange}
					/>
				</div>
				<button className="btn btn-primary" onClick={registerUserHandler}>
					Register
				</button>
			</div>
		</Fragment>
	);
};

export default RegisterForm;
