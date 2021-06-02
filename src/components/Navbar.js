import { NavLink } from 'react-router-dom'
import classes from './css/Navbar.module.css'

const Navbar = (props) => {
	return (
		<div className={classes.navbar}>
			<div className={classes.container}>
				<NavLink to='/' className={classes.logo}>
					<img src='/logo.png' alt='GoComet' />
				</NavLink>
				<div className={classes.userLinks}>
					<div className={classes.icon} onClick={props.showWishlist}>
						<i className='fas fa-heart'></i>
						<p>Wishlist</p>
					</div>
					<div className={classes.icon} onClick={props.showCart}>
						<i className='fas fa-shopping-bag'></i>
						<p>Cart</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
