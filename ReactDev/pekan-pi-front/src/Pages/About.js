import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "../home.css";
import GroupImage from "../Images/About-images/group1.jpeg";

function About(props) {
  const theme = createTheme({
    // makes the theme for the whole profile
    palette: {
      background: {
        paper: "#e3eca4", //component background green lime color
        default: "#e3eca4", //background color
      },
    },
    typography: {
      fontFamily: "Playfair Display",
      fontWeightRegular: 700,
    },
  });
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">About Us</h3>
              <div className="underline2 mx-auto"></div>
              <h4>BLAH BLAH BLAH BLAH BLAH </h4>
              {/* <Link to="/about" className="btn btn-warning shadow">
              {" "}
              Read More
            </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* mission statement */}
      <section className="section bg-c-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h1 className="main-heading">Our Mission</h1>
              <div className="underline mx-auto"></div>
            </div>
            <div className="cold-md-4 text-center">
              <h2>Our Vision</h2>
              <h4>BLAH BLAH BLAH</h4>
            </div>
            <div className="cold-md-4 text-center">
              <h2>Our Mission</h2>
              <h4>BLAH BLAH BLAH</h4>
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h1>blah blah blah</h1>
            <p>blah blah blah</p>
          </div>
          <div className="col-5">
            <img src={GroupImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
