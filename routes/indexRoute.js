const express = require("express");
const app = express();

const router = express.Router()

const {indexRoute} = require("../controllers/indexRoute")

router.get("/",indexRoute)

module.exports = router;