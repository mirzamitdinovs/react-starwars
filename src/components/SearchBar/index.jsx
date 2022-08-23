import React, { useState } from 'react';

const SearchBar = ({ submit }) => {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		submit(e.target.value);
		setValue(e.target.value);
	};

	return (
		<div className='mb-6 w-8/12 mx-auto'>
			<input
				value={value}
				onChange={handleChange}
				type='text'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
			/>
		</div>
	);
};

export default SearchBar;
