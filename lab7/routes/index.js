const formRoutes = require("./form");

const constructorMethod = (app) => {
    app.use("/form", formRoutes);

    app.use("*", (req, res) => {
        res.redirect("/form/clientform");
    })
};

module.exports = constructorMethod;