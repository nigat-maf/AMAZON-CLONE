import React, { useEffect, useState } from "react";
import { QuerySnapshot, collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase";
import "../assets/Orders.css";
import SingleOrder from "./SingleOrder";
import { useStateValue } from "./StateProvider";

function Orders() {
	const [{ cart, user }, dispatch] = useStateValue();
	const [orders, setorders] = useState([]);
	async function fetchData() {
		if (user) {
			await getDocs(collection(db, "users")).then((QuerySnapshot) => {
				const newData = QuerySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				let eachD = newData.map((e, i) => {
					return e.orders;
				});

				setorders(eachD);
			});
		} else {
			setorders([]);
		}
	}
	useEffect(() => {
		fetchData();
	}, [user]);
	console.log(orders);
	return (
		<div className="orders">
			<h1> your Orders</h1>
			{orders.map((order) => (
				<SingleOrder order={order} />
			))}
            <br />
		</div>
	);
}

export default Orders;
