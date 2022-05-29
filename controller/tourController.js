const Tour = require("../modals/tourModal")

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body)
        res.status(200).json({
            status: "success",
            message: "Tour has been created",
            data: newTour
        })
    } catch (err) {
        res.status(404).json({
            status: "error",
            message: "Error"
        })
    }

}

exports.getAllTours = async (req, res) => {
    try {
        const data = await Tour.find()
        res.status(200).json({
            status: "success",
            message: "Data Fetched",
            data
        })
    } catch (err) {
        res.status(404).json({
            status: "Error",
            message: err
        })
    }

}

exports.getTour = async (req, res) => {
    console.log(req.params)
    try {
        const data = await Tour.findById(req.params.id)
        res.status(400).json({
            status: "succes",
            message: "fetched single Data",
            data: {
                data
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "error",
            message: err
        })
    }


}

exports.updateTour = async (req, res) => {
    try {
        const data = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "success",
            message: "Tour has been updated",
            data: {
                data
            }
        })
    } catch {
        res.status(404).json({
            status: "fail",
            message: "Some issue"
        })
    }

}

exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: true,
            messgae: "deleted"
        })
    } catch (err) {
        res.status(404).json({
            status: false,
            message: "some error",
            err
        })
    }
}