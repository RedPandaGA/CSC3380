import './RecipesPage.css';
import {useEffect, useState} from 'react';
import Data from "./ingredientsData.json";
const APIkey = "ec6b18b84aea41b8b12f6a6b6b4cfb67";
const ingredients = "apples";

function RecipesPage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        // const response = await fetch(`http://localhost:3002/Recipes/${ingredients}`);
        const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=${ingredients}&number=9`);
        const responseJson = await response.json();
        setList(responseJson.recipes);
    };

    return ( 
        <div>
            <h1>Recipes you can make!</h1>
            {list.map((recipe) => {
                return(
                    <div>
                        <p>{recipe.title}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default RecipesPage;