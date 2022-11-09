import React, {useState} from "react";
import "./pantrySearch.css";
import searchIcon from '@mui/icons-material/Search';
import closeIcon from '@mui/icons-material/Close';

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
                            <a className="dataItem" href={item.ingredientID} target="_blank">
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