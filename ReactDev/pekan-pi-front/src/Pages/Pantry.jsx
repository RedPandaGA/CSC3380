import React from "react";
import PantrySearch from "./pantrySearch";

function Pantry() {
    return ( 
        <div className="Pantry">
            <h2>Your Pantry</h2>
            {/* <img src={logo} alt="logo"/> */}
            <PantrySearch/>
        </div>
    );
}

export default Pantry;