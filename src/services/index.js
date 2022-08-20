import axios from 'axios';
import planetsData from '../data/planets';
export const GET_ALL_USERS = async () => {
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/users');
		return res.data;
		// return new Promise((res, rej) => {
		// 	setTimeout(() => res(userData), 2000);
		// });
	} catch (err) {
		console.log('GET_ALL_USERS_err: ', err.message);
	}
};

export const GET_ALL_PLANETS = async (page) => {
	try {
		const res = await axios.get(`https://swapi.dev/api/planets?page=${page}`);
		return res.data;
	} catch (err) {
		console.log('get_all_planets err: ', err.message);
	}
};
