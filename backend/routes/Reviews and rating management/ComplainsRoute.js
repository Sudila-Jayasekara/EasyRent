import express from "express";
import { create } from "../Controllers/Reviews and rating management/ComplainsContrller.js";
const route =express.Router();

route.post("/create",create);


export default route;