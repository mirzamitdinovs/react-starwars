import React from 'react';

const NewsSkleton = ({ count }) => {
	const data = Array(count)
		.fill(null)
		.map((_, i) => i);

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-24'>
			{data.map((item, index) => (
				<div key={index} role='status' class='max-w-sm animate-pulse '>
					<div class='h-32 bg-gray-200  dark:bg-gray-700 w-full mb-4'></div>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mb-2.5'></div>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mt-4'></div>
				</div>
			))}
		</div>
	);
};

export default NewsSkleton;
