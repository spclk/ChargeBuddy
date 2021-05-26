const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const Schema = mongoose.Schema;


const userSchema = new Schema({


    first_name: {
        type: String,
        unique: true,

    },
    last_name: {
        type: String,
        unique: true,

    },
    zip_code: {
        type: Number,
        unique: false,

    },
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
    },

    car: {
        type: Array,
        default: []
    }








});
userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});



const User = mongoose.model("User", userSchema);

module.exports = User;