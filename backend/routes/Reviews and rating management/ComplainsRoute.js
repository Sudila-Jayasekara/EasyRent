import express from 'express';
import {Complains} from '../../models/Reviews and rating management/complainsModel.js';

const router = express.Router();

// Insert a new complains
router.post('/', async (req, res) => {
  const complains = new Complains(req.body);
  try {
    const newcomplains = await complains.save();
    res.status(201).json(newcomplains);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add complains' });
  }
});

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const complains = await Complains.find();
     res.status(200).json({
      count: complains.length,
      data: complains,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/*GET a specific booking by id
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
}); */

// Update a  by id
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const complains = await complains.findById(id);
    if (!complains) {
      return res.status(404).json({ message: 'complaints not found' });
    }
    Object.assign(complains, req.body);
    const updatecomplains= await complains.save();
    res.json(updatecomplains);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a booking by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const complains = await Complains.findById(id);
    if (!complains) {
      return res.status(404).json({ message: 'complains not found' });
    }
    await Complains.findByIdAndDelete(req.params.id);
    res.json({ message: 'complaint deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

