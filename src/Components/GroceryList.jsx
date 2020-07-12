import React, { Fragment, useContext } from 'react';

import { GroceryContext } from '../Contexts/GroceryContext';
import GroceryListItem from './GroceryListItem';

const GroceryList = () => {
	const { groceryList } = useContext(GroceryContext);

	return (
		<Fragment>
			<div>
				{groceryList.map((item, index) => {
					return <GroceryListItem key={index} item={item} />;
				})}
			</div>
		</Fragment>
	);
};

export default GroceryList;
