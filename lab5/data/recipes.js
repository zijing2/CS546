const mongoCollections = require("../config/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {

    getAllRecipes() {
        return recipes().then((recipesCollection) => {
            return recipesCollection
                .find({})
                .toArray();
        }); 
    },

    getRecipeById(id){
        return recipes().then((recipesCollection) => {            
            return recipesCollection
                .findOne({_id: id})
                .then((recipe) => {
                    if (!recipe) 
                        throw "recipe not found";
                    return recipe;
                });
        }); 
    },

    addRecipe(title,ingredients,steps) {
        if (typeof title !== "string") {
            return Promise.reject("No title provided");
        }   
        if (!Array.isArray(ingredients)) {
            ingredients = [];
        }
        if (!Array.isArray(steps)) {
            steps = [];
        }
        
        comments = [];
       
        return recipes().then((recipesCollection) => {
            let newRecipe = {
                _id: uuid.v4(),
                title: title,
                ingredients: ingredients,
                steps: steps,
                comments: comments
            };

            return recipesCollection
                .insertOne(newRecipe)
                .then((newInsertInformation) => {
                    return newInsertInformation.insertedId;
                })
                .then((newId) => {
                    return this.getRecipeById(newId);
                });  
        });
    },

    updateRecipe(id, updatedRecipe) {
        return recipes().then((recipesCollection) => {
            let updatedRecipeData = {};

            if (updatedRecipe.title) {
                updatedRecipeData.title = updatedRecipe.title;
            }

             if (updatedRecipe.ingredients) {
                updatedRecipeData.ingredients = updatedRecipe.ingredients;
            }

            if (updatedRecipe.steps) {
                updatedRecipeData.steps = updatedRecipe.steps;
            }

            let updateCommand = {
                $set: updatedRecipeData
            };

            return recipesCollection.updateOne({
                _id: id
            }, updateCommand).then((result) => {
                return this.getRecipeById(id);
            });
        });
    },  

    removeRecipe(id) {
        return recipes().then((recipesCollection) => {
            return recipesCollection
                .removeOne({_id: id})
                .then((deletionInfo) => {
                    if (deletionInfo.deletedCount === 0) {
                        throw(`Could not delete recipe with id of ${id}`);
                    } else {}
                });
        });
    }
}

module.exports = exportedMethods;