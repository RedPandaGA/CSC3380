import "./Pantry.css";
import PantrySearch from "./pantrySearch";
import PantryDisplay from "./pantryDisplay";

function Pantry(props) {
  return (
    <>
        {/* darkmode check */}
        <div className={`Pantry ${props.darkmode ? "darkmode-page" : ""}`}>
        {/* title */}
        <font size="20" style={{textAlign: "center"}}>Add To Your Pantry!</font>
        <h3 className={`h3Pantry ${props.darkmode ? "darkmode" : ""}`}> Search for ingredients to add to your pantry <br /> and enter quantity of each item below. </h3>
            <PantrySearch className= "pantrySearch1"/>
            <PantryDisplay/>
        </div>
    </>
  );
}

export default Pantry;
