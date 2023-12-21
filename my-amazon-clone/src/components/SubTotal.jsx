import React from "react";
import "../assets/SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function SubTotal() {
	const [{ cart }, dispatch] = useStateValue();
	const cartTotal = (cart) =>
		cart?.reduce((amount, item) => amount + item.price * item.quantity, 0);
	const getQuantity = (cart) => {
		return cart?.reduce((qty, item) => qty + item.quantity, 0);
	};

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							subtotal ({getQuantity(cart)}
							{getQuantity(cart) === 1 ? "item" : "items"}):{" "}
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							this order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={cartTotal(cart)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<br />
			<br /> <br />
			<button className="subtotal__button" type="submit">
				<Link to="/checkout/payment">
					<h3>proced to checkout</h3>
				</Link>
			</button>
		</div>
	);
}

export default SubTotal;
