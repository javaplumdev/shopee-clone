import './App.css';

import ContextProvider from './context/context';

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Discover from './components/Discover';
import Product from './components/Product';

import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Navbar />
								<Hero />
								<Categories />
								<Discover />
							</>
						}
					/>
					<Route
						path="/product/:id/:title"
						element={
							<>
								<Navbar />
								<Product />
							</>
						}
					/>
				</Routes>
			</div>
		</ContextProvider>
	);
}

export default App;
