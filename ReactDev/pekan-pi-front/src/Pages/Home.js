import "../home.css";
import MenuImage from "../Images/Home-images/menu.png";

function Home() {
  // var MenuItems = document.getElementById("MenuItems");
  // MenuItems.style.maxHeight = "0px";
  // function menuToggle() {
  // //   var MenuItems = document.getElementById("MenuItems");
  // //   if (MenuItems.style.maxHeight == "0px") {
  // //     MenuItems.style.maxHeight = "200px";
  // //   } else {
  // //     MenuItems.style.maxHeight = "0px";
  // //   }
  // // }

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="profilePage.html">
                {" "}
                <img src="logo2.png" width="150px" />
              </a>
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="profilePage.html">Home</a>
                </li>
                <li>
                  <a href="search.html">Pantry</a>
                </li>
                <li>
                  <a href="">Account</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
              </ul>
            </nav>
            <a href="search.html">
              {" "}
              <img
                src="../Images/Home-images/recipes.png"
                width="50px"
                height="50px"
              />{" "}
            </a>
            <a href="whisk.html">
              {" "}
              <img
                src="../Images/Home-images/recipes.png"
                width="50px"
                height="50px"
              />{" "}
            </a>
            <img
              src={MenuImage}
              className="menu-icon"
              //onClick={menuToggle()}
              alt="Menu Image"
            />
          </div>
          <div className="row">
            <div className="col-2">
              <h1>
                Limit Your Food Waste & Efficiently Cook Meals <br />
                with Recipes You Already Have!
              </h1>
              <p>
                Enter the ingredients that are in your pantry, <br />
                and we'll find the perfect recipe for YOU!
              </p>
              <a href="search.html" className="btn">
                Explore Now
              </a>
            </div>
            <div className="col-2">
              <img src="../Images/Home-images/table 2.jpeg" />
            </div>
          </div>
          {/* <!------ featured categories ------ > */}
          <div className="categories">
            <div className="small-container">
              <h1 className="title">Cuisines</h1>
              <div className="row img-size">
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/africa.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">African</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/american.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">American</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/chinese.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">Chinese</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/french.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">French</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="../Images/Home-images/greek.jpeg" width="150px" />
                  </a>
                  <h4 className="culture">Mediterranean</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/indian.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">Indian</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/italian2.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">Italian</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/japanese.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">Japanese</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="../Images/Home-images/korean.png" width="150px" />
                  </a>
                  <h4 className="culture">Korean</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/brazil.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">Brazilian</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/mexican.jpeg"
                      width="150px"
                    />
                  </a>
                  <h4 className="culture">Spanish</h4>
                </div>
                <div className="col-3">
                  <a href="search.html">
                    {" "}
                    <img
                      src="../Images/Home-images/vietname.jpeg"
                      width="150px"
                    />
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
                    <img
                      src="../Images/Home-images/table5.jpeg"
                      className="popular-img"
                    />
                  </div>
                  <div className="col-2">
                    <p>
                      Click here to view PeKan Pi's most popular recipe this
                      month{" "}
                    </p>
                    <h1>
                      Click Here to View PeKan Pi's Most Popular Recipe This
                      Month!
                    </h1>
                    <a href="search.html" className="btn">
                      View Recipe Now &#8594;{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
