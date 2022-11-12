import React from "react";
import "./Pantry.css";
import PantrySearch from "./pantrySearch";
//import Data from "./ingredientsData.json";

function Pantry(props) {
  return (
    <div className={`Pantry ${props.darkmode ? "darkmode-page" : ""}`}>
      <font size="20">Add To Your Pantry!</font>
      <PantrySearch placeholder="Enter Item Name..." />
    </div>
  );
}

export default Pantry;
