import React, { useContext, useState } from 'react';
import CartProductCard from '../../components/CartProductCard';
import CartContext from '../../contexts/CartContext';

const CartSidebar = ({ toggleCart, setToggleCart }) => {
	const { cart, getTotalAmount, getTotalPrice } = useContext(CartContext);
	return (
		<>
			<div
				className={`relative z-10 ${!toggleCart ? 'hidden' : ''}`}
				aria-labelledby='slide-over-title'
				role='dialog'
				aria-modal='true'
			>
				<div className='fixed inset-0 w-full ' />
				<div className='fixed inset-0 overflow-hidden'>
					<div
						onClick={() => setToggleCart(false)}
						className=' h-full w-full  bg-gray-500 bg-opacity-75 transition-opacity'
					></div>
					<div className='absolute inset-0 overflow-hidden w-[300px]'>
						<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 '>
							<div className='pointer-events-auto w-screen max-w-md'>
								<div className='flex h-full flex-col  bg-white shadow-xl'>
									<div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
										<div className='flex items-start justify-between'>
											<h2
												className='text-lg font-medium text-gray-900'
												id='slide-over-title'
											>
												Shopping cart
											</h2>
											<h2
												className='text-lg font-medium text-gray-900'
												id='slide-over-title'
											>
												Total: {getTotalAmount()}
											</h2>
											<div className='ml-3 flex h-7 items-center'>
												<button
													type='button'
													onClick={() => setToggleCart(false)}
													className='-m-2 p-2 text-gray-400 hover:text-gray-500'
												>
													<span className='sr-only'>Close panel</span>
													{/* Heroicon name: outline/x */}
													<svg
														className='h-6 w-6'
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth={2}
														stroke='currentColor'
														aria-hidden='true'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M6 18L18 6M6 6l12 12'
														/>
													</svg>
												</button>
											</div>
										</div>
										<div className='mt-8'>
											<div className='flow-root'>
												<ul
													role='list'
													className='-my-6 divide-y divide-gray-200'
												>
													{cart.map((item, index) => (
														<CartProductCard key={index} product={item} />
													))}
												</ul>
											</div>
										</div>
									</div>
									<div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
										<div className='flex justify-between text-base font-medium text-gray-900'>
											<p>Subtotal</p>
											<p>${getTotalPrice()}</p>
										</div>
										<p className='mt-0.5 text-sm text-gray-500'>
											Shipping and taxes calculated at checkout.
										</p>
										<div className='mt-6'>
											<a
												href='#'
												className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
											>
												Checkout
											</a>
										</div>
										<div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
											<p>
												or{' '}
												<button
													onClick={() => setToggleCart()}
													type='button'
													className='font-medium text-indigo-600 hover:text-indigo-500'
												>
													Continue Shopping<span aria-hidden='true'> →</span>
												</button>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartSidebar;
