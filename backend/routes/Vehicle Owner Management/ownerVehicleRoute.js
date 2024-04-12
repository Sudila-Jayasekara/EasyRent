import express from 'express';

import { OwnerVehicle } from '../../models/Vehicle Owner Management/OwnerVehicleModel.js';



const router = express.Router();

router.post('/vehicleadd', async (req, res) => {
    const { brand, model,modelYear,engineCapacity, mileage,totalSeats,vehicleImage } = req.body;
    try {
     
        const newVehicle = new OwnerVehicle({
            brand,
            model,
            modelYear, 
            engineCapacity,
            mileage,
            totalSeats,
            vehicleImage,
        });
        await newVehicle.save();
        return res.json({ status: true, message: "Vehicle Added" });
    } catch (error) {
        console.error(error);
       }
});

//insert a new vehicle
router.post('/', async (req, res) => {
    const ownerVehicle = new OwnerVehicle(req.body);
    try {
        const newOwnerVehicle = await ownerVehicle.save();
        res.status(201).json(newOwnerVehicle);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add details' });
    }
});

// Get all vehicleDetails
router.get('/', async (req, res) => {
    try {
        const ownersVehicle = await OwnerVehicle.find();
        res.json(ownersVehicle);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific owner by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ownerVehicle = await OwnerVehicle.findById(id);
        if (!ownerVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json(ownerVehicle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update vehicle details by id
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const ownerVehicle = await OwnerVehicle.findById(id);
        if (!ownerVehicle) {
            return res.status(404).json({ message: 'vehicle not found' });
        }
        Object.assign(ownerVehicle, req.body);
        const updatedOwnerVehicle = await ownerVehicle.save();
        res.json(updatedOwnerVehicle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete vehicle details by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const ownerVehicle = await OwnerVehicle.findById(id);
      if (!ownerVehicle) {
        return res.status(404).json({ message: 'vehicle not found' });
      }
      await OwnerVehicle.findByIdAndDelete(req.params.id);
      res.json({ message: 'vehicle deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
export default router;
