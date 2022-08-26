import axios from 'axios';

export const GET_ALL_NEWS = async (pageSize, source) => {
	try {
		const res = await axios.get(
			`https://newsapi.org/v2/top-headlines?country=us&category=${source}&pageSize=${pageSize}&apiKey=4ea1091f6e6e4c63b117b2949e8d3f7b`
		);
		return res.data;
	} catch (err) {
		console.log('err: ', err.message);
	}
};
