import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors'; // Importing cors middleware correctly
import path from 'path';
import { authRouter } from "./routes/auth.route.js";
import { RenterRouter } from './routes/Renter Management/Renter.route.js';
import cookieParser from "cookie-parser";
import BookingRoute from './routes/Booking And Payment Management/bookingRoute.js';
import PaymentRoute from './routes/Booking And Payment Management/paymentRoute.js';

import VehicleRoute from './routes/Vehicle Management/vehicleRoute.js';
import DriverRoute from './routes/Driver Management/driverRoute.js';
import OwnerRoute from './routes/Vehicle Owner Management/ownerRoute.js';
import ComplainsRoute from'./routes/Reviews and rating management/ComplainsRoute.js'
import { RiskRouter } from "./routes/Renter Management/RiskManage.route.js";


import EmployeeRoute from './routes/HR Management/employeeRoute.js'; 
import PayrollRoute from './routes/HR Management/payrollRoute.js'; 
import LeaveRequestRoute from './routes/HR Management/leaveRequestRoute.js'; 
import bodyParser from 'body-parser';
import { ComplainReplyRoute } from "./routes/Vehicle Management/ComplainReplyRoute.js";

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '10mb' }));

// Set up CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your React app's origin
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow credentials (cookies)
}));
app.use(express.static(path.join(__dirname, "public")));

app.use(cookieParser());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to ITP Project')
})

app.get('/', (req, res) =>{
    console.log('Root route accessed');
    return res.status(200).send('Welcome to ITP Project');
});

app.use('/api/auth',authRouter);
app.use('/api/booking', BookingRoute);
app.use('/api/employee', EmployeeRoute);
app.use('/api/payroll', PayrollRoute);
app.use('/api/leaverequest', LeaveRequestRoute);
app.use('/api/payment', PaymentRoute);
app.use('/api/vehicle', VehicleRoute);
app.use('/api/renter', RenterRouter);
app.use('/api/driver', DriverRoute);
app.use('/api/owner', OwnerRoute);

app.use('/api/complainreply',ComplainReplyRoute)
app.use('/Complains',ComplainsRoute);
app.use('/api/risk',RiskRouter);



// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
