import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
const CustomNavbar = () => {
	const location = useLocation();
	const navbars = [
		{
			title: 'Home',
			url: '/',
		},
		{
			title: 'Users',
			url: '/users',
		},
		{
			title: 'Gallery',
			url: '/gallery',
		},
		{
			title: 'Planets',
			url: '/planets',
		},
	];
	return (
		<Navbar fluid={true} rounded={true}>
			<Navbar.Brand href='https://flowbite.com/'>
				<img
					src='https://flowbite.com/docs/images/logo.svg'
					className='mr-3 h-6 sm:h-9'
					alt='Flowbite Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Flowbite
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				{navbars.map((item, index) => (
					<Link key={index} to={item.url}>
						<Navbar.Link active={location.pathname === item.url}>
							{item.title}
						</Navbar.Link>
					</Link>
				))}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default CustomNavbar;
