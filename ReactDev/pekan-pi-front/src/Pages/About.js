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
    <div className={`Home ${props.darkmode ? "darkmode-page" : ""}`}>
      <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h4 className="main-heading">
                  What Do 6 Stinky Computer
                  <br /> Science Kids Know About Cooking?
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* our team */}
        <div className="container">
          <div className="row">
            <div className="col-5">
              <h1>Mission Statement.</h1>
              <h3 className="mission-statement">
                Like most college students, we often find ourselves low on time,
                money, and ingredients. As home cooks, we wanted to quickly find
                recipes with ingredients that we already had in our pantry. As
                busy college students, we wanted a database that kept track of
                all of the ingredients that were already in our home. And as
                frugal spenders, we wanted to know exactly what ingredients and
                how much of those ingredients we already had and would need to
                buy in order to avoid inefficient grocery shopping.
              </h3>
              <a href="" className="btn">
                Back to Home
              </a>
            </div>
            <div className="col-5">
              <img src={GroupImage} />
              <h5 className="main-heading2">
                Gavin Avery, Adam Elkhanoufi, Faris Khattak, Milan Nguyen, Sejal
                Patel, Michelle Vo
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
