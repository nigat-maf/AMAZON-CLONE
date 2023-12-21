import React, { useState } from "react";
import "../assets/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
	id,
	title,
	image,
	price,
	button,
	quantity,
	hideButton,
}) {
	const [{ cart }, dispatch] = useStateValue();
	const increament = () => {
		dispatch({
			type: "ADD_TO_CART",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				quantity: 1,
			},
		});
	};
	const decreament = () => {
		dispatch({
			type: "DELETE",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				quantity: 1,
			},
		});
	};

	const removeFromCart = () => {
		dispatch({
			type: "REMOVE_FROM_CART",
			id: id,
		});
	};
	return (
		<div className="checkoutProduct__innerWrapper">
			<img className="checkoutProduct__image" src={image} alt="" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">{`price: $${price}`}</p>

				<span className="incr-decr">
					{!hideButton && (
						<button className="inr_btn" onClick={increament}>
							<strong>+</strong>
						</button>
					)}
					{!hideButton && <h3>Qty= {quantity}</h3>}
					{!hideButton && (
						<button className="decr_btn" onClick={decreament}>
							<strong>-</strong>
						</button>
					)}
				</span>

				<br />
				<br />
				<button
					onClick={removeFromCart}
					className={button ? "hide" : "checkoutProduct__button"}
				>
					remove from cart
				</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
