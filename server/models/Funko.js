const { Schema, model } = require('mongoose');


const funkoSchema = new Schema({
    model: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    series: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: false
    },
    image: {
        type: String,
        required: false
    }
})

const Funko = model('Funko', funkoSchema);

module.exports = Funko;