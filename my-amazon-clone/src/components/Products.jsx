import React from "react";
import "../assets/Products.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, price, discription, image, show, special }) {
	const [{ cart }, dispatch] = useStateValue();
	// console.log(cart)
	const addToCart = () => {
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
	return (
		<>
			<div className={`product ${special && "product__bigimage "}`}>
				{/* <div className="product__info"> */}
				<h3>{title}</h3>
				<br />
				<h3
					className={`${special && " product__button2"}`}
				>{`price:$${price}`}</h3>
				<img
					className={`product__image ${special && "product__bigimage"}`}
					src={image}
					alt=""
				/>
				{show && (
					<>
						<div className="product__promotion">
							<div className="product__inner1">
								<a href="">up to 55% off</a>
							</div>{" "}
							<br />
							<a className="product__inner2" href="">
								Deal
							</a>
							<br />
						</div>
					</>
				)}
				<div>
					<a href="">{discription}</a>
				</div>{" "}
				<br />
				<button
					className={`product__button ${special && "product__button2"}`}
					onClick={addToCart}
				>
					<h4>Add to cart</h4>
				</button>
				{/* </div> */}
			</div>
		</>
	);
}

export default Products;
