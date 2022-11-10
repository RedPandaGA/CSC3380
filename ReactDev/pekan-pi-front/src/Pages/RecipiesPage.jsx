import React, { useState, useEffect } from "react";
import RecipesList from "./recipesList";
import { createTheme, SliderValueLabel, ThemeProvider } from "@mui/material";
import RecipeCard from "../Components/RecipeCard";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useSlotProps } from "@mui/base";
import { getValue } from "@mui/system";
import axios from 'axios';
//import './Recipe.css';

//const APIkey = "ec6b18b84aea41b8b12f6a6b6b4cfb67";
//const ingredients = "beef,+cheese,+garlic,+rice,+salt,+pepper,+lemons,+eggs";
const APIkey = "d123acc25cd74b6a859c246e37ec77f6"; // Faris API key

function RecipiesPage(props) {
  const theme = createTheme({
    // makes the theme for the whole profile
    palette: {
      primary: {
        main: "#ff523b", // main orange color
      },
    },
    typography: {
      fontFamily: "Playfair Display",
    },
  });

  const [recipeData, setRecipeData] = useState(null);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   getRecipe();
  // }, []);

  // convert this function to a call to Express server
  // function getRecipe() {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APIkey}&ingredients=${ingredients}&number=1`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setRecipeData(data);
  //     })
  //     .catch(() => {
  //       console.log("error fetching recipe");
  //     });
  // }

  // allows users to grab recipes based on the name
  function getRecipeByName(search){
    const token = JSON.parse(localStorage.getItem('udata')).token
    axios({
      method: 'GET',
      url: 'http://localhost:3002/getRecipesByName',
      params: {
        search: search,
      },
      headers: {
        Authorization: `token ${token}`,
      }
    }).then((res) => {
      setRecipeData(res);
      console.log(res.data);
    }).catch(() => {
      console.log("Error fetching recipe by NAME");
    });
  }
  
  // allows users to grab recipes based on current items in their pantry
  function getRecipeByPantry(ingredients){
    const token = JSON.parse(localStorage.getItem('udata')).token;
    axios({
      method: 'GET',
      url: 'http://localhost:3002/getRecipesByPantry',
      params: {
        ingredients: ingredients, // 
      },
      headers: {
        Authorization: `token ${token}`,
      }
    });
  }

  // function handleChange(e){
  //   setSearch(e.target.value);
  // }

  // list of # of cards to map on page
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    // Adam's code
    // <div className="RecipiesPage">
    //   {recipeData && <RecipesList recipeData={recipeData} />}
    // </div>

    <ThemeProvider theme={theme}>
      <div className={props.darkmode ? "darkmode-ppage" : ""}>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item sm={8}>
            <Typography variant="h2" align="center" gutterBottom>
              Recipes
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item sm={5}>
            <Typography variant="h5" align="center" sx={{ mb: 2 }}>
              Based on your entered search results!
            </Typography>
            <TextField 
              id="search-input"
              label="Search for recipes"
              name="search"
              type="text"
              value={search}
              onChange={s => setSearch(s.target.value)}
              margin="normal"
              placeholder="Enter your desired recipe"
              fullWidth
              sx={{mb: 2}}
            />
            <Button variant="contained" onClick={() => getRecipeByName(search)} sx={{mb: 2}}>Search</Button>
          </Grid>
          <Grid item sm={5}>
            <Typography variant="h5" align="center" sx={{ mb: 2}}>
              Based on the items from your pantry!
            </Typography>
            <Button variant="contained" sx={{mb: 2}}>Pantry</Button>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center">
          {cards.map((card) => (
            <Grid item sm={6} md={4}>
              <RecipeCard recipeData={recipeData} />
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default RecipiesPage;
