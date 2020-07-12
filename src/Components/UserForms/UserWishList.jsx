import React, { Fragment, useEffect, useContext, useState } from 'react';
import { StoreContext } from '../../Contexts/StoreContext';
var axios = require('axios');

const UserWishListItem = ({ item }) => {
	return (
		<Fragment>
			<div>
				<p>{item.name}</p>
			</div>
		</Fragment>
	);
};

const UserWishList = () => {
	const { isAuth } = useContext(StoreContext);
	const [uwishList, setUWishList] = useState([]);
	useEffect(() => {
		var config = {
			method: 'get',
			url: 'http://localhost:8000/v1/user/wishlist',
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('token')}`,
			},
		};
		axios(config)
			.then(function (response) {
				console.table(response.data.wishlist);
				setUWishList(response.data.wishlist);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [isAuth]);

	return (
		<Fragment>
			<div>
				{uwishList.map((item, index) => (
					<UserWishListItem item={item} key={index} />
				))}
			</div>
		</Fragment>
	);
};

export default UserWishList;
