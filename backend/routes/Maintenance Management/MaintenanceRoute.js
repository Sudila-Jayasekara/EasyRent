
import express from 'express';
import { Maintenance } from '../../models/Maintenance/Maintenance.js';
const router = express.Router();

// Insert a new vehicle condition
router.post('/', async (req, res) => {
  const maintenance = new Maintenance(req.body);
  try {
    const newMaintenance = await maintenance.save();
    res.status(201).json(newMaintenance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert booking' });
  }
});

// GET all conditions
router.get('/', async (req, res) => {
  try {
    const maintenance = await Maintenance.find({});
    res.status(200).send(maintenance);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Get condition by id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const maintenance = await Maintenance.findById(id);
    return res.status(200).json(maintenance);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// Update conditions
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (
      !req.body.vehicle_id ||
      !req.body.Vehicle ||
      !req.body.Vehicle_No ||
      !req.body.Tire_Condition ||
      !req.body.Oil_level ||
      !req.body.Breck ||
      !req.body.Shockets ||
      !req.body.Engine_Repaired ||
      !req.body.Oil_Changed ||
      !req.body.Vehicle_description

    ) {
      return res.status(400).send({
        message: 'You must fill all the fields'
      });
    }

    const result = await Maintenance.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: 'Maintain not found' });
    }
    return res.status(200).json({ message: 'Update successful' });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Delete a condition by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const maintenance = await Maintenance.findByIdAndDelete(id);
    if (!maintenance) {
      return res.status(404).json({ message: 'Maintain not found' });
    }
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;