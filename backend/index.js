import express from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from 'cookie-parser'
import {authRouter} from "./routes/auth.route.js";
import { RenterRouter } from './routes/Renter Management/Renter.route.js';
//Booking Start
import BookingRoute from './routes/Booking And Payment Management/bookingRoute.js'
import OwnerRouterTemp from './routes/Booking And Payment Management/ownerRouteTemp.js';
//Booking End
import ComplainsRoute from './routes/Reviews and rating management/ComplainsRoute.js';

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(cors( {
    origin: 'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
  }));
app.use(cookieParser())

app.get('/',(request, response) =>{
    console.log(request)
    return response.status(234).send('Welcome to ITP Project')
})


app.use('/api/booking', BookingRoute);
app.use('/api/ownertemp', OwnerRouterTemp);

app.use('/api/renter', RenterRouter);
app.use('/api/auth',authRouter);

app.use('/Complains',ComplainsRoute)



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
