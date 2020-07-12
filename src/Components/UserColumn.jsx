import React, { Fragment, useContext } from 'react';
import UserForms from './UserForms/UserForms';
import { StoreContext } from '../Contexts/StoreContext';
import UserWishList from './UserForms/UserWishList';

const UserColumn = () => {
	const { isAuth } = useContext(StoreContext);
	return <Fragment>{!isAuth ? <UserForms /> : <UserWishList />}</Fragment>;
};

export default UserColumn;
