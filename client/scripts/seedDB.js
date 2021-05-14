const mongoose = require("mongoose");
const db = require("../models");



mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/electricDb"
);

const electricCarSeed = [
    {
        make: "Tesla",
        model: "Model 3",
        year: 2020,

        date: new Date(Date.now())
    },
    {
        make: "Tesla",
        model: "Model 3",
        year: 2020,

        date: new Date(Date.now())
    },
    {
        make: "Audi",
        model: "e-tron",
        year: 2021,

        date: new Date(Date.now())
    },
    {
        make: "Porsche",
        model: "Taycan",
        year: 2021,

        date: new Date(Date.now())
    },
    {
        make: "Nissan",
        model: "LEAF",
        year: 2021,

        date: new Date(Date.now())
    },
    {
        make: "BMW",
        model: "X5",
        year: 2021,

        date: new Date(Date.now())
    },

]

db.electricCar
    .remove({})
    .then(() => db.electricCar.collection.insertMany(electricCarSeed))
    .then(data => {
        console.log(data.result.n + " cars inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })