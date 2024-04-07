import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js"; // Import PORT and mongoDBURL from config.js
import router from "./routes/Reviews and rating management/ComplainsRoute.js"; // Import router from ComplainsRoute.js

const app = express();

// Use the router for the "/Complains" route
app.use("/Complains", router);

mongoose.connect(mongoDBURL)
  .then(() => console.log('App connected to the database'))
  .then(() => app.listen(PORT, () => console.log('App is listening to port: ${PORT}')))
  .catch((error) => console.log(error));