import React, { useContext, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductsContext from '../../contexts/ProductsContext';

export const ProductList = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const { products, categories } = useContext(ProductsContext);
	console.log('selected: ', selectedCategory);
	return (
		<div className='py-10'>
			<ul className='mb-5 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'>
				<li className='mr-2'>
					<div
						onClick={() => setSelectedCategory(null)}
						aria-current='page'
						className={`cursor-pointer inline-block p-4 rounded-t-lg
							${
								!selectedCategory
									? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500 active'
									: 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
							}
						`}
					>
						ALL
					</div>
				</li>
				{categories.map((item, index) => (
					<li className='mr-2' key={index}>
						<div
							onClick={() => setSelectedCategory(item)}
							aria-current='page'
							className={`cursor-pointer inline-block p-4 rounded-t-lg
							${
								selectedCategory === item
									? 'text-blue-600 bg-gray-100 dark:bg-gray-800 dark:text-blue-500 active'
									: 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
							}
						`}
						>
							{item.toUpperCase()}
						</div>
					</li>
				))}
			</ul>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 '>
				{products
					.filter((item) =>
						!selectedCategory ? item : item.category === selectedCategory
					)
					.map((item, index) => (
						<ProductCard key={index} product={item} />
					))}
			</div>
		</div>
	);
};
