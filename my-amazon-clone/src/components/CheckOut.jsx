import React, { useState } from "react";
import "../assets/CheckOut.css";
import SubTotal from "./SubTotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function CheckOut() {
	const [{ cart }, dispatch] = useStateValue();
	const [show, setshow] = useState();
	const stateHandler = () => {
		if (cart.length >0) {
			setshow(true);
		} else {
			setshow(false);
		}
		return;
	};
	useEffect(() => {
		stateHandler();
	}, []);
	return (
		<div className="checkout">
			<br />
			<div className="checkout__wrapper">
				<div className="checkout__left">
					<img
						className="checkout__image"
						src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
						alt=""
					/>
				</div>
				<div className="checkout__right">
					<h2>
						{show
							? "if you are done selecting items,next step click proced checkout button to place your order"
							: "your amazon cart ia empty"}
					</h2>
					<a href="">Shop today's deals</a>
					<br />
					<br />
					<button className="checkout__button1">
						<h4>
							{" "}
							<a href="">sign in to your account</a>
						</h4>
					</button>
					{"   "}

					<button className="checkout__button2">
						<h4>
							<a href="">signup now</a>
						</h4>
					</button>
				</div>
				<div className="checkout__third">
					<SubTotal />
				</div>
			</div>

			{cart.map((item) => (
				<CheckoutProduct
					key={item.id}
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					quantity={item.quantity}
				/>
			))}

			<p>
				The price and availability of items at Amazon.com are subject to change.
				The Cart is a temporary place to store a list of your items and reflects
				each item's most recent price. Shopping CartLearn more Do you have a
				gift card or promotional code? We'll ask you to enter your claim code
				when it's time to pay.
			</p>
		</div>
	);
}

export default CheckOut;
