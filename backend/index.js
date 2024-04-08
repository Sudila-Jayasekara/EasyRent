import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';

import BookingRoute from './routes/Booking And Payment Management/bookingRoute.js'

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get('/',(request, response) =>{
    console.log(request)
    return response.status(234).send('Welcome to ITP Project')
})

app.use('/api/booking', BookingRoute);

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