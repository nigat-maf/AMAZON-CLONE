// const functions = require("firebase-functions");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
	try {
		console.log("Payment Request Recieved for this amount >>> ", total);

		const paymentIntent = await stripe.paymentIntents.create({
			amount: parseInt(total), // subunits of the currency
			currency: "usd",
		});

		// OK - Created
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
	}
});

app.listen(10000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("app listning");
	}
});
// exports.api = functions.https.onRequest(app);
