import { useContext, useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import products from '../Data/products'
import WishlistContext from '../store/wishlistContext'
import CartContext from '../store/cartContext'
import Button from '../components/UI/Button'
import classes from './css/ProductDetails.module.css'

const ProductDetailScreen = (props) => {
	const id = props.match.params.id - 1
	const product = products[id]
	const images = product.image

	const [selectedSize, setSelectedSize] = useState(0)
	const [isLightBoxOpen, setIsLightBoxOpen] = useState(false)
	const [photoIndex, setPhotoIndex] = useState(0)

	const sizeChangeHandler = (index) => {
		setSelectedSize(index)
	}

	const addToCartHandler = () => {
		cartCtx.addItem({
			id,
			name: product.name,
			amount: 1,
			price: product.price,
			size: product.size[selectedSize],
		})
	}

	const addToWishlistHandler = () => {
		wishlistCtx.addItem({
			id,
			name: product.name,
		})
	}

	const cartCtx = useContext(CartContext)
	const wishlistCtx = useContext(WishlistContext)

	useEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<div className={classes.productDetailsWrapper}>
			<div
				className={classes.imageWrapper}
				onClick={() => setIsLightBoxOpen(true)}
			>
				<img src={images[0]} alt={product.name} />
			</div>
			{isLightBoxOpen && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setIsLightBoxOpen(false)}
					onMoveNextRequest={() =>
						setPhotoIndex((photoIndex + images.length - 1) % images.length)
					}
					onMovePrevRequest={() =>
						setPhotoIndex((photoIndex + 1) % images.length)
					}
				/>
			)}
			<div className={classes.detailsWrapper}>
				<h1>{product.brand}</h1>
				<p>{product.name}</p>

				<h2> {product.price}</h2>
				<h3>Select Size</h3>
				<div className={classes.sizeList}>
					{product.size.map((item, index) => (
						<p
							style={
								selectedSize === index
									? { color: `#004eec`, borderColor: `#004eec` }
									: null
							}
							className={classes.size}
							onClick={() => sizeChangeHandler(index)}
						>
							{item}
						</p>
					))}
				</div>

				<ul>
					<span style={{ fontWeight: 700, color: 'black' }}>Description :</span>
					{product.description.split(',').map((item) => (
						<li>{item}</li>
					))}
				</ul>

				<div>
					<Button className='Btn' onClick={addToCartHandler}>
						Add to Bag
					</Button>
					<Button className='BtnOutline' onClick={addToWishlistHandler}>
						WishList
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetailScreen
