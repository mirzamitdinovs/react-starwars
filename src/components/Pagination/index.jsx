import React from 'react';
import { Pagination as FPagination } from 'flowbite-react';
const Pagination = ({ current, total, getData }) => {
	return (
		<div className='flex items-center justify-center text-center'>
			<FPagination
				layout='navigation'
				currentPage={current}
				totalPages={total}
				onPageChange={getData}
			/>
		</div>
	);
};

export default Pagination;
