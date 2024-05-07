import bodyParser from 'body-parser';
import express from 'express';
import {Payment} from '../../models/Booking And Payment Management/paymentModel.js'
import stripe from 'stripe';


const router = express.Router();

// Stripe secret key
const stripeSecretKey = 'sk_test_51PCvpvLWKwtjim8kqLyI9NMblO06RldtuyAD39vzj0ZeV6vNEfP1NqQK5TN4CkOS0eELdYaZYDYzekYmVNOdBX9e00bKTjckAX';
const stripeClient = new stripe(stripeSecretKey);


// Route to create a Stripe Checkout Session
router.post('/create-checkout-session', async (req, res) => {
  const { bookingId, totalCost } = req.body;

  try {
      // Find the existing Payment record in your database
      const payment = await Payment.findOne({ booking_id: bookingId });

      if (!payment) {
        return res.status(404).json({ error: 'Payment not found for the specified booking ID' });
      }

      // Update the totalCost of the payment
      payment.totalCost = totalCost;
      payment.paymentStatus = 'completed';
      await payment.save();

      // Create a Stripe Checkout Session
      const session = await stripeClient.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
              {
                  price_data: {
                      currency: 'lkr',
                      product_data: {
                          name: 'Booking Payment',
                      },
                      unit_amount: totalCost * 100, // Amount in cents
                  },
                  quantity: 1,
              },
          ],
          mode: 'payment',
          success_url: 'http://localhost:5173/booking/history',
          cancel_url: 'http://localhost:5173/payment/cancel',
          metadata: { bookingId: bookingId },
      });

      res.json({ sessionId: session.id });
  } catch (error) {
      console.error('Error creating checkout session:', error); // Log the error here
      res.status(500).json({ error: 'Internal server error' });
  }
});

// router.post('/webhook', bodyParser.raw({type: 'application/json'}), async (req, res) => {
//   const sig = req.headers['stripe-signature'];
//   let event;

//   try {
//     event = stripeClient.webhooks.constructEvent(req.body, sig, "whsec_1d42e052f14f0c7d96c3a65e8253c51e715bcd9e23533b8c20858b8a66e74476");
//   } catch (err) {
//     console.error('Error constructing event:', err); // Log the error here
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object;

//     try {
//       const payment = await Payment.findOneAndUpdate(
//         { booking_id: session.metadata.bookingId }, // Use bookingId from metadata
//         { paymentStatus: 'completed' },
//         { new: true }
//       );

//       if (!payment) {
//         console.error('Error: No payment found for the specified booking ID');
//         return res.status(404).send('Payment not found for the specified booking ID');
//       }

//       res.json({received: true});
//     } catch (error) {
//       console.error('Error updating payment status:', error);
//       res.status(500).send('Internal server error');
//     }
//   } else {
//     console.error('Received unhandled event type:', event.type);
//     res.status(400).send('Unhandled event type');
//   }
// });



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



// GET all payments
router.get('/', async (req, res) => {
  try {
    const payment = await Payment.find();
    res.json(payment);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET a payment by bookingid
router.get('/booking/:booking_id', async (req, res) => {
  const { booking_id } = req.params;
  try {
    const payment = await Payment .findOne({ booking_id: booking_id }); 
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

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

