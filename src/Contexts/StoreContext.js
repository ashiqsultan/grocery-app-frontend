import React, { createContext, useState, useEffect } from 'react';
const axios = require('axios');

// Exporting Context
export const StoreContext = createContext();

const StoreContextProvider = (props) => {
	const [isAuth, setIsAuth] = useState(false);
	return (
		<StoreContext.Provider value={{ isAuth, setIsAuth }}>
			{props.children}
		</StoreContext.Provider>
	);
};
export default StoreContextProvider;
