import React, { Fragment } from 'react';
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
const UserForms = () => {
	return (
		<Fragment>
			<div>
				<div className="row p-4">
					<LoginForm />
				</div>
				<div className="row p-4">
					<RegisterForm />
				</div>
			</div>
		</Fragment>
	);
};
export default UserForms;
