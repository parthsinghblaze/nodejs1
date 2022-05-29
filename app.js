const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors');

const { getAllTours, getTour, createTour, updateTour, deleteTour } = require('./controller/tourController')
const { getAllUsers } = require('./controller/userController')
const app = express()
const dotenv = require("dotenv")
dotenv.config("./config.env")


app.use(cors({
    origin: '*'
}));
app.use(express.json())


const DB = "mongodb+srv://parthsingh:TEOwfkS5jmMPcndU@cluster0.yufsn.mongodb.net/Practice?retryWrites=true&w=majority"
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => console.log("DB connected"))

app.route("/tours").get(getAllTours).post(createTour)
app.route("/tours/:id").get(getTour).patch(updateTour).delete(deleteTour)
app.route("/users").get(getAllUsers)

module.exports = app