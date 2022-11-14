import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import RecipeCard from "../Components/RecipeCard";
import { Grid, Typography, TextField, Button } from "@mui/material";
import styled from "@mui/styled-engine";
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

  

  // if(window.localStorage.getItem('recipes') == null) {
  //   initialRecipeData = [];
  // } else {
  //   initialRecipeData = JSON.stringify(window.localStorage.getItem('recipes'));
  // }

  const [recipeData, setRecipeData] = useState([]);
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState(null)

  useEffect(() => {
    if(localStorage.getItem('recipes') != null){
      setRecipeData(JSON.parse(localStorage.getItem('recipes')));
      console.log("Recipe Data: " + JSON.stringify(recipeData));
    }
  }, [localStorage.getItem('recipes')])
  

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
          window.location.reload()
        } else {
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
    } catch {
      alert('Not logged in! Login now.');
      window.location.replace('/Login');
    }
    
  }

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
      // await axios({
      //   method: 'GET',
      //   url: 'http://localhost:3002/getRecipesByName',
      //   params: {
      //     search: search, 
      //   },
      //   headers: {
      //     Authorization: `token ${token}`,
      //   }
      // }).then((res) => {
      //   console.log("Hello")
      // }).catch((err) => {
      //   console.log("Error fetching recipe by NAME");
      //   console.log(err);
      // });

      // //console.log(recipeData);
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
      <Grid container spacing={10} justifyContent="center" className={`recipe-card ${props.darkmode ? "darkmode-links" : ""}`} sx={{textAlign: "center"}}>
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

  // function handleChange(e){
  //   setSearch(e.target.value);
  // }

  // list of # of cards to map on page
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  useEffect(() => {
    setCards(showRecipeCards())
  },[recipeData])

  const handleSearch = (s) => {
    setSearch(s.target.value)
  }

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
              Based on your entered searches!
            </Typography>
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
            <Button className="button" variant="contained" size="large" onClick={() => getRecipeByName(search)} sx={{mb: 5}}>Search</Button>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h5" align="center" sx={{ mb: 2}}>
              Based on the items from your pantry!
            </Typography>
            {/* Missing getRecipeByPantry function to connect to button. I had it but now its deleted rip... */}
            <Button className="button" variant="contained" size="large" sx={{mb: 2}} onClick={() => getRecipeByPantry(search)}>Pantry</Button>
          </Grid>
        </Grid>
        <div>
          {cards}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default RecipiesPage;
