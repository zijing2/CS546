const aboutMeRoutes = require("./aboutMe");

const constructorMethod = (app) => {
    app.use("/", aboutMeRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
};

module.exports = constructorMethod;