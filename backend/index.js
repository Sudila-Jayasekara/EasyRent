import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import route from "./routes/Reviews and rating management/ComplainsRoute.js";

const app = express();



mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to the database')
        app.listen(PORT,() =>{
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    })
    
    app.use("/api",route)