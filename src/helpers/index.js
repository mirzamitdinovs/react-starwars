export const PARSE_LINK = (str) => {
	return str && typeof str === 'string'
		? str.replaceAll(' ', '-').toLowerCase()
		: '';
};

export const PARSE_LINK_BACK = (link) => {
	return link
		.split('-')
		.map((item) => item[0].toUpperCase() + item.slice(1))
		.join(' ');
};
