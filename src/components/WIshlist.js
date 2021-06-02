import React, { useContext } from 'react'
import Modal from './UI/Modal'
import classes from './css/Cart.module.css'
import WishlistContext from '../store/wishlistContext'
import WishlistItem from './WishlistItem'

export const Wishlist = (props) => {
	const wishlistCtx = useContext(WishlistContext)

	const removeItemHandler = (id) => {
		wishlistCtx.removeItem(id)
	}

	const wishlist = (
		<ul className={classes['cart-items']}>
			{wishlistCtx.items.map((item) => (
				<WishlistItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={removeItemHandler.bind(null, item.id)}
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
				{wishlistCtx.items.length > 0 ? wishlist : <h1>WIshlist is Empty!</h1>}
			</div>
			<div className={classes.actions}>
				<button className={classes['button-alt']} onClick={props.onHideCart}>
					Close
				</button>
			</div>
		</Modal>
	)
}
