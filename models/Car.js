const mongoose = require("mongoose");



const Schema = mongoose.Schema;

const carSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    cars: [
        {
            id: {
                type: Number,
                required: true,

            },

            make: {
                type: String,
                required: true
            },
            model: {
                type: String,
                required: true
            },
            year: {
                type: Number,
                required: true

            },
            userCreated: {
                type: Date,
                default: Date.now
            }
        }
    ]
},
    {
        toJson: {
            virtuals: true
        }
    });

const Car = mongoose.model("Car", carSchema);

module.exports = Car;