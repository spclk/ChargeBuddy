const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const electricSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    cars: [
        {
            make: {
                type: String
            },
            model: {
                type: String
            },
            year: {
                type: Number

            }
        }
    ]
},
    {
        toJson: {
            virtuals: true
        }
    });