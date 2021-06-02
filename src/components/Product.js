import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './css/Product.module.css'
import Carousel from './UI/Carousel'

const Product = (props) => {
	const { image, name, brand, price, id } = props.item

	const [hover, setHover] = useState(false)

	return (
		<NavLink
			to={`product/${id}`}
			className={classes.productCard}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{hover ? <Carousel image={image} /> : <img src={image[0]} alt={name} />}

			<div className={classes.productDetails}>
				<h3>{brand}</h3>
				<p>{name}</p>
				<h4>Rs. {price}</h4>
			</div>
		</NavLink>
	)
}

export default Product
