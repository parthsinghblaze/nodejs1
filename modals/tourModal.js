const mongoose = require("mongoose")

const tourSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "A tour must have a name"],
        unique: true
    },
    durations: {
        type: Number,
        require: [true, "A tour must have a duration"]
    },
    maxGroupSize: {
        type: Number,
        require: [true, "A tour must have a Max Group Size"]
    },
    difficulty: {
        type: String,
        require: [true, "A Tour must have a Difficulty"]
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        require: [true, "A Tour Must have a Price"]
    },
    priceDiscount: {
        type: Number
    },
    summary: {
        type: String,
        trim: true,
        require: [true, 'A tour must have summary']
    },
    description: {
        type: String,
        trim: true
    },
    imageCover: {
        type: String,
        require: [true, "A tour must have a cover image"]
    },
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    startDates: [Date]
})

const Tour = mongoose.model("Tour", tourSchema)
module.exports = Tour