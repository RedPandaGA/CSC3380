import React, { useState, useEffect } from "react";
import RecipesList from "./recipesList";
//import './Recipe.css';

//const APIkey = "ec6b18b84aea41b8b12f6a6b6b4cfb67";
const ingredients = "beef,+cheese,+garlic,+rice,+salt,+pepper,+lemons,+eggs";
const APIkey = "d123acc25cd74b6a859c246e37ec77f6"; // Faris API key

function RecipiesPage() {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    getRecipe();
  }, []);

  function getRecipe() {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=${ingredients}&number=5`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipeData(data);
      })
      .catch(() => {
        console.log("error fetching recipe");
      });
  }

  return (
    <div className="RecipiesPage">
      {recipeData && <RecipesList recipeData={recipeData} />}
    </div>
  );
}

export default RecipiesPage;
