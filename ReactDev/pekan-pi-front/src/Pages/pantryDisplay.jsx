import React, {useState} from "react";
import axios from 'axios'
import { useEffect } from "react";
import { Save } from '@mui/icons-material/'
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Select, MenuItem, FormControl, InputLabel, TextField}from '@mui/material/';
import { createTheme, ThemeProvider } from "@mui/material";
import './recipePage.css';


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

    const [pData, setPData] = useState({aisles: []})

    const getPData = async () => {
        const token = JSON.parse(localStorage.getItem('udata')).token
        const UID = JSON.parse(localStorage.getItem('udata')).userId
        await axios({
            method: 'GET',
            url: 'http://localhost:3002/getPantry',
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

    const updatePantry = async () => {
        const token = JSON.parse(localStorage.getItem('udata')).token
        const UID = JSON.parse(localStorage.getItem('udata')).userId
        await axios({
            method: 'POST',
            url: 'http://localhost:3002/updatePantry',
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

    useEffect(() => {
        getPData()
    }, [])

    const IngredientCard = ({ingredient, aindex, index}) => {
        //const iData = JSON.parse(ingredient)
        const [unit, setUnit] = useState(ingredient.selectedUnit)
        const [quantity, setQuantity] = useState(ingredient.quantity)
        
        const updateIngredient = () => {
            pData.aisles[aindex].ingredients[index].quantity = quantity
            pData.aisles[aindex].ingredients[index].selectedUnit = unit
        }
        
        const handleUnit = (e) => {
            setUnit(e.target.value)
        }

        const handleQuantity = (e) => {
            setQuantity(e.target.value)
        }

        useEffect(()=>{
            updateIngredient()
        }, [unit, quantity])

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