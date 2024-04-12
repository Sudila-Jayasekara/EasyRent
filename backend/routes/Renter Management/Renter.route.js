import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { KEY } from "../../config.js";
import { Renter } from "../../models/Renter Management/Renter.model.js";
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
      res.json({ message: 'Rentetr deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

export { router as RenterRouter };
