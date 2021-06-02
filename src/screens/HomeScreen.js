import { useEffect, useState } from 'react'
import productsData from '../Data/products'
import Product from '../components/Product'
import classes from './css/HomeScreen.module.css'

const HomeScreen = () => {
	const [filteredProducts, setFilteredProducts] = useState(productsData)
	const [selectedBrands, setSelectedBrands] = useState([])
	const [selectedColor, setSelectedColor] = useState([])
	const [selectedType, setSelectedType] = useState([])

	const sortChangeHandler = (e) => {
		let products = filteredProducts
		if (e.target.value === 'lowToHigh') {
			products.sort((prod1, prod2) => prod1.price - prod2.price)
		} else {
			products.sort((prod1, prod2) => prod2.price - prod1.price)
		}
		setFilteredProducts([...products])
	}

	const searchChangeHandler = (e) => {
		let products = filteredProducts.filter((item) =>
			item.name.toLowerCase().includes(e.target.value.toLowerCase())
		)

		setFilteredProducts(products)

		if (e.target.value <= 0) {
			setFilteredProducts(productsData)
		}
	}

	const brandChangeHandler = (e) => {
		let brands = selectedBrands
		const index = brands.indexOf(e.target.id)
		if (index > -1) {
			brands = brands.filter((item) => item !== e.target.id)
		} else {
			brands.push(e.target.id)
		}

		let products = productsData.filter(
			(item) =>
				brands.indexOf(item.brand) > -1 &&
				(selectedColor.length
					? selectedColor.indexOf(item.color) > -1
					: true) &&
				(selectedType.length ? selectedType.indexOf(item.type) > -1 : true)
		)

		if (brands.length === 0) {
			products = productsData.filter(
				(item) =>
					(selectedColor.length
						? selectedColor.indexOf(item.color) > -1
						: true) &&
					(selectedType.length ? selectedType.indexOf(item.type) > -1 : true)
			)
		}

		setSelectedBrands(brands)
		setFilteredProducts(products)
	}

	const colorChangeHandler = (e) => {
		let colors = selectedColor
		const index = colors.indexOf(e.target.id)
		if (index > -1) {
			colors = colors.filter((item) => item !== e.target.id)
		} else {
			colors.push(e.target.id)
		}

		let products = productsData.filter(
			(item) =>
				colors.indexOf(item.color) > -1 &&
				(selectedBrands.length
					? selectedBrands.indexOf(item.brand) > -1
					: true) &&
				(selectedType.length ? selectedType.indexOf(item.type) > -1 : true)
		)

		if (colors.length === 0) {
			products = productsData.filter(
				(item) =>
					(selectedBrands.length
						? selectedBrands.indexOf(item.brand) > -1
						: true) &&
					(selectedType.length ? selectedType.indexOf(item.type) > -1 : true)
			)
		}

		setSelectedColor(colors)
		setFilteredProducts(products)
	}

	const typeChangeHandler = (e) => {
		let type = selectedType
		const index = type.indexOf(e.target.id)
		if (index > -1) {
			type = type.filter((item) => item !== e.target.id)
		} else {
			type.push(e.target.id)
		}

		let products = productsData.filter(
			(item) =>
				type.indexOf(item.type) > -1 &&
				(selectedBrands.length
					? selectedBrands.indexOf(item.brand) > -1
					: true) &&
				(selectedColor.length ? selectedColor.indexOf(item.color) > -1 : true)
		)

		if (type.length === 0) {
			products = productsData.filter(
				(item) =>
					(selectedBrands.length
						? selectedBrands.indexOf(item.brand) > -1
						: true) &&
					(selectedColor.length ? selectedColor.indexOf(item.color) > -1 : true)
			)
		}

		setSelectedType(type)
		setFilteredProducts(products)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
		if (
			selectedBrands.length === 0 &&
			selectedColor.length === 0 &&
			selectedType.length === 0 &&
			!document.getElementById('search').value
		) {
			setFilteredProducts(productsData)
		}
	}, [selectedBrands.length, selectedColor.length, selectedType.length])

	return (
		<div className={classes.homeScreenWrapper}>
			<div className={classes.search}>
				<input
					id='search'
					type='text'
					onChange={searchChangeHandler}
					placeholder='Search for products'
				/>
			</div>
			<div className={classes.mainContent}>
				<aside className={classes.filtersWrapper}>
					<div>
						<div className={classes.selectFilter}>
							<h1>Sort by :</h1>
							<div className={classes.filterType}>
								<select name='sort' id='' onChange={sortChangeHandler}>
									<option value=''>Select a option</option>
									<option value='lowToHigh'>Price : Low to High</option>
									<option value='highToLow'>Price : High to Low</option>
								</select>
							</div>
						</div>

						<h1>Brands</h1>
						<div className={classes.filterType}>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name='Roadster'
									id='Roadster'
									onChange={brandChangeHandler}
								/>
								<label htmlFor=''>Roadster</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name='HIGHLANDER'
									id='HIGHLANDER'
									onChange={brandChangeHandler}
								/>
								<label htmlFor=''>HIGHLANDER</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name='Allen Solly'
									id='Allen Solly'
									onChange={brandChangeHandler}
								/>
								<label htmlFor=''>Allen Solly</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name='Arrow'
									id='Arrow'
									onChange={brandChangeHandler}
								/>
								<label htmlFor=''>Arrow</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name='WROGN'
									id='WROGN'
									onChange={brandChangeHandler}
								/>
								<label htmlFor=''>WROGN</label>
							</div>
						</div>

						<h1>Colors</h1>
						<div className={classes.filterType}>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name=''
									id='Red'
									onChange={colorChangeHandler}
								/>
								<label htmlFor=''>Red</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name=''
									id='Black'
									onChange={colorChangeHandler}
								/>
								<label htmlFor=''>Black</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name=''
									id='White'
									onChange={colorChangeHandler}
								/>
								<label htmlFor=''>White</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name=''
									id='Blue'
									onChange={colorChangeHandler}
								/>
								<label htmlFor=''>Blue</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name=''
									id='Yellow'
									onChange={colorChangeHandler}
								/>
								<label htmlFor=''>Yellow</label>
							</div>
						</div>

						<h1>Type</h1>
						<div className={classes.filterType}>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name=''
									id='Slim fit'
									onChange={typeChangeHandler}
								/>
								<label htmlFor=''>Slim fit</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name=''
									id='Regular fit'
									onChange={typeChangeHandler}
								/>
								<label htmlFor=''>Regular fit</label>
							</div>
							<div className={classes.filter}>
								<input
									type='checkbox'
									name=''
									id='Tailored Fit'
									onChange={typeChangeHandler}
								/>
								<label htmlFor=''>Tailored Fit</label>
							</div>
						</div>
					</div>
				</aside>
				<section className={classes.productWrapper}>
					{filteredProducts.length > 0 ? (
						filteredProducts.map((product) => (
							<Product item={product} key={product.id} />
						))
					) : (
						<p
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '80vh',
								fontWeight: 700,
								fontSize: 32,
							}}
						>
							No Match Found!
						</p>
					)}
				</section>
			</div>
		</div>
	)
}

export default HomeScreen
