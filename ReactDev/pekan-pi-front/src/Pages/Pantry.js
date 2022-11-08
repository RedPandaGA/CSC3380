import logo from "../Images/logo2.jpg"

function Pantry(props) {
    return ( 
        <div className={props.darkmode?"darkmode-page":""}>
            <h2>Pantry</h2>
            {/* <img src={logo} alt="logo"/> */}
        </div>
    );
}

export default Pantry;