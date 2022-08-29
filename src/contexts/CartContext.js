import { useState, createContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const ls = localStorage.getItem('cart');
		if (ls && ls.length) {
			setCart(JSON.parse(ls));
		}
	}, []);

	const addProduct = (product) => {
		localStorage.setItem(
			'cart',
			JSON.stringify([
				...cart,
				{
					...product,
					qty: 1,
				},
			])
		);
		setCart([
			...cart,
			{
				...product,
				qty: 1,
			},
		]);
	};

	const removeProduct = (id) => {
		localStorage.setItem(
			'cart',
			JSON.stringify(cart.filter((item) => item.id !== id))
		);
		setCart(cart.filter((item) => item.id !== id));
	};

	const changeProductQty = (qty, id) => {
		if (qty === 0) {
			localStorage.setItem(
				'cart',
				JSON.stringify(cart.filter((item) => item.id !== id))
			);
			removeProduct(id);
		} else {
			localStorage.setItem(
				'cart',
				JSON.stringify(
					cart.map((item) => (item.id === id ? { ...item, qty: qty } : item))
				)
			);
			setCart(
				cart.map((item) => (item.id === id ? { ...item, qty: qty } : item))
			);
		}
	};

	const getTotalAmount = () => {
		return cart.map((item) => item.qty).reduce((a, b) => a + b, 0);
	};

	const getTotalPrice = () => {
		return cart
			.map((item) => item.price * item.qty)
			.reduce((a, b) => a + b, 0)
			.toFixed(2);
	};

	const isInCart = (id) => {
		return !!cart.find((item) => item.id === id);
	};
	console.log('cart: ', cart);
	console.log('ls: ', JSON.parse(localStorage.getItem('cart')));

	return (
		<CartContext.Provider
			value={{
				cart,
				addProduct,
				removeProduct,
				changeProductQty,
				getTotalAmount,
				getTotalPrice,
				isInCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
