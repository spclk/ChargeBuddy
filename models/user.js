const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    users: [
        {
            email: {
                type: String,
                unique: true,
                match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
            },
            password: {
                type: String,
                trim: true,
                required: "Password is Required",
                validate: [({ length }) => length >= 8, "Password should be longer."]
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

const User = mongoose.model("User", userSchema);

module.exports = User;