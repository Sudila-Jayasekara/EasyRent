import express from 'express';
import {Vehicle} from '../../models/Vehicle Management/vehicleModel.js'

const router = express.Router();

// POST a new vehicle
router.post('/', async (req, res) => {
    const vehicle = new Vehicle(req.body);
    try {
        const newVehicle = await vehicle.save();
        res.status(201).json(newVehicle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET all vehicles
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific vehicle by ID
router.get('/:id', getVehicle, (req, res) => {
    res.json(res.vehicle);
});
async function getVehicle(req, res, next) {
    let vehicle;
    try {
        vehicle = await Vehicle.findById(req.params.id);
        if (vehicle == null) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.vehicle = vehicle;
    next();
}

// DELETE a specific vehicle by ID
router.delete('/:id', getVehicle, async (req, res) => {
    try {
        await Vehicle.findByIdAndDelete(req.params.id);
        res.json({ message: 'Vehicle deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE a specific vehicle by ID
router.put('/:id', getVehicle, async (req, res) => {
    try {
      const updatedVehicle = await res.vehicle.updateOne({
        $set: { ...req.body } 
      });
      if (!updatedVehicle.matchedCount) {
        return res.status(404).json({ message: 'No vehicle found with that ID' });
      }
      const fetchedVehicle = await Vehicle.findById(req.params.id);
      res.json(fetchedVehicle || { message: 'Vehicle updated successfully' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  });
export default router;