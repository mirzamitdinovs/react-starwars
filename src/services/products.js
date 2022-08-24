import axios from 'axios';

export const GET_PRODUCTS = async () => {
	try {
		const res = await axios.get('https://fakestoreapi.com/products');
		return res.data;
	} catch (err) {
		console.log('err: ', err.message);
	}
};
export const GET_CATEGORIES = async () => {
	try {
		const res = await axios.get('https://fakestoreapi.com/products/categories');
		return res.data;
	} catch (err) {
		console.log('err: ', err.message);
	}
};
