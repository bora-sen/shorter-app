const express = require("express")
require("dotenv").config({ path: "../.env" })

const app = express()

app.listen(process.env.REST_API_PORT, () => {
  console.log("Rest Server is Running on port -> ", process.env.REST_API_PORT)
})

module.exports = app