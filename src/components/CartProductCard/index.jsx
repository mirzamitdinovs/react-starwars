import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';

const CartProductCard = ({ product }) => {
	const { removeProduct, changeProductQty } = useContext(CartContext);
	return (
		<li className='flex py-6'>
			<div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
				<img
					src={product.image}
					alt='Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
					className='h-full w-full object-contain object-center'
				/>
			</div>
			<div className='ml-4 flex flex-1 flex-col'>
				<div>
					<div className='flex justify-between text-base font-medium text-gray-900'>
						<h3>
							<a href='#'> {product.title} </a>
						</h3>
						<p className='ml-4'>${product.price * product.qty}</p>
					</div>
					<p className='mt-1 text-sm text-gray-500'>{product.category}</p>
				</div>
				<div className='flex flex-1 justify-between text-sm items-center mt-3 '>
					<p className='text-sm text-gray-400'>Qty:</p>
					<div className='flex items-center border-2 rounded-sm'>
						<button
							onClick={() => changeProductQty(product.qty - 1, product.id)}
							type='button'
							className='py-1 px-2 border-r-2 font-medium text-indigo-600 hover:text-indigo-500'
						>
							-
						</button>
						<p className=' text-gray-500 mx-3 font-bold'> {product.qty}</p>
						<button
							onClick={() => changeProductQty(product.qty + 1, product.id)}
							type='button'
							className='py-1 px-2 border-l-2  font-medium text-indigo-600 hover:text-indigo-500'
						>
							+
						</button>
					</div>

					<div className='flex'>
						<button
							onClick={() => removeProduct(product.id)}
							type='button'
							className='font-medium text-indigo-600 hover:text-indigo-500'
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default CartProductCard;
