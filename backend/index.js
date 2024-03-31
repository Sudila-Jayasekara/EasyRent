import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import userRoutes from './routes/Renter Management/Renter.route.js'

const app = express();

app.get('/',(request, response) =>{
    console.log(request)
    return response.status(234).send('Welcome to ITP Project')
})

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

app.use("/api/user",userRoutes);