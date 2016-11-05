const express = require('express');
const router = express.Router();
const data = require("../data");
const calculator = data.calculator;

router.get("/static", (req, res) => {
    res.render("form/static", {});
});

router.get("/server", (req, res) => {
    res.render("form/server", {});
});