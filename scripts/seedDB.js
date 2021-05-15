
const Car = require("../models/Car");





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

const seedCar = () => carData.bulkCreate(cardata);

module.exports = seedCar;
