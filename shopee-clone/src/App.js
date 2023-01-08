import './App.css';

import ContextProvider from './context/context';

// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Discover from './components/Discover';

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<Navbar />
				<Hero />
				<Categories />
				<Discover />
			</div>
		</ContextProvider>
	);
}

export default App;
