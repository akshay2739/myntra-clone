import React, { useContext } from 'react'
import CartContext from '../store/cartContext'
import Modal from './UI/Modal'
import classes from './css/Cart.module.css'
import CartItem from './CartItem'

export const Cart = (props) => {
	const cartCtx = useContext(CartContext)

	const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`

	const hasItems = cartCtx.items.length > 0

	const addItemHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 })
	}

	const removeItemHandler = (id) => {
		cartCtx.removeItem(id)
	}

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					size={item.size}
					onRemove={removeItemHandler.bind(null, item.id)}
					onAdd={addItemHandler.bind(null, item)}
				/>
			))}
		</ul>
	)

	return (
		<Modal onClick={props.onHideCart}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontWeight: 700,
				}}
			>
				{cartCtx.items.length > 0 ? cartItems : <h1>Cart is Empty!!</h1>}
			</div>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button-alt']} onClick={props.onHideCart}>
					Close
				</button>
				{hasItems && <button className={classes['button']}>Order</button>}
			</div>
		</Modal>
	)
}
