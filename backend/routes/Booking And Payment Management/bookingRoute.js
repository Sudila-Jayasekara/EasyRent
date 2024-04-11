import express from 'express';
import {Booking} from '../../models/Booking And Payment Management/bookingModel.js'

const router = express.Router();

// Insert a new booking
// router.post('/', async (req, res) => {
//   const booking = new Booking(req.body);
//   try {
//     const newBooking = await booking.save();
//     res.status(201).json(newBooking);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to insert booking' });
//   }
// });

// Insert a new booking with bill image as a string
router.post('/', async (req, res) => {
  try {
    const { serviceType, startDate, endDate, status, location, description, renter, vehicle, bill } = req.body;
    
    // Create a new booking object
    const booking = new Booking({
      serviceType,
      startDate,
      endDate,
      status,
      location,
      description,
      renter,
      vehicle,
      bill: bill.toString() // Convert the bill image to a string
    });

    // Save the booking to the database
    const newBooking = await booking.save();
    
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert booking' });
  }
});



// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET a specific booking by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a booking by id
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    Object.assign(booking, req.body);
    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a booking by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get all bookings matching to specific renterid
router.get('/renter/:renterid', async (req, res) => {
  const { renterid } = req.params;
  try {
    const bookings = await Booking.find({ renter: renterid });
    if (!bookings) {
      return res.status(404).json({ message: 'Bookings not found' });
    }
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
);

export default router;
