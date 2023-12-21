import React, { useEffect, useState } from "react";

import "./App.css";
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import SharedLayout from "./components/SharedLayout";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
const promise = loadStripe(
	"pk_test_51ON1dPIx4Du1uGFCgVfXXYvUho1eydCwUfCe87L2XJZ9qpIYWTSu9YTvR0DVGb7E5ug1ZBNlqS5b22QvZ6VrVfrY00CQb3pVQd"
);
function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<>
			<div className="app">
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/checkout" element={<CheckOut />} />
						<Route path="/login" element={<Login />} />
						<Route path="/checkout/payment/orders" element={<Orders />} />
						<Route
							path="/checkout/payment"
							element={
								<Elements stripe={promise}>
									<Payment />
								</Elements>
							}
						/>
					</Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
