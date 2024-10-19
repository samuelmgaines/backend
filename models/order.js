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
    }
})

module.exports = mongoose.model('Order', OrderSchema)