const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type:String,
        required: [true,"Please add the user name"],
    },
    email: {
        type: String,
        required: [true,"Please add the user name"],
        Uniquew: [true, "Email address already taken"],
    },
    password:{
        type:String,
        required: [true,"Please add user email address"],

    },
    },
        {
            timestamps: true,
        }

);

module.exports = mongoose.model("User",userSchema);