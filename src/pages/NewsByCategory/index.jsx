import React from 'react';
import { useParams } from 'react-router-dom';
import NewsList from '../../containers/NewsList';
import NewsListInfinite from '../../containers/NewsListInfinite';
const NewsByCategory = () => {
	const params = useParams();
	const { category } = params;
	return (
		<div className='pb-10 mt-10'>
			<h3 className='text-2xl font-bold text-center mb-10'>
				{category[0].toUpperCase() + category.slice(1)}
			</h3>

			<NewsListInfinite
				category={{
					id: category,
					name: category[0].toUpperCase() + category.slice(1),
				}}
			/>
		</div>
	);
};

export default NewsByCategory;
