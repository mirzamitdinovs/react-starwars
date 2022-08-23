import axios from 'axios';

export const GET_IMAGES = async (p, query) => {
	try {
		const res = await axios.get(
			`https://api.pexels.com/v1/search?page=${p}&per_page=40&query=${query}`,
			{
				headers: {
					Authorization:
						'563492ad6f91700001000001316d7ad7b1e14232aa3b77df7d69b550',
				},
			}
		);
		return res.data;
	} catch (err) {
		console.log('err: ', err.message);
	}
};
