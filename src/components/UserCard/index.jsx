import { Card, Dropdown } from 'flowbite-react';
import React from 'react';

const UserCard = ({ user }) => {
	return (
		<div className='w-full'>
			<Card>
				<div className='flex justify-end px-4 pt-4'>
					<Dropdown inline={true} label=''>
						<Dropdown.Item>
							<a
								href='#'
								className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								Edit
							</a>
						</Dropdown.Item>
						<Dropdown.Item>
							<a
								href='#'
								className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								Export Data
							</a>
						</Dropdown.Item>
						<Dropdown.Item>
							<a
								href='#'
								className='block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
							>
								Delete
							</a>
						</Dropdown.Item>
					</Dropdown>
				</div>
				<div className='flex flex-col items-center pb-10'>
					<img
						className='mb-3 h-24 w-24 rounded-full shadow-lg'
						src={`https://picsum.photos/id/${user.id}/200/300`}
						alt='Bonnie image'
					/>
					<h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
						{user.name}
					</h5>
					<span className='text-sm text-gray-500 dark:text-gray-400'>
						{user.email}
					</span>
					<div className='mt-4 flex space-x-3 lg:mt-6'>
						<a
							href='#'
							className='inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
						>
							Add friend
						</a>
						<a
							href='#'
							className='inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
						>
							Message
						</a>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default UserCard;
