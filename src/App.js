import UserList from './containers/UserList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserPage from './pages/UserPage';
import CustomNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import PlanetsPage from './pages/PlanetsPage';
import { PlanetsProvider } from './contexts/PlanetsContext';
import PlanetDetailsPage from './pages/PlanetDetailsPage';
import { ProductsProvider } from './contexts/ProductsContext';
import CartSidebar from './containers/CartSidebar';
import { createRef, useState } from 'react';
import { CartProvider } from './contexts/CartContext';

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<ProductsProvider>
					<PlanetsProvider>
						<div className='container px-10 mx-auto'>
							<CustomNavbar />
							{/* <CartSidebar ref={sidebarRef} /> */}
							<Routes>
								<Route path='/' element={<HomePage />} />
								<Route path='/users' element={<UserPage />} />
								<Route path='/gallery' element={<GalleryPage />} />
								<Route path='/planets' element={<PlanetsPage />} />
								<Route
									path='/planets/:planet_id'
									element={<PlanetDetailsPage />}
								/>
							</Routes>
						</div>
					</PlanetsProvider>
				</ProductsProvider>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
