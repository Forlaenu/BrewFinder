import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import UserlistPage from './pages/UserlistPage'

function App() {
	return (
		<div className="App">
			<header className="App-header">BrewFinder</header>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/userlist" element={<UserlistPage />} />
			</Routes>
		</div>
	);
}

export default App;
