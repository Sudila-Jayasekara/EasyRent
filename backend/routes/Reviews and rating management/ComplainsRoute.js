import express from 'express';
import { Complains } from '../../models/Reviews and rating management/ComplainsModel.js';
const router = express.Router();

// Insert a new complaint
router.post('/', async (req, res) => {
  const complains = new Complains(req.body);
  try {
    const newComplains = await complains.save();
    res.status(201).json(newComplains);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert booking' });
  }
});

// GET all complaints
router.get('/', async (req, res) => {
  try {
    const complaints = await Complains.find({});
    res.status(200).send(complaints);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Get complaint by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const complaint = await Complains.findById(id);
    return res.status(200).json(complaint);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Update complaint
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (
      !req.body.vehicle_id ||
      !req.body.Driver_description ||
      !req.body.Vehicle_description
    ) {
      return res.status(400).send({
        message: 'You must fill all the fields'
      });
    }

    const result = await Complains.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    return res.status(200).json({ message: 'Update successful' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete a complaint by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const complaint = await Complains.findByIdAndDelete(id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.json({ message: 'Complaint deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
