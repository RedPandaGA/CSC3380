const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/Pantry", (req, res) => {
    res.json({message: "Yo Pantry Empty!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});