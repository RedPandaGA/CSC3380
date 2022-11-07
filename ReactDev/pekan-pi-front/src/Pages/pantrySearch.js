import React, {useState} from 'react';

const PantrySearch = () => {

    const [searchInput, setSearchInput] = useState("");

    const ingredients = [
        {ingredient: "salt", ingredientId: 2047}, 
        {ingredient: "olive oil",ingredientId: 4053}, 
        {ingredient: "butter", ingredientId: 1001}, 
        {ingredient: "sugar", ingredientId: 19335}, 
        {ingredient: "water", ingredientId: 14412}, 
        {ingredient: "flour", ingredientId: 20081}, 
        {ingredient: "garlic", ingredientId: 11215}, 
        {ingredient: "eggs", ingredientId: 1123}, 
        {ingredient: "onion", ingredientId: 11282}, 
        {ingredient: "vanilla extract", ingredientId: 2050}, 
        {ingredient: "milk", ingredientId: 1077}, 
        {ingredient: "kosher salt", ingredientId: 1082047}, 
        {ingredient: "lemon juice", ingredientId: 9152}, 
        {ingredient: "unsalted butter", ingredientId: 1145}, 
        {ingredient: "black pepper", ingredientId: 1002030}, 
        {ingredient: "baking powder", ingredientId: 18371}, 
        {ingredient: "pepper", ingredientId: 1002030}, 
        {ingredient: "salt and pepper", ingredientId: 1102047}, 
        {ingredient: "egg", ingredientId: 1123}, 
    ];

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    if (searchInput.length > 0){
        ingredients.filter((item) => {
            return item.ingredient.match(searchInput);
        });
    }

    return <div>
        <input
            type="search"
            placeholder="Search Ingredients"
            onChange={handleChange}
            value={searchInput} />

        <table>
            <tr>
                <th>Ingredient</th>
                <th>Ingredient ID</th>
            </tr>

        {ingredients.map((item, index) => {
            return (
                <tr>
                    <td>{item.ingredient}</td>
                    <td>{item.ingredientId}</td>
                </tr>
            );
        })}
        </table>
    </div>
};
export default PantrySearch;