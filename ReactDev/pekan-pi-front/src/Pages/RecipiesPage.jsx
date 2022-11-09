import React, {useState, useEffect} from 'react';
import RecipesList from './recipesList';
//import './Recipe.css';

//const APIkey = "ec6b18b84aea41b8b12f6a6b6b4cfb67";
const ingredients = "beef,+cheese,+garlic,+rice,+salt,+pepper,+lemons,+eggs"
const APIkey = "5569351c7ed44a0fa6de0b81882daa58";

function RecipiesPage() {
    const [recipeData, setRecipeData] = useState(null);
    
    useEffect(() => {
        getRecipe();
    }, []);

    function getRecipe() {
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=${ingredients}`)
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