const express = require("express");
const router = express.Router();

const data = require("../data");
const recipesData = data.recipes;

router.get("/", (req, res) => {
    recipesData.getAllRecipes().then((recipesList) => {
        res.status(200).json(recipesList);
    }).catch((e) => {
        res.status(500).json({ error: e });
    });
});

router.get("/:id", (req, res) => {
    recipesData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({ error: "recipe not found" });
    });
});

router.post("/", (req, res) => {
    let recipePostData = req.body;

    recipesData.addRecipe(recipePostData.title, recipePostData.ingredients, recipePostData.steps)
        .then((newRecipe) => {
            res.json(newRecipe);
        }).catch((e) => {
            res.status(500).json({ error: e });
        });
});

router.put("/:id", (req, res) => {
    let updatedData = req.body;

    let getRecipe = recipesData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipesData.updateRecipe(req.params.id, updatedData)
            .then((updatedRecipe) => {
                res.json(updatedRecipe);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "Post not found" });
    });

});

router.delete("/:id", (req, res) => {
    let getRecipe = recipesData.getRecipeById(req.params.id);

    getRecipe.then(() => {
        return recipesData.removeRecipe(req.params.id)
            .then(() => {
                res.sendStatus(200);
            }).catch((e) => {
                res.status(500).json({ error: e });
            });
    }).catch(() => {
        res.status(404).json({ error: "recipe not found" });
    });
});




module.exports = router;