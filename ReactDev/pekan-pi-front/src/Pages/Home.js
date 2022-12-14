import "../home.css";
import TableImage from "../Images/Home-images/table 2.jpeg";
import AfricaImage from "../Images/Home-images/africa.jpeg";
import AmericanImage from "../Images/Home-images/american.jpeg";
import ChineseImage from "../Images/Home-images/chinese.jpeg";
import FrenchImage from "../Images/Home-images/french.jpeg";
import GreekImage from "../Images/Home-images/greek.jpeg";
import IndianImage from "../Images/Home-images/indian.jpeg";
import ItalianImage from "../Images/Home-images/italian2.jpeg";
import JapaneseImage from "../Images/Home-images/japanese.jpeg";
import KoreanImage from "../Images/Home-images/korean.png";
import BrazilianImage from "../Images/Home-images/brazil.jpeg";
import MexicanImage from "../Images/Home-images/mexican.jpeg";
import VietnameseImage from "../Images/Home-images/vietname.jpeg";
import Table5Image from "../Images/Home-images/table5.jpeg";

function Home(props) {
  return (
    // add dark mode check
    <div className={`Home ${props.darkmode ? "darkmode-page" : ""}`}>
      <div className="header">
        <div className="container">
          {/*************************************       START HEADER       *************************************/}
          <div className="row">
            <div className="col-2">
              <h1>
                Limit Your Food Waste & Efficiently Cook Meals <br />
                with Ingredients You Already Have!
              </h1>
              <p>
                Enter the ingredients that are in your pantry, <br />
                and we'll find the perfect recipe for YOU!
              </p>

              <a href="/Pantry" className="btn">
                Explore Now
              </a>
            </div>
            <div className="col-2">
              <img src={TableImage} />
            </div>
          </div>
          {/*************************************       END HEADER       *************************************/}
          
          {/* <!------ featured categories ------ > */}
          {/* adding different types of food with pictures */}
          <div className="categories">
            <div className="small-container">
              <h2 className="title">Cuisines</h2>
              <div className="row img-size">
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={AfricaImage} width="150px" />
                  </a>
                  <h4 className="culture">African</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={AmericanImage} width="150px" />
                  </a>
                  <h4 className="culture">American</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={ChineseImage} width="150px" />
                  </a>
                  <h4 className="culture">Chinese</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={FrenchImage} width="150px" />
                  </a>
                  <h4 className="culture">French</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={GreekImage} width="150px" />
                  </a>
                  <h4 className="culture">Mediterranean</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={IndianImage} width="150px" />
                  </a>
                  <h4 className="culture">Indian</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={ItalianImage} width="150px" />
                  </a>
                  <h4 className="culture">Italian</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={JapaneseImage} width="150px" />
                  </a>
                  <h4 className="culture">Japanese</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={KoreanImage} width="150px" />
                  </a>
                  <h4 className="culture">Korean</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={BrazilianImage} width="150px" />
                  </a>
                  <h4 className="culture">Brazilian</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={MexicanImage} width="150px" />
                  </a>
                  <h4 className="culture">Spanish</h4>
                </div>
                <div className="col-3">
                  <a href="/Recipes">
                    {" "}
                    <img src={VietnameseImage} width="150px" />
                  </a>
                  <h4 className="culture">Vietnamese</h4>
                </div>
              </div>
            </div>

            {/* <!------ most famous recipe ------> */}
            <div className="popular">
              <div className="small-container">
                <div className="row">
                  <div className="col-2">
                    <img src="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="popular">
              <div className="small-container">
                <div className="row">
                  <div className="col-2">
                    <img src={Table5Image} className="popular-img" />
                  </div>
                  <div className="col-2">
                    <h2>
                      Click Here to View PeKan Pi's Most Popular Recipe This
                      Month!
                    </h2>
                    <a href="/Recipes" className="btn">
                      View Recipe Now &#8594;{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;