const { Schema, model, models } = require("mongoose");

const service = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const Service = models?.Service || model("Service", service);
module.exports = Service;