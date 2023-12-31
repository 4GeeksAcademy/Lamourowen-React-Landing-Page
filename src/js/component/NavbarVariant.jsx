import React from "react";
import style from "../../styles/index.css";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const NavbarVariant = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark nav-pad">
				<a class="navbar-brand margin-r-space" href="#">Start Bootstrap</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Services</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Content</a>
						</li>
					</ul>
				</div>
			</nav>
			<navbar />
		</div>
	)
};

export default NavbarVariant;
