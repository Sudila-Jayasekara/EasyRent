import express from 'express';
import bcrypt from 'bcrypt';
import { Renter } from '../models/Renter Management/Renter.model.js';
import { Driver } from '../models/Driver Management/Driver.model.js';
import jwt from 'jsonwebtoken'; 
import { KEY } from '../config.js';

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { role} = req.body;
    if(role==='renter'){
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
        return res.json({ status: true, message: "User Registered" });
    } catch (error) {
        console.error(error);
       
    }};
    if(role==='driver'){
        const { nic,username, email, password, phoneNumber, address } = req.body;
        try {
            const driver = await Driver.findOne({email});
            if(driver){
                return res.json({message:"Driver already registered"});
            }
            const hashpassword=await bcrypt.hash(password,10)
            const newDriver=new Driver({
                username,
                email,
                nic,
                password:hashpassword,
                phoneNumber,
                address,
            });
            await newDriver.save();
            return res.json({status:true,message:"User Registered"});

        } catch (error) {
            console.error(error);
        }
    };
});
router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    
    try {
        // Check if the user is a renter
        const validRenter = await Renter.findOne({ email });
        
        if (validRenter) {
            const validPassword = bcrypt.compareSync(password, validRenter.password);
            
            if (validPassword) {
                const token = jwt.sign({ email: validRenter.email }, KEY, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
                return res.json({ status: true, message: "Login successful" });
            } else {
                return res.json({ message: "Wrong Credentials!" });
            }
        }

        // Check if the user is a driver
        const validDriver = await Driver.findOne({ email });
        
        if (validDriver) {
            const validPassword = bcrypt.compareSync(password, validDriver.password);
            
            if (validPassword) {
                const token = jwt.sign({ email: validDriver.email }, KEY, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
                return res.json({ status: true, message: "Login successful" });
            } else {
                return res.json({ message: "Wrong Credentials!" });
            }
        }

        // If the user is neither a renter nor a driver
        return res.json({ message: "User is not registered" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


export { router as authRouter};