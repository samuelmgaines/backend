const mongoose = require('mongoose')

const MealSchema = new mongoose.Schema({
    entree: {
        type: String,
        required: true
    },
    entreeCustomizations: {
        type: [String],
        required: true
    },
    side: {
        type: String,
        required: true
    },
    sideCustomizations: {
        type: [String],
        required: true
    },
    drink: {
        type: String,
        required: true
    },
    drinkCustomizations: {
        type: [String],
        required: true
    },
    sauces: {
        type: [String],
        required: true
    }
})

const OrderSchema = new mongoose.Schema({
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    restaurant: {
        type: String,
        required: true
    },
    meal: {
        type: MealSchema,
        required: true
    },
    desiredPickupTime: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Pending'
    },
    readyTime: {
        type: String,
        required: false,
        match: [
            /^(0?[1-9]|1[0-2]):[0-5]\d\s?[APap][Mm]$/,
            'Invalid time format. Use "9:34 AM" or "11:57 PM".'
        ]
    },
    confirmationTime: {
        type: Date,
        required: false
    },
    claimTime: {
        type: Date,
        required: false
    },
    completionTime: {
        type: Date,
        required: false
    },
    disputeTime: {
        type: Date,
        required: false
    },
    disputeReason: {
        type: String,
        required: false
    },
    receiptImage: {
        type: String,
        required: false
    },
    sellerName: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Order', OrderSchema)
