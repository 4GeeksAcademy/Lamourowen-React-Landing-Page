import React from "react";
import style from "../../styles/index.css";

/*React Syntax For Incline Styles*/
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const CardVariant = () => {
	return (
		<div>
			<div class="card" style={{ width: "18rem" }}>
				<img class="card-img-top placeholder" src="..." alt="Card image cap"/>
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Find Out More!</a>
				</div>
			</div>
		</div>
	)
};
// <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
export default CardVariant;
