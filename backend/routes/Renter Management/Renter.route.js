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


router.post('/update/:id', async (req, res,next) => {});






export { router as RenterRouter };
