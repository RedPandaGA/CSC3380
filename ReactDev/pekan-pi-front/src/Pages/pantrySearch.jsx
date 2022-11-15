import React, {useState} from "react";
import "./pantrySearch.css";
import axios from 'axios';

function PantrySearch() {
    // sets and retains user search input and pantry item data
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState([]);

    // handles search input change
    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const getData = (d) => {
        try{
            const token = JSON.parse(localStorage.getItem('udata')).token // user authentification
            axios({
                method: 'GET',
                url: 'http://localhost:3002/getIngredientsearch',
                headers: { Authorization : `token ${token}` },
                params: { search: d }
            })
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
                alert("Failed to get Ingredients. Try again later.")
            })
        }
        // brings client to Login.jsx if not logged in
        catch {
            alert('Not logged in! Login now.')
            window.location.replace('/Login')
        }
    }

    // adds user search to pantry database
    const addToPantry = async (i) => {
        try{
            const token = JSON.parse(localStorage.getItem('udata')).token
            const UID = JSON.parse(localStorage.getItem('udata')).userId
            let duplicate = false
            let aisles;
            await axios({
                method: 'GET',
                url: 'http://localhost:3002/getPantry',
                headers: { Authorization : `token ${token}` },
                params: { UID: UID }
            })
            .then(res => {
                aisles = res.data[0].pantryInfo.aisles
            })
            .catch(err => {
                console.log(err)
                alert("Failed to get Pantry. Try again later.")
            })
            const nameOfAisles = aisles.map((aisle) => {
                if(aisle.aisleName != null){
                    return aisle.aisleName
                } else {
                    return "Misc"
                }
            })
            const indexOfAisle = nameOfAisles.indexOf(i.aisle)
            if(indexOfAisle == -1){
                const newIndex = aisles.push({ aisleName: i.aisle, ingredients: []})
                i.quantity = 0
                i.selectedUnit = i.possibleUnits[0]
                i.filter = false
                aisles[newIndex-1].ingredients.push(i)
            } else {
                const nameOfIngredients = aisles[indexOfAisle].ingredients.map((ingredient) => {
                    return ingredient.name
                })
                if(!nameOfIngredients.includes(i.name)){
                    i.quantity = 0
                    i.selectedUnit = i.possibleUnits[0]
                    i.filter = false
                    aisles[indexOfAisle].ingredients.push(i)
                } else {
                    duplicate = true
                    alert("Ingredient already in pantry. Duplicates are not allowed.")
                }
            }
            if(!duplicate){
                const newPantry = { aisles: aisles }
                await axios({
                    method: 'POST',
                    url: 'http://localhost:3002/updatePantry',
                    headers: { Authorization : `token ${token}` },
                    data: { UID: UID, pantryInfo: newPantry }
                })
                .then(res => {
                    if(!res.data.success){
                        alert("Failed to add to pantry please try again!")
                    } else {
                        alert("Successfully added: " + i.name)
                        window.location.reload()
                    }
                })
                .catch(err => {
                    alert("Failed to add to pantry please try again!")
                })
            }
        } catch {
            alert('Not logged in! Login now.')
            window.location.replace('/Login')
        }
    }

    return (
        <div className="search">
            {/* search bar */}
            <div className="searchInputs">
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearch}
                />
                {/* search button */}
                <div className="searchIcon" onClick={() => getData(searchInput)}></div>
            </div>
            {/* maps through all items in the pantry to display on webpage */}
            {data.length !== 0 && (
                <div className="dataResult">
                    {data.map((item) => {
                        return (
                            <div className="dataItem" target="_blank" onClick={() => addToPantry(item)}>
                                <p>{item.name} </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PantrySearch;