import React from "react";
import style from "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import CardVariant from "./Cards";
import NavbarVariant from "./NavbarVariant";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
	return (
		<div>
			<NavbarVariant />
			<div className="text-center container">
				<Jumbotron />
				<div className="d-flex justify-content-between">
					<CardVariant />
					<CardVariant />
					<CardVariant />
					<CardVariant />
				</div>


			</div>
		</div>
	);
};

export default Home;
