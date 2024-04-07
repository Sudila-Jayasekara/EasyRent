
const express = require("express")
const router = express.Router();

//insert model

const ComplainSchema=require("./models/Reviews and rating management/ComplainsModel.js")
const ComplainsController=require("./Controllers/Reviews and rating management/ComplainsContrller.js")

router.get("/",ComplainsController.getAllcomplains);

export default router;