const notesRoutes = require("./notes");

const constructorMethod = (app) => {
    app.use("/", notesRoutes);

    // app.use("*", (req, res) => {
    //     res.sendStatus(404);
    // })
};

module.exports = constructorMethod;