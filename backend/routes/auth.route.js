import express from 'express';
import bcrypt from 'bcrypt';
import { Renter } from '../models/Renter Management/Renter.model.js';
import jwt from 'jsonwebtoken'; 
import { KEY } from '../config.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password, phoneNumber, address } = req.body;
    try {
        const renter = await Renter.findOne({ email });
        if (renter) {
            return res.json({ message: "Renter already registered" });
        }
        const hashpassword=await bcrypt.hash(password,10)
        const newRenter = new Renter({
            username,
            email,
            password:hashpassword, 
            phoneNumber,
            address,
        });
        await newRenter.save();
        return res.json({ status: true, message: "Renter Registered" });
    } catch (error) {
        console.error(error);
       
    }
});

router.post('/login', async (req, res,next) => {
    const { email, password } = req.body;
    try {
        const validUser = await Renter.findOne({ email });
        if (!validUser) {
            return res.json({ message: "User is not registered" });
        }
        const validpassword= bcrypt.compareSync(password,validUser.password)
        if (!validpassword) { 
            return res.json({ message: "Wrong Credentials!" });
        }
        const token = jwt.sign({ email: validUser.email }, KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
        return res.json({ status: true, message: "Login successful" });
    } catch (error) {
        console.error(error);
        
    }
});

export { router as authRouter};