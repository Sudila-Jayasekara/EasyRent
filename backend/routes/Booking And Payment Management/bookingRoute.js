import express from 'express';
import {Booking} from '../../models/Booking And Payment Management/bookingModel.js'

const router = express.Router();

//Insert a new booking
router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  try {
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

// Fetch booking details by RenterId
router.get('/renter/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const bookings = await Booking.find({ renter_id: userId });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: 'Bookings not found for the specified renter_id' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching Booking details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/renter/:renterNIC', async (req, res) => {
  const { renterNIC } = req.params;

  try {
    const bookings = await Booking.find({ renter_nic: renterNIC });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: 'Bookings not found for the specified renter NIC' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching Booking details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch booking details by VehicleId
router.get('/vehicle/:vehicleId', async (req, res) => {
  const { vehicleId } = req.params;

  try {
    const bookings = await Booking.find({ vehicle_id: vehicleId });

    if (!bookings || bookings.length === 0) {
      return res.status(404).json({ error: 'Bookings not found for the specified vehicle_id' });
    }

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching Booking details:', error);
    res.status(500).json({ error: 'Internal server error' });
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


export default router;
