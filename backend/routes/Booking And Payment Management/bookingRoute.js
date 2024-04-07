import express from 'express';
import {Booking} from '../../models/Booking And Payment Management/bookingModel.js'

const router = express.Router();

// Insert a new booking
router.post('/', async (req, res) => {
  try {
    const { user, vehicle, serviceType, startDate, endDate, status, location, description } = req.body;

    const newBooking = new Booking({
      user,
      vehicle,
      serviceType,
      startDate,
      endDate,
      status,
      location,
      description,
    });

    const savedBooking = await newBooking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert booking' });
  }
});

export default router;

