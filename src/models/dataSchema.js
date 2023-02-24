const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    trans: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    seat: {
        type: Number,
        required: true
    },
    Mileage: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }

})


const Cars = mongoose.model("CarData", dataSchema)

module.exports = Cars;