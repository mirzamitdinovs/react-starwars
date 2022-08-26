import dayjs from 'dayjs';
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

export const SHORTEN_TEXT = (text, count) => {
	return text.length > count ? `${text.slice(0, count)}...` : text;
};

export const FORMAT_DATE = (d) => {
	return dayjs(d).format('YYYY-MM-DD HH:MM');
};
