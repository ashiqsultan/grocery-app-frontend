import React, { Fragment } from 'react';

const GroceryListItem = ({ item }) => {
	const { _id, name, quantity, price } = item;
	return (
		<Fragment>
			<div className="p-2">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{name}</h5>
						<p className="card-text">Quantity : {quantity}</p>
						<p className="card-text">Price : {price}</p>
						<a href="#" className="btn btn-success">
							Add to wishlist
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default GroceryListItem;
