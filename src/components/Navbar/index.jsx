import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
const CustomNavbar = () => {
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
				<Link to='/'>
					<Navbar.Link active={true}>Home</Navbar.Link>
				</Link>
				<Link to='/users'>
					<Navbar.Link>Users</Navbar.Link>
				</Link>
				<Link to='/gallery'>
					<Navbar.Link>Gallery</Navbar.Link>
				</Link>
				<Link to='/planets'>
					<Navbar.Link>Planets</Navbar.Link>
				</Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default CustomNavbar;
