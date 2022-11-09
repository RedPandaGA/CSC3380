import React, {useState} from "react";
import "./pantrySearch.css";
import axios from 'axios';

async function insertItem(item){
    const PUID = JSON.parse(localStorage.getItem('udata')).userId;
    const token = JSON.parse(localStorage.getItem('udata')).token;

    if (item != ""){
        await axios({
            method: 'POST',
            url: 'http://localhost:3002/updatePantry',
            headers: { Authorization: `token ${token}` },
            data: { UID: PUID, pantryInfo: item}
        })
        .then(res => {
            if (!res.data.success){
                console.log(res);
                alert("Failed to add item to Pantry!");
            }else{
                console.log(res);
                alert("Item added to Pantry!");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error adding item to Pantry");
        })
    }
}

function PantrySearch({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const handleFilter = (e) => {
        const searchedItem = e.target.value;
        setSearchInput(searchedItem);
        const newFilter = data.filter((item) => {
            return item.ingredient.toLowerCase().includes(searchedItem.toLowerCase());
        });

        if (searchedItem === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setSearchInput("");
    };

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchInput}
                    onChange={handleFilter}
                />
                <div className="searchIcon">
                    {filteredData.length === 0 ? (
                        <searchIcon />
                    ) : (
                        <closeIcon id="clearBtn" onClick={clearInput} />
                    )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((item, index) => {
                        return (
                            <a className="dataItem" href={item.ingredientID} target="_blank" onClick={() => insertItem(item)}>
                                <p>{item.ingredient} </p>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PantrySearch;