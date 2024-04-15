import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';

import path from 'path';


import {authRouter} from "./routes/auth.route.js";
import { RenterRouter } from './routes/Renter Management/Renter.route.js';
import cookieParser from "cookie-parser";
import BookingRoute from './routes/Booking And Payment Management/bookingRoute.js'

import VehicleRoute from './routes/Vehicle Management/vehicleRoute.js';
import DriverRoute from './routes/Driver Management/driverRoute.js';
import OwnerRoute from './routes/Vehicle Owner Management/ownerRoute.js';
import bodyParser from "body-parser";





const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '10mb' }));

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
  }));
app.use(cookieParser())

app.get('/',(request, response) =>{
    console.log(request)
    return response.status(234).send('Welcome to ITP Project')
})

app.use('/api/auth',authRouter);
app.use('/api/booking', BookingRoute);
app.use('/api/vehicle', VehicleRoute);
app.use('/api/renter', RenterRouter);
app.use('/api/driver', DriverRoute);
app.use('/api/owner', OwnerRoute);



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
