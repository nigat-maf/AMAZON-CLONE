import React, { createContext, useReducer, useContext } from "react";
export const appContext = createContext();
export const intialState = {
	cart: [],
	user: null,
};
export const reducer = (state, action) => {
	// console.log(action)
	switch (action.type) {
		case "ADD_TO_CART":
			const existingItem = state.cart.find(
				(item) => item.id === action.item.id
			);
			if (existingItem) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.id === action.item.id
							? { ...item, quantity: item.quantity + action.item.quantity } //1 + no of click
							: item
					),
				};
			} else {
				return {
					...state,
					cart: [...state.cart, action.item],
				};
			}

		case "DELETE":
			const existItem = state.cart.find((item) => item.id === action.item.id);
			if (existItem) {
				if (existItem.quantity === 1) {
					// Remove the item from the basket
					return {
						...state,
						cart: state.cart.filter((item) => item.id !== action.item.id), // if it one delete by filter and
					};
				} else {
					// Reduce the quantity of the item by 1
					return {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.item.id
								? { ...item, quantity: item.quantity - 1 }
								: item
						),
					};
				}
			} else {
				return {
					...state,
					cart: [...state.cart, action.item],
				};
			}

		case "REMOVE_FROM_CART":
			const index = state.cart.findIndex(
				(cartItem) => cartItem.id === action.id
			);
			let newCart = [...state.cart];
			if (index >= 0) {
				newCart.splice(index, 1);
			} else {
				console.warn(
					`i can't remove product id : ${action.id} as its not in cart`
				);
			}
			return {
				...state,
				cart: newCart,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "EMPTY_CART":
			return {
				...state,
				cart: [],
			};

		default:
			return state;
	}
};

export const StateProvider = ({ reducer, intialState, children }) => {
	return (
		<appContext.Provider value={useReducer(reducer, intialState)}>
			{children}
		</appContext.Provider>
	);
};

export const useStateValue = () => {
	return useContext(appContext);
};
