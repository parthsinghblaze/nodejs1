const mongoose = require("mongoose")

const tourSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "A tour must have a name"],
        unique: true
    },
    rating: {
        type: Number,
        default: 5
    },
    price: {
        type: Number,
        require: [true, "A Tour Must have a Price"]
    }
})

const Tour = mongoose.model("Tour", tourSchema)
module.exports = Tour