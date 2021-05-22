
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

const userData = [

    {
        first_name: "Brittany",
        last_name: "Spears",
        zip_code: 75001,
        email: "mybabysforeheadisanashtray@yahoo.com",
        password: 12345678,


    },
    {
        first_name: "Charlie",
        last_name: "Sheen",
        zip_code: 90035,
        email: "prostitutesarefun@gmail.com",
        password: 12345678,


    },
    {
        first_name: "Gary",
        last_name: "Busey",
        zip_code: 90210,
        email: "iamflatoutcrazy@gmail.com",
        password: 12345678,


    },
    {
        first_name: "Tom",
        last_name: "Sizemore",
        zip_code: 90211,
        email: "cocaineanyone?@hotmail.com",
        password: 12345678,


    },
    {
        first_name: "Randy",
        last_name: "Quaid",
        zip_code: 93108,
        email: "clarkgriswald@gmail.com",
        password: 12345678,


    },


];
const seedUser = () => db.User.collection.insertMany(userData)


seedUser();