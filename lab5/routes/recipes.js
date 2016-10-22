const express = require("express");
const router = express.Router();

const data = require("../data");
const recipesData = data.recipes;

router.get("/recipes", (req, res) => {
    recipesData.getAllRecipes().then((recipesList) => {
        res.status(200).json(recipesList);
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
});



module.exports = router;