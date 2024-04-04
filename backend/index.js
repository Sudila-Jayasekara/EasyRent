import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser'
import { PORT, mongoDBURL } from './config.js';
import { RenterRouter } from './routes/Renter Management/Renter.route.js';

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Replace this with the origin of your frontend server
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Add routes
app.use(express.json());
app.use(cookieParser())
app.use('/auth', RenterRouter);

// Connect to MongoDB and start the server
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('App connected to the database');
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
