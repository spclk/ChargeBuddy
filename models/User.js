const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// still need to finish the id object auto increment and primary KeyboardEvent. Create Date object

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
                default: Date.no
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