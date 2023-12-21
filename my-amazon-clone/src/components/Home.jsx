import React from "react";
import "../assets/Home.css";
import Products from "./Products";

function Home() {
	return (
		<>
			<div className="home">
				<img
					className="home__image"
					src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71A3yQHkmWL._SX3000_.jpg"
					alt="img-2"
				/>
				<div className="home__row">
					<Products
						id="1"
						price={22.99}
						title="Top Deal Echo Smart Speaker"
						discription="see all deals"
						image="https://m.media-amazon.com/images/I/714Tmglu5oL._AC_SY460_.jpg"
						show
					/>
					<Products
						id="2"
						price={20.99}
						title="Epic deals in sports & outdoors"
						discription="Shop sales & deals"
						image="https://images-na.ssl-images-amazon.com/images/G/01/sports/HolidayGG_HP/November/Cat_cards/Skate_NOV_DT_2x._SY608_CB576711483_.jpg"
					/>
					<Products
						id="3"
						price={19.99}
						title="Fashion gifts for the family"
						discription="Explore the Fashion Gift Guide"
						image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/HOLIDAY23/GW/DEC/CC/desktop/CategoryCard_d_2x_HolidayFlip23_FGG1_Dec._SY608_CB574574264_.jpg"
					/>
				</div>
				<div className="home__row">
					<Products
						id="4"
						price={21.99}
						title="Women’s sweaters starting at $20"
						discription="Shop now"
						image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SITE_FLIPS/HOLIDAY23/GW/NOV/CC/HOL_MOB_CATCARD_2X._SY608_CB571914728_.jpg"
					/>
					<Products
						id="5"
						price={20.99}
						title="Gear up for game day"
						discription="Shop all teams"
						image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/SportsAndOutdoors/TNF/NFLTNF23_Wk14_PatriotsSteelers_Category-Card_Desktop-2X_758x608._SY608_CB572332700_.jpg"
					/>
					<Products
						id="6"
						price={950.99}
						title="Patriots vs. Steelers"
						discription="Add to watchlist"
						image="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Other/TNFL_23_DashboardCard_758x608_POST_Final_noLocale_DOT6989_Logos._SY608_CB572791150_.jpg"
					/>
				</div>
				<br />
				<br />
				<br />
				<br />

				<Products
					id="7"
					special
					className="product__bigimage"
					image="https://m.media-amazon.com/images/G/01/GiftCards/Consumer/multi-product/House/2022_fallback_HouseAds_1940x500_EN.jpg"
				/>
				<br />
				<br />
			</div>
		</>
	);
}

export default Home;
