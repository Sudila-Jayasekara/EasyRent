import express from 'express';
import {Vehicle} from '../../models/Vehicle Management/vehicleModel.js';




const router = express.Router();
router.post('/vehicleadd', async (req, res) => {
  const { brand, model,modelYear,engineCapacity, mileage,totalSeats,photos,transmission,price,vehicleNumber,startDate } = req.body;
  try {
   
      const newVehicle = new Vehicle({
          brand,
          model,
          modelYear, 
          engineCapacity,
          mileage,
          totalSeats,
          photos,
          transmission,
          price,
          vehicleNumber,
          startDate,
      });
      await newVehicle.save();
      return res.json({ status: true, message: "Vehicle Added" });
  } catch (error) {
      console.error(error);
     }
});

// Insert a new Vehicle
router.post('/', async (req, res) => {
    const vehicle = new Vehicle(req.body);
    try {
      const newVehicle = await vehicle.save();
      res.status(201).json(newVehicle);
    } catch (error) {
      res.status(500).json({ error: 'Failed to insert Vehicle' });
    } 
  });

  // GET all Vehicles
  router.get('/', async (req, res) => {
    try {
      const vehicles = await Vehicle.find();
      res.json(vehicles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // GET a specific Vehicle by id
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const vehicle = await Vehicle.findById(id);
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
      res.json(vehicle);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  //fetch vehicle details by owner id
  router.get('/owner/:ownerId', async (req, res) => {
    const { ownerId } = req.params;
    try {
      const vehicles = await Vehicle.find({ owner_id: ownerId });
      if (!vehicles || vehicles.length === 0) {
        return res.status(404).json({ error: 'Vehicles not found for the specified owner_id' });
      }
      res.status(200).json(vehicles);
    } catch (error) {
      console.error('Error fetching Vehicle details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update a Vehicle by id
  router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const vehicle = await Vehicle.findById(id);
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
      Object.assign(vehicle, req.body);
      const updatedVehicle = await vehicle.save();
      res.json(updatedVehicle);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
  // Delete a Vehicle by id
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const vehicle = await Vehicle.findById(id);
      if (!vehicle) {
        return res.status(404).json({ message: 'Vehicle not found' });
      }
      await Vehicle.findByIdAndDelete(req.params.id);
      res.json({ message: 'Vehicle deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
export default router;