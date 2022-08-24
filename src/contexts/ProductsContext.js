import { useState, useEffect, createContext } from 'react';
import { GET_CATEGORIES, GET_PRODUCTS } from '../services/products';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const resProducts = await GET_PRODUCTS();
		const resCategories = await GET_CATEGORIES();
		if (resProducts) {
			setProducts(resProducts);
		}
		if (resCategories) {
			setCategories(resCategories);
		}
	};

	return (
		<ProductsContext.Provider
			value={{
				products,
				categories,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsContext;
