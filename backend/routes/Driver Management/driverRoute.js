import express from 'express';
import {Driver} from '../../models/Driver Management/Driver.model.js'

const router = express.Router();

//Insert a new driver
router.post('/', async (req, res) => {
  const driver = new Driver(req.body);
  try {
    const newDriver = await driver.save();
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert driver' });
  }
});

// GET all drivers
router.get('/', async (req, res) => {
    try {
      const driver = await Driver.find();
      res.json(driver);
  
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// GET a specific booking by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const driver = await Driver.findById(id);
      if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }
      res.json(driver);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Update a driver by id
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const driver = await Driver.findById(id);
      if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }
      Object.assign(driver, req.body);
      const updatedDriver = await driver.save();
      res.json(updatedDriver);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // Delete a driver by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const driver = await Driver.findById(id);
      if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }
      await Driver.findByIdAndDelete(req.params.id);
      res.json({ message: 'Driver deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
export default router;
