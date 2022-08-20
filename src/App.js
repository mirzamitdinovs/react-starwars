import UserList from './containers/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import PlanetsPage from './pages/PlanetsPage';
import { PlanetsProvider } from './contexts/PlanetsContext';
import PlanetDetailsPage from './pages/PlanetDetailsPage';
function App() {
	return (
		<BrowserRouter>
			<PlanetsProvider>
				<div className='container px-10'>
					<CustomNavbar />
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/users' element={<UserPage />} />
						<Route path='/gallery' element={<GalleryPage />} />
						<Route path='/planets' element={<PlanetsPage />} />
						<Route path='/planets/:planet_id' element={<PlanetDetailsPage />} />
					</Routes>
				</div>
			</PlanetsProvider>
		</BrowserRouter>
	);
}

export default App;
