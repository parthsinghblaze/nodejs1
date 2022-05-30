const app = require("./app")
const dotenv = require("dotenv")

dotenv.config({ path: "./config.env" })

const port = process.env.PORT || 8001
app.listen(port, () => console.log(`Example app listening on port ${port}`))