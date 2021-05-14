const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    users: [
        {
            username: {
                type: String
            },
            password: {
                type: String
            },

        }
    ]
},
    {
        toJson: {
            virtuals: true
        }
    });