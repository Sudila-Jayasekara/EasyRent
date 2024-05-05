import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { KEY } from "../../config.js";
import { Renter } from "../../models/Renter Management/Renter.model.js";
import { Vehicle } from "../../models/Vehicle Management/vehicleModel.js";
// import {Favlist} from '../../models/Renter Management/favList.js'
import nodemailer from 'nodemailer' 

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ message: "Renter route working" });
});

// GET all renters
router.get('/', async (req, res) => {
    try {
        const renters = await Renter.find();
        res.json(renters);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific renter by id  
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const renter = await Renter.findById(id);
        if (!renter) {
            return res.status(404).json({ message: 'Renter not found' });
        }
        res.json(renter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific renter by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const renter = await Renter.findById(id);
    if (!renter) {
      return res.status(404).json({ message: 'Renter not found' });
    }
    res.json(renter);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Update a renter by id
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const renter = await Renter.findById(id);
        if (!renter) {
            return res.status(404).json({ message: 'Renter not found' });
        }
        Object.assign(renter, req.body);
        const updatedrenter = await renter.save();
        res.json(updatedrenter);
         alert: 'Renter updated successfully';

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Delete a renter by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const renter = await Renter.findById(id);
      if (!renter) {
        return res.status(404).json({ message: 'Renter not found' });
      }
      await Renter.findByIdAndDelete(req.params.id);
      res.json({ alert: 'Rentetr deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
  
  router.patch('/:renterId/:vehicleId', async (req, res) => {
    try {
        const { renterId, vehicleId } = req.params;
        console.log('Received renterId:', renterId);
        console.log('Received vehicleId:', vehicleId);

        const renter = await Renter.findById(renterId);
        console.log('Found renter:', renter);

        const vehicle = await Vehicle.findById(vehicleId);
        console.log('Found vehicle:', vehicle);

        if (!renter || !vehicle) {
            return res.status(404).json({ message: 'Renter or Vehicle not found' });
        }
        
        const isVehicleInWishlist = renter.wishList.includes(vehicleId);

        if (isVehicleInWishlist) {
            renter.wishList = renter.wishList.filter(id => id !== vehicleId);
            await renter.save();
            console.log('Vehicle removed from wishlist. Updated renter:', renter);
            return res.status(200).json({ message: 'Vehicle removed from wishlist', updatedWishlist: renter.wishList });
        } else {
            renter.wishList.push(vehicleId);
            await renter.save();
            console.log('Vehicle added to wishlist. Updated renter:', renter);
            return res.status(200).json({ message: 'Vehicle added to wishlist', updatedWishlist: renter.wishList });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});




export { router as RenterRouter };
