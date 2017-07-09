
const mongoCollections = require("../config/mongoCollections");
const uuid = require('node-uuid');
const recipesModule = require("./recipes");
const recipes = mongoCollections.recipes;


let exportedMethods = {

    getAllCommentsByReceptId(Rid) {
       return recipesModule.getRecipeById(Rid).then((recipe)=>{
           let comments = recipe.comments;
           let commentsFormat = [];

            for (var index = 0; index < recipe.comments.length; index++) {
                let commentTmp = {
                    _id: comments[index]._id, 
                    recipeId: recipe._id, 
                    reciipeTitle: recipe.title,
                    name: comments[index].comment, 
                    poster: comments[index].poster
                };
                commentsFormat.push(commentTmp);
                
            }
            return commentsFormat;
       });
    },

    getCommentById(id){
        return recipes().then((recipesCollection) => {            
            return recipesCollection
                .findOne({"comments": { $elemMatch: { "_id": id } }})
                .then((recipe) => {
                    if (!recipe){
                        throw "comment not found";
                    } 
                    for (var index = 0; index < recipe.comments.length; index++) {
                        if(recipe.comments[index]._id == id){
                            var comment = recipe.comments[index];
                        }
                    }
                    let commentFormat = {
                        _id: comment._id, 
                        recipeId: recipe._id, 
                        reciipeTitle: recipe.title, 
                        name: comment.comment, 
                        poster: comment.poster
                    }

                    return commentFormat;
                });
        }); 
    },

    addComment(Rid,comment,poster) {
        return recipes().then((recipesCollection)=>{
            if (typeof comment !== "string") {
                return Promise.reject("comment must be string");
            }   
            if (typeof poster !== "string") {
                return Promise.reject("poster must be string");
            } 
            var cid = uuid.v4();
            let newComment = {
                _id: cid,
                comment: comment,
                poster: poster
            };

            return recipesCollection
                .update({ _id: Rid }, { $push: { "comments": newComment } }).then((result) => {
                 return this.getCommentById(cid).then((rtn)=>{
                    return rtn;
                });        
            });
        });
    },

    updateComment(comment, updatedComment) {
        return recipes().then((recipesCollection) => {
            let updatedCommentData = {};

            updatedComment._id = comment._id;

            if (updatedComment.poster) {
                updatedCommentData.poster = updatedComment.poster;
            }

            if (updatedComment.comment) {
                updatedCommentData.comment = updatedComment.comment;
            }

            var commentParam = {
                "_id": comment._id,
                "comment": comment.name,
                "poster": comment.poster, 
            };

            return recipesCollection
                .update({ _id: comment.recipeId }, { $pull: { "comments": commentParam } })
                .then((result) => {  
                   return recipesCollection.update({ _id: comment.recipeId }, { $push: { "comments": updatedComment } })
                   .then(()=>{});
                }).catch(()=>{
                    throw(`Could not delete comment with id of ${comment._id}`)
                });
        });
    },  

    removeComment(comment) {
        return recipes().then((recipesCollection) => {
            var commentParam = {
                "_id": comment._id,
                "comment": comment.name,
                "poster": comment.poster, 
            };
            return recipesCollection
                .update({ _id: comment.recipeId }, { $pull: { "comments": commentParam } })
                .then((result) => {  
                   return result;
                }).catch(()=>{
                    throw(`Could not delete comment with id of ${comment._id}`)
                });
        });
    }
}

module.exports = exportedMethods;