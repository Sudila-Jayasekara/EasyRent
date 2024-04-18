import express from 'express';
import {Payment} from '../../models/Booking And Payment Management/paymentModel.js'

const router = express.Router();

//Insert a new payment
router.post('/', async (req, res) => {
  const payment = new Payment(req.body);
  try {
    const newPayment = await payment.save();
    res.status(201).json(newPayment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert booking' });
  }
});



// // GET all bookings
// router.get('/', async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // GET a specific booking by id
// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const booking = await Booking.findById(id);
//     if (!booking) {
//       return res.status(404).json({ message: 'Booking not found' });
//     }
//     res.json(booking);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// Update a payment by bookingid
router.patch('/booking/:booking_id', async (req, res) => {
  const { booking_id } = req.params;
  try {
    const payment = await Payment.findOneAndUpdate(
      { booking_id: booking_id },
      req.body,
      { new: true }
    );
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch payment details by booking ID
router.get('/booking/:booking_id', async (req, res) => {
  const { booking_id } = req.params;

  try {
    const payment = await Payment.findOne({ booking_id: booking_id });

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found for the specified booking ID' });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error('Error fetching payment details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a payment by bookingid
router.delete('/booking/:booking_id', async (req, res) => {
  const { booking_id } = req.params;
  try {
    const payment = await Payment
      .findOneAndDelete({ booking_id: booking_id });

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found for the specified booking ID' });
    }

    res.status(200).json(payment);
  } catch (error) {
    console.error('Error deleting payment:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

});

export default router;

