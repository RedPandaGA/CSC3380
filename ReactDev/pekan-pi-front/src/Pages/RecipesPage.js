import { Grid, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";

// API endpoint URLs
const recipesURL = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3002/'

function RecipesPage(props) {
  const theme = createTheme({
    // makes the theme for the whole profile
    palette: {
      primary: {
        main: "#ff523b", // main orange color
      },
      background: {
        paper: "#e3eca4", //component background green lime color
        default: "#e3eca4", //background color
      },
    },
    typography: {
      fontFamily: "Playfair Display",
    },
  });

  const [ingredients, setIngredients] = useState("");

  function handleChange(e) {
    setIngredients(e.target.value);
  }

  function getRecipes() {
    axios({
      method: "GET",
      url: recipesURL,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.message);
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={props.darkmode ? "darkmode-page" : ""}>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item sm={8}>
            <Typography variant="h2" align="center" gutterBottom>
              Recipes
            </Typography>
            <Typography variant="body1" align="center">
              Enter in your available ingredients to generate the best recipes!
            </Typography>
            <TextField
              id="ingredients-input"
              label="Ingredients"
              name="ingredients"
              type="text"
              value={ingredients}
              onChange={handleChange}
              margin="normal"
              placeholder="Enter each ingredient separated by a comma and plus sign (ex. chicken,+onions,+carrots)"
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={getRecipes}>
              Submit for Recipes
            </Button>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default RecipesPage;
