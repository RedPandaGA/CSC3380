// import React, { useState, useEffect } from "react";
// //import './Recipe.css';

// //const APIkey = "ec6b18b84aea41b8b12f6a6b6b4cfb67";
// const APIkey = "d123acc25cd74b6a859c246e37ec77f6"; // Faris API key

// function Recipe({ recipe }) {
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     fetch(
//       `https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${APIkey}&includeNutrition=false`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setImageUrl(data.image);
//       })
//       .catch(() => {
//         console.log("error fetching recipe image");
//       });
//   }, [recipe.id]);

//   return (
//     <div className="details">
//       <h1 className="h1R">{recipe.title}</h1>
//       <img src={imageUrl} className="foodImg" />
//       <ul className="Instructions">
//         <li>Prep Time: {recipe.readyInMinutes} minutes</li>
//         <li>Number of Servings: {recipe.servings}</li>
//       </ul>
//       {/* <a href={recipe.sourceUrl}>Go to Recipe</a> */}
//     </div>
//   );
// }

// export default Recipe;
