import React, { createContext, useState, useEffect } from 'react';
const axios = require('axios');

// Exporting Context
export const GroceryContext = createContext();

const GroceryContextProvider = (props) => {
	const initialList = [
		{
			_id: '5f0ab10b172f5f17e0be9500',
			name: 'Wheat',
			quantity: '1 kg',
			price: 50,
		},
	];
	const [groceryList, setGroceryList] = useState(initialList);

	useEffect(() => {
		const config = {
			method: 'get',
			url: 'http://localhost:8000/v1/grocery',
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				setGroceryList(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	},[]);

	return (
		<GroceryContext.Provider
			value={{
				groceryList,
			}}
		>
			{props.children}
		</GroceryContext.Provider>
	);
};
export default GroceryContextProvider;
