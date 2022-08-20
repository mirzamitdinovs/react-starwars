import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import UserCard from '../../components/UserCard';
import { GET_ALL_USERS } from '../../services';

const UserList = () => {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const data = await GET_ALL_USERS();
		if (data) {
			setUsers(data);
			setLoading(false);
		}
	};

	if (loading) return <Loader />;
	return (
		<div className='grid grid-cols-4 gap-4'>
			{users.map((item, index) => (
				<UserCard key={index} user={item} />
			))}
		</div>
	);
};

export default UserList;
