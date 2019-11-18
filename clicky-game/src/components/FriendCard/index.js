import React from "react";
import "./style.css";

// Development Image Source
// change the friends.json file to look like the following: "../assets/images/Bill_Dauterive.png"

// Production Image Source
// change the friends.json file to look like the following: "./assets/images/Bill_Dauterive.png"


function FriendCard(props) {
  return (
    <div className="card" onClick={() => {      
      props.handleClick(props.id)
    }} clicked={props.clicked}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
