const { Schema, model, models } = require("mongoose");

const bill = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    invoiceNo: {
        type: String,
        required: true,
        unique: true
    },
    client: {
        name: {
            type: String,
            required: true,
        },
        phone: String,
        email: String,
        address: String,
    },
    projectName: {
        type: String,
        required: true,
    },
    services: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            duration: {
                type: Number,
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    payable: {
        type: Number,
        required: true,
    },
    payments: [
        {
            amount: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now,
            },
            method: {
                type: String,
                enum: ["cash", "card", "bank transfer", "upi", "other"],
                default: "upi",
            },
        },
    ],
    advance: {
        type: Number,
        default: 0,
    },
    totalDuration: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Bill = models?.Bill || model("Bill", bill);

module.exports = Bill;