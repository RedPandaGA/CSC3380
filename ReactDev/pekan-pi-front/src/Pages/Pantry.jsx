import React from "react";
import "./Pantry.css";
import PantrySearch from "./pantrySearch";
import PantryDisplay from "./pantryDisplay"
//import Data from "./ingredientsData.json";

function Pantry(props) {
  return (
    <>
        <div className={`Pantry ${props.darkmode ? "darkmode-page" : ""}`}>
          <font size="20" style={{marginBottom: "-50px", textAlign: "center"}}>Add To Your Pantry!</font>
          <PantrySearch placeholder="Enter Item Name..." />
          <PantryDisplay props={props}/>
        </div>
    </>
  );
}

export default Pantry;
