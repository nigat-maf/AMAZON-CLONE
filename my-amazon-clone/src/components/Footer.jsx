import React from "react";
import "../assets/Footer.css";
import { TbWorld } from "react-icons/tb";
import { MdOutlineUnfoldMoreDouble } from "react-icons/md";

function Footer() {
	const footerData = [
		{
			title: "Get to Know Us",
			items: [
				{ text: "Careers", href: "#" },
				{ text: "Blog", href: "#" },
				{ text: "About Amazon", href: "#" },
				{ text: "Investor Relations", href: "#" },
				{ text: "Amazon Devices", href: "#" },
				{ text: "Amazon Science", href: "#" },
			],
		},
		{
			title: "Amazon Payment Products",
			items: [
				{ text: "Amazon Business Card", href: "#" },
				{ text: "Shop with Points", href: "#" },
				{ text: "Reload Your Balance", href: "#" },
				{ text: "Amazon Currency Converter", href: "#" },
			],
		},
		{
			title: "Make Money with Us",
			items: [
				{ text: "Sell products on Amazon", href: "#" },
				{ text: "Sell on Amazon Business", href: "#" },
				{ text: "Sell apps on Amazon", href: "#" },
				{ text: "Become an Affiliate", href: "#" },
				{ text: "Advertise Your Products", href: "#" },
				{ text: "Self-Publish with Us", href: "#" },
				{ text: "Host an Amazon Hub", href: "#" },
				{ text: "See More Make Money with Us", href: "#" },
			],
		},

		{
			title: "Let Us Help You",
			items: [
				{ text: "Amazon and COVID-19", href: "#" },
				{ text: "Your Account", href: "#" },
				{ text: "Your Orders", href: "#" },
				{ text: "Shipping Rates & Policies", href: "#" },
				{ text: "Amazon Prime", href: "#" },
				{ text: "Returns & Replacements", href: "#" },
				{ text: "Manage Your Content and Devices", href: "#" },
				{ text: "Amazon Assistant", href: "#" },
				{ text: "Help", href: "#" },
			],
		},
	];
	return (
		<div className="foot">
			<div className="backToTop" id="back">
				<span>
					<a href="#" className="header__clearlink">
						<h3>Back to top</h3>
					</a>
				</span>
			</div>
			<div className="footer row container m-auto ">
				{footerData.map((section, index) => (
					<ul key={index} className="col-6 col-md-3 ">
						<h3>{section.title}</h3>
						{section.items.map((item, itemIndex) => (
							<li key={itemIndex}>
								<a href={item.href}>{item.text}</a>
							</li>
						))}
					</ul>
				))}
			</div>
			<div className="footer_logos_container">
				<div className="footer_logos_wrapper">
					<div className="header__clearlink">
						<div className="footer__logo">
							<img
								src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon-logo"
							/>
						</div>
					</div>
					<div className="ftr_wrapper_right ">
						<div className="language ftr_wrapper_right_brdr">
							<TbWorld fontSize="small" /> &nbsp;&nbsp;<span>English</span>
							<MdOutlineUnfoldMoreDouble fontSize="small" />
						</div>
						<div className="ftr_wrapper_right_brdr">
							
								$ &nbsp;&nbsp;<span>USD-U.S.Dollar</span>
							
						</div>
						<div className="us ftr_wrapper_right_brdr">
							<img
								src="https://t3.ftcdn.net/jpg/05/43/00/48/360_F_543004860_AiMa6Qr8ub2khwxduNxWg8R9bpYTauW4.jpg"
								alt="us-flage"
							/>{" "}
							<span>United States</span>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__credit ">
				<h4>
					Built by:-
					<a href="https://nigatam2023.com/" target="_blank" rel="noreferrer">
						{" "}
						(Nigat A. Gest)
					</a>
				</h4>
			</div>
		</div>
	);
}

export default Footer;
