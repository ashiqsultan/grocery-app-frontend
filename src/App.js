import React from 'react';
import Home from './Components/Home';
import GroceryContextProvider from './Contexts/GroceryContext';
import StoreContextProvider from './Contexts/StoreContext';

function App() {
	return (
		<div>
			<GroceryContextProvider>
				<StoreContextProvider>
					<div className="container">
						<h1>Grocery App</h1>
						<Home />
					</div>
				</StoreContextProvider>
			</GroceryContextProvider>
		</div>
	);
}

export default App;
