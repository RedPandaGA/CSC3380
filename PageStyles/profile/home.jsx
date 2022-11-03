import React from "react";
import images from "./images";
import React from "react";
import recipes from "./images/recipes.png";
function Home() {
  return (
    <>
      <div class="header">
        <div class="container">
          <div class="navbar">
            <div class="logo">
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
                  <a href="">Account</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Pantry</a>
                </li>
              </ul>
            </nav>
          <div class="row">
            <div class="col-2">
              <h1>
                Limit Your Food Waste & Efficiently Cook Meals <br />
                with Recipes You Already Have!
              </h1>
              <p>
                Enter the ingredients that are in your pantry, <br />
                and we'll find the perfect recipe for YOU!
              </p>
              <a href="search.html" class="btn">
                Explore Now
              </a>
            </div>
            <div class="col-2">
              <img src="table 2.jpeg" />
            </div>
          </div>
          {/* <!------ featured categories ------ > */}
          <div class="categories">
            <div class="small-container">
              <h1 class="title">Cuisines</h1>
              <div class="row img-size">
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="africa.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">African</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="american.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">American</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="chinese.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">Chinese</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="french.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">French</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="greek.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">Mediterranean</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="indian.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">Indian</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="italian2.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">Italian</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="japanese.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">Japanese</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="korean.png" width="150px" />
                  </a>
                  <h4 class="culture">Korean</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="brazil.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">Brazilian</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="mexican.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">Spanish</h4>
                </div>
                <div class="col-3">
                  <a href="search.html">
                    {" "}
                    <img src="vietname.jpeg" width="150px" />
                  </a>
                  <h4 class="culture">Vietnamese</h4>
                </div>
              </div>
            </div>
            {/* <!------ most famous recipe ------> */}
            <div class="popular">
              <div class="small-container">
                <div class="row">
                  <div class="col-2">
                    <img src="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="popular">
              <div class="small-container">
                <div class="row">
                  <div class="col-2">
                    <img src="table5.jpeg" class="popular-img" />
                  </div>
                  <div class="col-2">
                    <p>
                      Click here to view PeKan Pi's most popular recipe this
                      month{" "}
                    </p>
                    <h1>
                      Click Here to View PeKan Pi's Most Popular Recipe This
                      Month!
                    </h1>
                    <a href="search.html" class="btn">
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
