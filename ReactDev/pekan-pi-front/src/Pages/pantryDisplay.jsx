import React from "react";
import axios from 'axios'
import { useEffect, useState, useReducer } from "react";
import { CheckBox, Clear, Delete, Save } from '@mui/icons-material/'
import { Box, Grid, Card, CardActions, CardContent, Button, Typography, Select, MenuItem, FormControl, InputLabel, TextField, FormControlLabel}from '@mui/material/';
import { createTheme, ThemeProvider } from "@mui/material";
import './recipePage.css';

//API URLs
const pantryURL = process.env.NODE_ENV === 'production' ? '/getPantry' : 'http://localhost:3002/api/getPantry'
const updateURL = process.env.NODE_ENV === 'production' ? '/updatePantry' : 'http://localhost:3002/api/updatePantry'

function PantryDisplay(props){
    const theme = createTheme({
        // makes the theme for the whole profile
        palette: {
          primary: {
            main: "#ff523b", // main orange color
          },
        },
        typography: {
          fontFamily: "Playfair Display", // main text front
        },
      });
    
    //stores the pantry data fetched from the backend
    const [pData, setPData] = useState({aisles: []})
    //allows for forcing the DOM to update, used when deleting items from the pantry
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    
    //Gets pantry data from the backend and stores it in pData
    const getPData = async () => {
        const token = JSON.parse(localStorage.getItem('udata')).token
        const UID = JSON.parse(localStorage.getItem('udata')).userId
        await axios({
            method: 'GET',
            url: pantryURL,
            headers: { Authorization : `token ${token}` },
            params: { UID: UID }
        })
        .then(res => {
            setPData(res.data[0].pantryInfo)
        })
        .catch(err => {
            console.log(err)
            alert("Failed to get Pantry. Try again later.")
        })
    }

    //Sends the updated pantry to the backend to be stored in the database
    const updatePantry = async () => {
        const token = JSON.parse(localStorage.getItem('udata')).token
        const UID = JSON.parse(localStorage.getItem('udata')).userId
        await axios({
            method: 'POST',
            url: updateURL,
            headers: { Authorization : `token ${token}` },
            data: { UID: UID, pantryInfo: pData }
        })
        .then(res => {
            if(!res.data.success){
                alert("Failed to save pantry please try again!")
            } else {
                alert("Successfully saved pantry")
            }
        })
        .catch(err => {
            alert("Failed to save pantry please try again!")
        })
    }

    //clears the pantry data in pData
    const clearPantry = () => {
        setPData({aisles: []})
    }
    
    //When the page loads run getPData to get pantry data
    useEffect(() => {
        getPData()
    }, [])

    //Used for generating the individual ingredient cards
    const IngredientCard = ({ingredient, aindex, index}) => {
        //These are the values for the unit select, quantity textbox, and filter checkbox in each card
        const [unit, setUnit] = useState(ingredient.selectedUnit)
        const [quantity, setQuantity] = useState(ingredient.quantity)
        const [filter, setFilter] = useState(ingredient.filter)

        //This updates the pantry data whenever any cards' information is changed
        const updateIngredient = () => {
            pData.aisles[aindex].ingredients[index].quantity = quantity
            pData.aisles[aindex].ingredients[index].selectedUnit = unit
            pData.aisles[aindex].ingredients[index].filter = filter
        }
        
        //handles when the unit is changed
        const handleUnit = (e) => {
            setUnit(e.target.value)
        }

        //handles when the quantity is changed
        const handleQuantity = (e) => {
            setQuantity(e.target.value)
        }
        
        //handles when the filter is changed
        const handleFilter = (e) => {
            setFilter(e.target.checked)
        }

        //deletes the ingredient from the pantry data
        const deleteIngredient = (e) => {
            pData.aisles[aindex].ingredients.splice(index, 1)
            if(pData.aisles[aindex].ingredients <= 0){
                pData.aisles.splice(aindex, 1)
            }
            forceUpdate()
        }

        //runs updateIngredient any time any unit, quantity, or filter are changed
        useEffect(()=>{
            updateIngredient()
        }, [unit, quantity, filter])

        return(
            <Card>
                <CardContent>
                    <Typography variant="h5">{ingredient.name.slice(0,1).toUpperCase() + ingredient.name.slice(1).toLowerCase()}</Typography>
                </CardContent>
                <CardActions>
                    <FormControl fullWidth>
                        <TextField type="number" label="quantity" value={quantity} onChange={handleQuantity}/>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>unit</InputLabel>
                        <Select
                            value={unit}
                            label="unit"
                            onChange={handleUnit}
                        >
                            {ingredient.possibleUnits.map((pUnit) => {
                                return(
                                    <MenuItem value={pUnit}>{pUnit}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <FormControlLabel label="Filter recipies with" control={<input type="checkbox" checked={filter} onChange={handleFilter}/>}/>
                    </FormControl>
                    <FormControl fullWidth>
                        <Button className="button" varient="contained" endIcon={<Delete/>} onClick={deleteIngredient}>Delete</Button>
                    </FormControl>
                </CardActions>
            </Card>
        )
    }


    return(
        <ThemeProvider theme={theme}>
            <div className={props.darkmode ? "darkmode-page" : ""} style={{width: "80%"}}>
                <Box sx={{textAlign: "center", mt: 2}}>
                    <Button className="button" variant="contained" endIcon={<Save/>} onClick={updatePantry}>
                        Save Pantry
                    </Button>
                    <Button className="button" variant="contained" endIcon={<Clear/>} onClick={clearPantry}>
                        Clear Pantry
                    </Button>
                </Box>
                <Grid container spacing={5} justifyContent="center" sx={{mb: 5}}>
                    {pData.aisles.map((aisle, aIndex) => {
                        let name;
                        if(aisle.aisleName != null){name=aisle.aisleName}
                        else{name="Misc"}
                        return (
                            <Grid item sm={6} lg={4}>
                                <h2>{name}</h2>
                                {aisle.ingredients.map((ingredient, iIndex) => {
                                    return <IngredientCard ingredient={ingredient} aindex={aIndex} index={iIndex}/>
                                })}
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </ThemeProvider>
        
        
        
    )
}

export default PantryDisplay;