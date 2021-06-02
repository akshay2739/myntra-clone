import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Cart } from './components/Cart'
import Navbar from './components/Navbar'
import { Wishlist } from './components/WIshlist'
import HomeScreen from './screens/HomeScreen'
import ProductDetailScreen from './screens/ProductDetailScreen'
import CartProvider from './store/CartProvider'
import WishlistProvider from './store/WishlistProvider'

function App() {
	const [isModalOpened, setIsModalOpened] = useState(false)
	const [isWishlistOpened, setIsWishlistOpened] = useState(false)

	const showCartHandler = () => {
		setIsModalOpened(true)
	}

	const hideCartHandler = () => {
		setIsModalOpened(false)
	}

	const showWishlistHandler = () => {
		setIsWishlistOpened(true)
	}

	const hideWishlistHandler = () => {
		setIsWishlistOpened(false)
	}

	return (
		<BrowserRouter>
			<CartProvider>
				<WishlistProvider>
					{isModalOpened && <Cart onHideCart={hideCartHandler} />}
					{isWishlistOpened && <Wishlist onHideCart={hideWishlistHandler} />}
					<Navbar
						showCart={showCartHandler}
						showWishlist={showWishlistHandler}
					/>
					<main>
						<Switch>
							<Route path='/' exact component={HomeScreen} />
							<Route path='/product/:id' component={ProductDetailScreen} />
						</Switch>
					</main>
				</WishlistProvider>
			</CartProvider>
		</BrowserRouter>
	)
}

export default App
