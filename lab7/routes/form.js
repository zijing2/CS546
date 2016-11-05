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
            res.render("form/server", {result: output, text:formPostData.textarea, string:formPostData.string, num1:formPostData.number1, num2:formPostData.number2});
        }).catch((e) => {
            if(e.name!="text"){
                var text = formPostData.textarea;
            }
            if(e.name!="string"){
                var string = formPostData.string;
            }
            if(e.name!="num1"){
                var num1 = formPostData.number1;
            }
            if(e.name!="num2"){
                var num2 = formPostData.number2;
            }
            res.render("form/server", {error: e, text:text, string:string, num1:num1, num2:num2});
        });
});


module.exports = router;