import express from 'express';
import {Booking} from '../../models/Booking And Payment Management/bookingModel.js'

const router = express.Router();

//Route for Save a new Booking
router.post('/', async (request,response) => {
  try{
    const newBooking = {
      user: request.body.user, // Replace with actual user data retrieval logic
      vehicle: request.body.vehicle, // Replace with actual vehicle data retrieval logic
      serviceType: request.body.serviceType,
      startDate: request.body.startDate,
      endDate: request.body.endDate,
      location: request.body.location,
      description: request.body.description, 
    };
    const booking = await Booking.create(newBooking);
    return response.status(201).send(booking);

  }catch (error) {
    console.log(error.message);
    response.status(500).send({message:error.message})
  }
})

export default router;