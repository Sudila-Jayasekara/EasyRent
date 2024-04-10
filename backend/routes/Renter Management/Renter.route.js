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



router.post('/update/:id', async (req, res,next) => {});






export { router as RenterRouter };
