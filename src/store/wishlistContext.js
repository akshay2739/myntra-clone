import React from 'react'

const WishlistContext = React.createContext({
	items: [],
	addItem: () => {},
	removeItem: () => {},
})

export default WishlistContext
