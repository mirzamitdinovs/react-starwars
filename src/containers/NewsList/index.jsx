import React, { useEffect, useState } from 'react';
import NewsCard from '../../components/NewsCard';
import { GET_ALL_NEWS } from '../../services/news';
import NewsSkleton from '../NesSkelot';
const NewsList = ({ category }) => {
	const [loading, setLoading] = useState(true);
	const [news, setNews] = useState([]);

	useEffect(() => {
		getNews();
	}, []);

	const getNews = async () => {
		const res = await GET_ALL_NEWS(8, category.id);
		console.log('res: ', res);
		if (res) {
			setLoading(false);
			setNews(res.articles);
		}
	};
	if (loading)
		return (
			<div>
				<div className='flex justify-between mb-3 mt-10 '>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5'></div>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2.5'></div>
				</div>
				<NewsSkleton count={8} />
			</div>
		);
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{news.map((item, index) => (
					<NewsCard key={index} item={item} />
				))}
			</div>
		</div>
	);
};

export default NewsList;
