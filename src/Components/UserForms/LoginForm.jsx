import React, { Fragment, useState, useContext } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';
var axios = require('axios');

const LoginForm = () => {
	const { setIsAuth } = useContext(StoreContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleOnEmailChange = (event) => {
		event.preventDefault();
		setEmail(event.target.value);
	};
	const handleOnPasswordChange = (event) => {
		event.preventDefault();
		setPassword(event.target.value);
	};

	var axiosData = { email, password };

	var config = {
		method: 'post',
		url: 'http://localhost:8000/v1/user/signin',
		headers: {},
		data: axiosData,
	};

	const loginHandler = (event) => {
		event.preventDefault();
		axios(config)
			.then(function (response) {
				console.log(response.data);
				sessionStorage.setItem('token', response.data.token);
				setIsAuth(true)
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<Fragment>
			<form>
				<h3>Login</h3>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						id="email"
						placeholder="email"
						value={email}
						onChange={handleOnEmailChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="password"
						value={password}
						onChange={handleOnPasswordChange}
					/>
				</div>
				<button className="btn btn-primary" onClick={loginHandler}>
					Login
				</button>
			</form>
		</Fragment>
	);
};
export default LoginForm;
