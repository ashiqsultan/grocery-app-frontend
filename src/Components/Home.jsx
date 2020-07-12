import React, { Fragment } from 'react';
import GroceryList from './GroceryList';
import UserColumn from './UserColumn';

const Home = () => {
	return (
		<Fragment>
			<div className="row">
				<div className="col-6">
					<GroceryList />
				</div>
				<div className="col-6">
					User Sign-in / Sign-up
					<div>
						<UserColumn />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
