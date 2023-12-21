import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

import "../assets/Header.css";
import { auth } from "../firebase";

function Header() {
	const [{ cart, user }, dispatch] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
					alt=""
				/>
			</Link>

			<div className="header__search">
				<a className="header__dropDownIcon" href="">
					<span>All </span>
					<FaAngleDown className="icon" />
				</a>
				<input className="header__searchInput" type="text" />
				<a className="header__searchIcon" href="">
					<FaSearch />
				</a>
			</div>
			<div className="header__language">
				<img
					className="image"
					src="https://cdn-icons-png.flaticon.com/128/206/206626.png"
					alt=""
				/>{" "}
				<a href="">EN </a>
				<a href="">
					<FaAngleDown className="arrow" />
				</a>
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span>Hello,{!user ? "Guest" : user?.email}</span>
					<span onClick={handleAuthentication}>
						<Link className="header__optionLineOne" to={!user && "/login "}>
							{user ? "sign Out" : "sign In"}
						</Link>
					</span>
				</div>
				<div className="header__option">
					<span style={{ display: "flex" }}>
						<span>
							<a className="header__optionLineTwo" href="">
								Account & List
							</a>
						</span>
						<span>
							<a className="header__optionLineTwo" href="">
								<FaAngleDown className="header__optionLineOneList" />
							</a>
						</span>
					</span>
				</div>

				<div className="header__option">
					<span>
						<a className="header__optionLineOne" href="">
							Return
						</a>
					</span>
					<span>
						<Link
							className="header__optionLineTwo"
							to="/checkout/payment/orders"
						>
							Order
						</Link>
					</span>
				</div>
				<div className="header__option">
					<span>
						<a className="header__basketCount" href="">
							{cart?.length}
						</a>
					</span>
					<span>
						<Link className="header__optionLineTwo" to="/checkout">
							<FaShoppingCart className="header__optionBasket" /> cart
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
