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
    
    
}

module.exports = exportedMethods;