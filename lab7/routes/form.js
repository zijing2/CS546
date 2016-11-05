const express = require('express');
const router = express.Router();
const data = require("../data");
const form = data.form;

router.get("/clientform", (req, res) => {
    res.render("form/static", {});
});

router.get("/serverform", (req, res) => {
    res.render("form/server", {});
}); 

router.post("/serverform", (req, res) => {
    let formPostData = req.body;

    form.textManipulate(formPostData.textarea, formPostData.string, formPostData.number1, formPostData.number2)
        .then((output) => {
            res.render("form/result", {output: output});
        }).catch((e) => {
            res.render("form/server", {error: e});
        });
});


module.exports = router;