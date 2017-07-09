const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const configRoutes = require("./routes");

app.use(bodyParser.json());
configRoutes(app);

app.listen(6555, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:6555");
});