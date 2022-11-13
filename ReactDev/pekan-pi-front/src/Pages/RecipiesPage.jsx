import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import RecipeCard from "../Components/RecipeCard";
import { Grid, Typography, TextField, Button } from "@mui/material";
import axios from 'axios';
import './recipePage.css';

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

  let initialRecipeData = [];
  try {
    initialRecipeData = JSON.parse(localStorage.getItem('recipes'));
    console.log("Initial Recipe Data: " + initialRecipeData);
  } catch {
    console.log("Could not get item from local storage");
  }
  // if(window.localStorage.getItem('recipes') == null) {
  //   initialRecipeData = [];
  // } else {
  //   initialRecipeData = JSON.stringify(window.localStorage.getItem('recipes'));
  // }

  const [recipeData, setRecipeData] = useState(initialRecipeData);
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
  async function getRecipeByName(search){
    try{
      const token = JSON.parse(localStorage.getItem('udata')).token
      await axios({
        method: 'GET',
        url: 'http://localhost:3002/getRecipesByName',
        params: {
          search: search,
        },
        headers: {
          Authorization: `token ${token}`,
        }
      }).then((res) => {
        if (search.length == 0) {
          setRecipeData(res.data.recipes);
          localStorage.setItem('recipes', JSON.stringify(res.data.recipes));
          console.log("Received JSON: \n" + JSON.stringify(res.data.recipes));
        } else {
          setRecipeData(res.data.results);
          localStorage.setItem('recipes', JSON.stringify(res.data.results));
          
          console.log("Received JSON: \n" + JSON.stringify(res.data.results));
        }
      }).catch((err) => {
        console.log("Error fetching recipe by NAME");
        console.log(err);
      });

      console.log(recipeData);
    } catch {
      alert('Not logged in! Login now.');
      window.location.replace('/Login');
    }
    
  }


  
  // allows users to grab recipes based on current items in their pantry
  // function getRecipeByPantry(ingredients){
  //   const token = JSON.parse(localStorage.getItem('udata')).token;
  //   axios({
  //     method: 'GET',
  //     url: 'http://localhost:3002/getRecipesByPantry',
  //     params: {
  //       ingredients: ingredients, // 
  //     },
  //     headers: {
  //       Authorization: `token ${token}`,
  //     }
  //   });
  // }

  function showRecipeCards(){
    return (
      <Grid container spacing={10} justifyContent="center" className="recipe-card" sx={{textAlign: "center"}}>
          {recipeData.map((recipeData) => {
            return (
              <Grid item sm={6} md={4}>
                <RecipeCard recipeData={recipeData} />
              </Grid>
            );
          })}
        </Grid> 
    );
  }

  // function handleChange(e){
  //   setSearch(e.target.value);
  // }

  // list of # of cards to map on page
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    // Adam's code
    // <div className="RecipiesPage">
    //   {recipeData && <RecipesList recipeData={recipeData} />}
    // </div>

    <ThemeProvider theme={theme}>
      <div className={props.darkmode ? "darkmode-page" : ""}>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item sm={8}>
            <Typography variant="h2" align="center" sx={{mb: 5}}>
              Recipes
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item sm={4}>
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
              placeholder="What do you want to cook today?"
              fullWidth
              sx={{mb: 2}}
            />
            <Button variant="contained" size="large" onClick={() => getRecipeByName(search)} sx={{mb: 5}}>Search</Button>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" align="center" sx={{ mb: 2}}>
              Based on the items from your pantry!
            </Typography>
            {/* Missing getRecipeByPantry function to connect to button. I had it but now its deleted rip... */}
            <Button variant="contained" size="large" sx={{mb: 2}}>Pantry</Button>
          </Grid>
        </Grid>
        <div>
          {showRecipeCards()}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default RecipiesPage;
