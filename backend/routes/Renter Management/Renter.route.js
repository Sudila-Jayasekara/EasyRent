import express from "express";
import jwt from 'jsonwebtoken';
import { KEY } from "../../config.js";
import { Renter } from "../../models/Renter Management/Renter.model.js";

const router = express.Router();


router.post('/signup', async (req, res) => {
    const { username, email, password, phoneno, address } = req.body;
    try {
        const renter = await Renter.findOne({ email, phoneno });
        if (renter) {
            return res.json({ message: "Renter already registered" });
        }
        const newRenter = new Renter({
            username,
            email,
            password, 
            phoneno,
            address,
        });
        await newRenter.save();
        return res.json({ status: true, message: "Renter Registered" });
    } catch (error) {
        console.error(error);
       
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const renter = await Renter.findOne({ email });
        if (!renter) {
            return res.json({ message: "User is not registered" });
        }
        if (password !== renter.password) { // Direct comparison (not recommended)
            return res.json({ message: "Password is incorrect" });
        }
        const token = jwt.sign({ email: renter.email }, KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
        return res.json({ status: true, message: "Login successful" });
    } catch (error) {
        console.error(error);
        
    }
});

export { router as RenterRouter };
