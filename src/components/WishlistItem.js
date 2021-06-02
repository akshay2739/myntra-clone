import classes from './css/CartItem.module.css'

const WishlistItem = (props) => {
	return (
		<li className={classes['cart-item']}>
			<div>
				<h2>{props.name}</h2>
				<div className={classes.summary}>
					<span className={classes.price}>{props.price}</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={props.onRemove}>
					<i className='fas fa-trash-alt'></i>
				</button>
			</div>
		</li>
	)
}

export default WishlistItem
