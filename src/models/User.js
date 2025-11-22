const { Schema, model, models } = require("mongoose");


const user = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

const User = models?.User || model("User", user);
module.exports = User;