import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "../home.css";
import GroupImage from "../Images/About-images/group1.jpg";

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
    // adds darkmode styling depending if props.darkmode is true
    <div className={`Home ${props.darkmode ? "darkmode-page" : ""}`}>
      {/*************************************       START HEADING       *************************************/}
      <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="abouth1">
                  What Do 6 Computer
                  <br /> Science Kids Know About Cooking?
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/*************************************       END HEADING       *************************************/}

        {/* our team */}
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h2>Mission Statement.</h2>
              <h3 className="mission-statement">
                Like most college students, we often find ourselves low on time,
                money, and ingredients. As busy home cooks and frugal spenders,
                our mission <br /> was to create an accessible website that not
                only recorded the items that we already owned, but also gave us
                recipes based on those ingredients.{" "}
              </h3>
              <h4 className="tabs-quote">
                WHY OPEN 12 TABS WHEN YOU CAN HAVE 1?
              </h4>
              <h3 className="mission-statement">
                On Pekan Pi, users are able to find recipes with ingredients
                that they already have in their pantries, keep track of those
                ingredients and their quantity/ amount, saving them time and
                money.{" "}
              </h3>{" "}
              <h3 className="tabs-quote2">
                & Cheers to efficient grocery shopping!
              </h3>
              <a href="/Pantry" className="btn2">
                Update Your Pantry
              </a>
              <a href="/Recipes" className="btn3">
                View Recipes
              </a>
            </div>
            <div className="col-5">
              <img src={GroupImage} />
              <h5 className="main-heading2">
                Gavin Avery, Adam Elkhanoufi, Faris Khattak, Michelle Vo, Sejal
                Patel, Milan Nguyen (from Left to Right)
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* our team */}

      {/* picture of team */}
      <div className="col-2">
        <img alt="" src="../Images/Home-images/table 2.jpeg" />
      </div>
    </div>
  );
}

export default About;
