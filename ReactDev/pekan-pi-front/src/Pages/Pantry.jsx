import React from "react";
import "./Pantry.css";
import PantrySearch from "./pantrySearch";
//import Data from "./ingredientsData.json";

function Pantry() {
  return (
    <div className="Pantry">
      <font size="20">Add To Your Pantry!</font>
      <PantrySearch placeholder="Enter Item Name..." />
    </div>
  );
}

export default Pantry;
