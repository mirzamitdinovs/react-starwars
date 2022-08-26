import { Navbar } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartSidebar from '../../containers/CartSidebar';
import CartContext from '../../contexts/CartContext';
const CustomNavbar = () => {
	const { cart, getTotalAmount } = useContext(CartContext);
	const [toggleCart, setToggleCart] = useState(false);
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
		<div>
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
					<Navbar.Link>
						<button
							onClick={() => setToggleCart(true)}
							type='button'
							className='inline-flex relative p-1      '
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
								/>
							</svg>
							{cart.length > 0 ? (
								<div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900'>
									{getTotalAmount()}
								</div>
							) : null}
						</button>
					</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
			<CartSidebar toggleCart={toggleCart} setToggleCart={setToggleCart} />
		</div>
	);
};

export default CustomNavbar;
