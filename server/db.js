const { createConnection, connect } = require("mongoose")
require("dotenv").config({path:"../.env"})

console.log(process.env.MONGODB_URL);
