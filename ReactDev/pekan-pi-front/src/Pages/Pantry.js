import logo from "../Images/logo2.jpg"

function Pantry(props) {
    return ( 
        <div className={`pantry-page ${props.darkmode?"darkmode-page":""}`}>
            <h2>Pantry</h2>
        </div>
    );
}

export default Pantry;