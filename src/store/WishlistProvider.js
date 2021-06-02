import { useReducer } from 'react'
import WishlistContext from './wishlistContext'

const initialState = {
	items: [],
}

const wishlistReducer = (state, action) => {
	let updatedItems, existingItemsIndex

	switch (action.type) {
		case 'ADD_ITEM':
			existingItemsIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			)
			const existingCartItem = state.items[existingItemsIndex]

			if (existingCartItem) {
				return state
			} else {
				updatedItems = state.items.concat(action.payload)
			}

			return {
				items: updatedItems,
			}

		case 'REMOVE_ITEM':
			updatedItems = state.items.filter((item) => item.id === action.payload.id)

			console.log(updatedItems)
			return {
				items: updatedItems,
			}
		default:
			return initialState
	}
}

const WishlistProvider = (props) => {
	const [wishlistState, dispatchCartAction] = useReducer(
		wishlistReducer,
		initialState
	)

	const addItemHandler = (item) => {
		dispatchCartAction({
			type: 'ADD_ITEM',
			payload: item,
		})
	}

	const removeItemHandler = (id) => {
		dispatchCartAction({
			type: 'REMOVE_ITEM',
			payload: id - 1,
		})
	}

	const wishlistContext = {
		items: wishlistState.items,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	}

	return (
		<WishlistContext.Provider value={wishlistContext}>
			{props.children}
		</WishlistContext.Provider>
	)
}

export default WishlistProvider
