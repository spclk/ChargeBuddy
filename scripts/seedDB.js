
const db = require("../models");
const mongoose = require("mongoose");


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/chargebuddy_db", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
}
);

const carData = [
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

];
const seedCar = () => db.Car.collection.insertMany(carData)
// const seedCar = () => carData.bulkCreate(cardata);

seedCar();
