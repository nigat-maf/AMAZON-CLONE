import React from "react";
import "../assets/SingleOrder.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function SingleOrder({ order }) {
	let cart = order.cart;
	console.log(cart);
	return (
		<div className="sorder">
			<div className="order__text">
				<div className="order__datewrapper">
					<h2>Order</h2>
					{moment.unix(order.created).format("MMM Do YYYY,h:mma")}
				</div>

				<div className="order__id">
					<p>
						<small>{order.orderId}</small>
					</p>
				</div>
			</div>

			<div className="order__producwrapper">
				{cart?.map((element) => (
					<CheckoutProduct
						id={element.id}
						title={element.title}
						image={element.image}
						price={element.price}
						quantity={element.quantity}
                        button 
					/>
				))}
			</div>
			<div className="order__total">
				<CurrencyFormat
					renderText={(value) => <h3>Order total:{value}</h3>}
					decimalScale={2}
					value={order.amount}
					displayType={"text"}
					thousandSeparator={true}
					prefix={"$"}
				/>
			</div>
		</div>
	);
}

export default SingleOrder;
