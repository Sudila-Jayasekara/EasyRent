import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from 'cookie-parser';

import BookingRoute from './routes/Booking And Payment Management/bookingRoute.js';
import EmployeeRoute from './routes/HR Management/employeeRoute.js'; 
import PayrollRoute from './routes/HR Management/payrollRoute.js'; 
import LeaveRequestRoute from './routes/HR Management/leaveRequestRoute.js'; 
import AttendanceRoute from './routes/HR Management/attendanceRoute.js'; 


const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());

app.get('/', (req, res) =>{
    console.log('Root route accessed');
    return res.status(200).send('Welcome to ITP Project');
});

app.use('/api/booking', BookingRoute);
app.use('/api/employee', EmployeeRoute);
app.use('/api/payroll', PayrollRoute);
app.use('/api/leaverequest', LeaveRequestRoute);
app.use('/api/attendance',AttendanceRoute);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

mongoose
    .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");
        console.log(`App is listening to port: ${PORT}`);
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });