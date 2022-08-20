import React from 'react';
import UserList from '../../containers/UserList';

const UserPage = () => {
	return (
		<div>
			<h4 className='text-3xl text-center mb-10 font-semibold text-blue-700'>
				Users List
			</h4>
			<UserList />
		</div>
	);
};

export default UserPage;
