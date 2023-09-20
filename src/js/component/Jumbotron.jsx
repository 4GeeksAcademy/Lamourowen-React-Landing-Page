import React from "react";
import style from "../../styles/index.css";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
  return (
    <div className="jumbotron bg-light jumbotron-fix">
      <h1 class="display-4">A Warm Welcome!</h1>
      <p class="lead">

      </p>
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>

      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
      </p>
    </div>
  )
};
export default Jumbotron;
