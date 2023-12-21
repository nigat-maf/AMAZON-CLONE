import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "../assets/Paymenet.css";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../Axios";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";

function Payment() {
	const [{ cart, user }, dispatch] = useStateValue();
	const stripe = useStripe();
	const ellements = useElements();
	const [error, seterror] = useState(null);
	const [disabled, setdisabled] = useState(true);
	const [succeeded, setsucceeded] = useState(false);
	const [processing, setprocessing] = useState("");
	const [clientSecret, setclientSecret] = useState(true);
	const navigatTo = useNavigate();

	const cartTotal = (cart) =>
		cart?.reduce((amount, item) => amount + item.price * item.quantity, 0);
		const getQuantity = (cart) => {
			return cart?.reduce((qty, item) => qty + item.quantity, 0);
		};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setprocessing(true);
		const payLoad = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: { card: ellements.getElement(CardElement) },
			})
			.then(({ paymentIntent }) => {
				addDoc(collection(db, "users"), {
					users: user?.uid,
					orders: {
						orderId: paymentIntent.id,
						cart: cart,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					},
				});

				setsucceeded(true);
				seterror(null);
				setprocessing(false);
				dispatch({
					type: "EMPTY_CART",
				});
				navigatTo("/checkout/payment/orders");
			});
	};

	const handleChange = (e) => {
		setdisabled(e.empty);
		seterror(e.error ? e.error.message : "");
	};

	async function getClientSecret() {
		try {
			const { data } = await axios.post(
				`/payments/create?total=${cartTotal(cart) * 100}`
			);
			// console.log(data)
			setclientSecret(data.clientSecret);
		} catch (error) {
			alert(error);
		}
	}
	useEffect(() => {
		getClientSecret();
	}, [cart]);
	return (
		<div className="payment">
			<br />
			<div className="payment__warapper">
				<h2 className=""> checkout
					<Link to="">
						({getQuantity(cart)}{" "}
						{getQuantity(cart) === 1 ? "item" : "items"}):{" "}
					</Link>
				</h2>
			</div>
			<div className="payment__container">
				<div className="payment__Section1">
					<div className="payment__title">
						<h3>Delivery adress</h3>
					</div>
					<div className="payment__actualAdress">
						<p>{user?.email}</p>
						<p>1234 E sliver </p>
						<p>denver colorado</p>
					</div>
				</div>
				<hr />
				<div className="payment__Section2">
					<div className="payment__title">
						<h3>Rewiew items & Delivery </h3>
					</div>
					<div className="payment__reviewItem">
						{cart.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								quantity={item.quantity}
							/>
						))}
					</div>
				</div>
				<hr />
				<br />
				<div className="payment__Section3">
					<div className="payment__title">
						<h3>Payment method </h3>
					</div>
					<div className="payment__method">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<br />
							<div className="payment__inner">
								<CurrencyFormat
									renderText={(value) => <h3>Order total:{value}</h3>}
									decimalScale={2}
									value={cartTotal(cart)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<br />
								<button
									type="submit"
									className="payment__button"
									disabled={processing || disabled || succeeded}
								>
									<span>{processing ? <p>processing</p> : "pay now"}</span>
								</button>
								{error && <div>{error}</div>}
							</div>
						</form>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
}

export default Payment;
