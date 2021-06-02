import { useEffect } from 'react'
import './css/Carousel.css'

const Carousel = (props) => {
	var slideIndex = 0
	let timer

	useEffect(() => {
		showSlides()

		return () => {
			clearTimeout(timer)
		}
	})

	const showSlides = () => {
		var i
		var slides = document.getElementsByClassName('mySlides')

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none'
		}
		slideIndex++
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		slides[slideIndex - 1].style.display = 'block'

		timer = setTimeout(showSlides, 2000) // Change image every 2 seconds
	}

	return (
		<div
			className='slideshow-container'
			onMouseLeave={() => {
				clearTimeout(timer)
			}}
		>
			<div className='mySlides fade'>
				<img src={props.image[0]} alt='' />
			</div>

			<div className='mySlides fade'>
				<img src={props.image[1]} alt='' />
			</div>

			<div className='mySlides fade'>
				<img src={props.image[2]} alt='' />
			</div>
		</div>
	)
}

export default Carousel
