import React from 'react';
import NewsList from '../../containers/NewsList';
import { Link } from 'react-router-dom';

const NewsPage = () => {
	const newsCategories = [
		{
			id: 'business',
			name: 'Business',
		},
		{
			id: 'politics',
			name: 'Politics',
		},
		{
			id: 'sport',
			name: 'Sport',
		},
		{
			id: 'entertainment',
			name: 'Entertainment',
		},
	];
	return (
		<div className='pb-10'>
			{newsCategories.map((item, index) => (
				<>
					<div className='flex justify-between items-center mb-10 mt-20'>
						<div></div>
						<h3 className='text-2xl font-bold '>{item.name}</h3>
						<Link to={`/news/${item.id}`}>See All</Link>
					</div>
					<NewsList key={index} category={item} />
				</>
			))}
		</div>
	);
};

export default NewsPage;
