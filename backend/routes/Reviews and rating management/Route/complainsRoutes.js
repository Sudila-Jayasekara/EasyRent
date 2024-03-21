const express = require("express");
const router =express.Router();

// insert model

const complains =require("../Model/complainsModel");

//insert complains controller
const complainsController=require("../Controllers/complainsController");

router.get("/",complainsController.getAllcomplains);
router.post("/",complainsController.addComplains);


module.exports =router;