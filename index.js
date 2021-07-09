const express = require("express");
const app = express();
const morgan = require("morgan");
const cars = require("./cars");

app.use(morgan("dev"));

app.use("/motorcycles", (req, res, next) => {
    console.log("Middlewares for motorcycles");
    next();
});

app.use((req, res, next) => {
    console.log("Middlewares for all req");
    next();
});

app.use("/cars", cars);

app.get("/", (req, res) => {
    res.send("WELCOME TO OUR WEBSITE!");
});

app.get("/motorcycles", (req, res) => {
    res.send("Check out our prefered motorcycles!");
});

app.listen(5000, () => {
    console.log("Server running on localhost: 5000");
});
