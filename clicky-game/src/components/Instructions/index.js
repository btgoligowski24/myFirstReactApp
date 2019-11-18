import React from "react";
import "./style.css";


function Instructions(props) {
  // Production Background Image URL code
  const imageUrl = "./assets/images/sunrise.jpg";
  const style = {backgroundImage: `url(${imageUrl})`};
  return (
    <div className="container-fluid instructions text-center" style={style}>
      <h1 className="font-weight-bold superSized">Memory Game!</h1>
      <h3>Click on an image to score points, but don't click on any more than once!</h3>
    </div>
  )
}

export default Instructions;
