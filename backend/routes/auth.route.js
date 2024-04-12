import express from 'express';
import bcrypt from 'bcrypt';
import { Renter } from '../models/Renter Management/Renter.model.js';
import { Driver } from '../models/Driver Management/Driver.model.js';
import { Owner } from '../models/Vehicle Owner Management/Owner.model.js';
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

    if(role==='owner'){
        const { nic,username, email, password, phoneNumber, address } = req.body;
        try {
            const owner = await Owner.findOne({email});
            if(owner){
                return res.json({message:"Owner already registered"});
            }
            const hashpassword=await bcrypt.hash(password,10)
            const newOwner=new Owner({
                username,
                email,
                nic,
                password:hashpassword,
                phoneNumber,
                address,
            });
            await newOwner.save();
            return res.json({status:true,message:"User Registered"});

        } catch (error) {
            console.error(error);
        }
    };
});
router.post('/login', async (req, res, next) => {
    const { email, password } = req.body;

    try {
        let user;

        // Check if the user is a renter
        user = await Renter.findOne({ email });
        if (!user) {
            // Check if the user is a driver
            user = await Driver.findOne({ email });
            if (!user) {
                // Check if the user is an owner
                user = await Owner.findOne({ email });
                if (!user) {
                    return res.json({ message: "User is not registered" });
                }
            }
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.json({ message: "Wrong Credentials!" });
        }

        const token = jwt.sign({ email: user.email }, KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
        return res.json({ status: true, message: "Login successful" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


export { router as authRouter};