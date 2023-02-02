require("dotenv").config({path:"./.env"});
// import("./model/database.js")
const express = require("express");
const app = express();

require("./model/database.js").databaseConnection()


const indexRoute = require("./routes/indexRoute");

app.use("/",indexRoute)



app.listen(process.env.PORT, () => console.log(`server running on port: ${process.env.PORT}`));