exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "all data fetched"
    })
}