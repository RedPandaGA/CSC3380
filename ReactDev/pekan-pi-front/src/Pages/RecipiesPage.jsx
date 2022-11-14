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
      fontFamily: "Playfair Display", // main font throughout webpage
    },
  });


  // global variables for setting and retaining recipe data, user search input,
  // and recipe cards information
  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState(null);

  // updates the users local storage recipe data after render
  // keeps the recipe data from disappearing after page reload
  useEffect(() => {
    if(localStorage.getItem('recipes') != null){
      setRecipeData(JSON.parse(localStorage.getItem('recipes')));
      console.log("Recipe Data: " + JSON.stringify(recipeData));
    }
  }, [localStorage.getItem('recipes')])

  // allows users to grab recipes based on the name
  async function getRecipeByName(search){
    try{
      // user authentication for database and express access
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
        // if user did not input any search value, grab random recipes 
        // random recipes api call has different object keys from specific search api calls
        if (search.length == 0) {
          setRecipeData(res.data.recipes);
          localStorage.setItem('recipes', JSON.stringify(res.data.recipes));
          console.log("Received JSON: \n" + JSON.stringify(res.data.recipes));
          window.location.reload()
        } 
        // grab recipes based on user inputted search
        // object keys are different from random api JSON returns
        else { 
          setRecipeData(res.data.results);
          localStorage.setItem('recipes', JSON.stringify(res.data.results));
          console.log("Received JSON: \n" + JSON.stringify(res.data.results));
          window.location.reload()
        }
      }).catch((err) => {
        console.log("Error fetching recipe by NAME");
        console.log(err);
      });

      console.log(recipeData);
    } 
    // if the user isn't logged in, send to Login.jsx
    catch {
      alert('Not logged in! Login now.');
      window.location.replace('/Login');
    }
    
  }

  // allows users to grab recipes based on their pantry items/ingredients
  async function getRecipeByPantry(search){
    let pData = {aisles: []}

    try{
      const token = JSON.parse(localStorage.getItem('udata')).token
      const UID = JSON.parse(localStorage.getItem('udata')).userId
      await axios({
          method: 'GET',
          url: 'http://localhost:3002/getPantry',
          headers: { Authorization : `token ${token}` },
          params: { UID: UID }
      })
      .then(res => {
        pData = res.data[0].pantryInfo
      })
      .catch(err => {
          console.log(err)
          alert("Failed to get Pantry. Try again later.")
      })
      let ingredients = ""
      pData.aisles.forEach((aisle) => {
        aisle.ingredients.forEach((ingredient) => {
          ingredients = ingredients.concat(ingredient.name+' ')
        })
      })

      console.log(ingredients)
    } catch {
      alert('Not logged in! Login now.');
      window.location.replace('/Login');
    }
    
  }

  // displays the recipe cards based on the recipe data received from the api calls
  function showRecipeCards(){
    return (
      <Grid container spacing={10} justifyContent="center" className={`recipe-card ${props.darkmode ? "darkmode-links" : ""}`}
        sx={{textAlign: "center"}}>
          {/* maps through all objects in recipeData in order to display all cards*/}
          {recipeData.map((recipeData) => {
            return (
              <Grid item sm={6} md={4}>
                <RecipeCard recipeData={recipeData} props={props} />
              </Grid>
            );
          })}
        </Grid> 
    );
  }
  
  // ensures the cards are not lost upon page reload
  useEffect(() => {
    setCards(showRecipeCards())
  },[recipeData])

  return (
    // ThemeProvider is a component provided by Material UI
    // takes in theme prop to ensure a common theme throughout the current webpage
    <ThemeProvider theme={theme}>
      {/* applies darkmode theme when props.darkmode is true */}
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
              Based on your entered searches!
            </Typography>
            {/* takes in user input to find recipes */}
            <TextField 
              className="input-field"
              id="search-input"
              label="Search for recipes"
              name="search"
              type="text"
              value={search}
              onChange={s => setSearch(s.target.value)}
              margin="normal"
              placeholder="What do you want to cook today?"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: `${props.darkmode ? "#3dc6d3" : "primary"}`,
                  }
                }, 
                "& .MuiFormLabel-root.Mui-focused": {
                  color: `${props.darkmode ? "#3dc6d3" : "primary"}`
                }
              }}
              />
              {/* search button applies getRecipeByName function */}
            <Button className="button" variant="contained" size="large" onClick={() => getRecipeByName(search)} sx={{mb: 5}}>Search</Button>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" align="center" sx={{ mb: 2}}>
              Based on the items from your pantry!
            </Typography>
            {/* pantry button applies getRecipeByPantry function */}
            <Button className="button" variant="contained" size="large" sx={{mb: 2}} onClick={() => getRecipeByPantry(search)}>Pantry</Button>
          </Grid>
        </Grid>
        {/* displays cards when not empty */}
        <div>
          {cards}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default RecipiesPage;
