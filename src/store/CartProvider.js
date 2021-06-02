import { useReducer } from 'react'
import CartContext from './cartContext'

const initialState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (state, action) => {
	let updatedItems, updatedTotalAmount, existingItemsIndex

	switch (action.type) {
		case 'ADD_ITEM':
			updatedTotalAmount =
				state.totalAmount + action.payload.price * action.payload.amount

			existingItemsIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			)

			const existingCartItem = state.items[existingItemsIndex]

			if (existingCartItem) {
				const updatedItem = {
					...existingCartItem,
					amount: existingCartItem.amount + action.payload.amount,
				}

				updatedItems = [...state.items]
				updatedItems[existingItemsIndex] = updatedItem
			} else {
				updatedItems = state.items.concat(action.payload)
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			}

		case 'REMOVE_ITEM':
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload
			)

			const existingItem = state.items[existingItemIndex]
			if (existingItem) {
				updatedTotalAmount = state.totalAmount - existingItem.price
			}

			if (existingItem.amount === 1) {
				updatedItems = state.items.filter((item) => item.id !== action.payload)
			} else {
				const updatedAmount = existingItem.amount - 1
				const updatedItem = { ...existingItem, amount: updatedAmount }
				updatedItems = [...state.items]
				updatedItems[existingItemIndex] = updatedItem
			}

			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount,
			}
		default:
			return initialState
	}
}

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState)

	const addItemHandler = (item) => {
		dispatchCartAction({
			type: 'ADD_ITEM',
			payload: item,
		})
	}

	const removeItemHandler = (id) => {
		dispatchCartAction({
			type: 'REMOVE_ITEM',
			payload: id,
		})
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	}

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartProvider
