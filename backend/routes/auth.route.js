import express from 'express';
import multer from 'multer';
import path from 'path';
import bcrypt from 'bcrypt';
import { Renter } from '../models/Renter Management/Renter.model.js';
import { Driver } from '../models/Driver Management/Driver.model.js';
import { Owner } from '../models/Vehicle Owner Management/Owner.model.js';
import { Vehiclemanager } from '../models/Vehicle Management/VehicleManagerModel.js';
import jwt from 'jsonwebtoken';
import { KEY } from '../config.js';

const router = express.Router();

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/'); // Save the uploaded files to the 'public/uploads' folder
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
// Init multer
const upload = multer({ storage: storage });

router.post('/signup', upload.single('profilePicture'), async (req, res) => {
    const { role } = req.body;
    try {
        switch (role) {
            case 'renter':
                const { nic, username, email, password, phoneNumber, address } = req.body;
                const renter = await Renter.findOne({ email });
                if (renter) {
                    return res.status(400).json({ message: "Renter already registered" });
                }
                const hashPassword = await bcrypt.hash(password, 10);
                const profilePicturePath = req.file ? `public/uploads/${req.file.filename}` : null;
                const newRenter = new Renter({
                    username,
                    email,
                    password: hashPassword,
                    phoneNumber,
                    address,
                    userType: "renter",
                    nic,
                    profilePicture: profilePicturePath,
                });
                await newRenter.save();
                return res.status(200).json({ status: true, message: "User Registered" });
            
            case 'vehiclemanager':
                const { nic: vmNic, username: vmUsername, email: vmEmail, password: vmPassword, phoneNumber: vmPhoneNumber, address: vmAddress } = req.body;
                const vehiclemanager = await Vehiclemanager.findOne({ email: vmEmail });
                if (vehiclemanager) {
                    return res.status(400).json({ message: "Vehicle Manager already registered" });
                }
                const hashVmPassword = await bcrypt.hash(vmPassword, 10);
                const newVehiclemanager = new Vehiclemanager({
                    username: vmUsername,
                    email: vmEmail,
                    password: hashVmPassword,
                    phoneNumber: vmPhoneNumber,
                    address: vmAddress,
                    userType: "vehiclemanager",
                    nic: vmNic,
                });
                await newVehiclemanager.save();
                return res.status(200).json({ status: true, message: "User Registered" });
            
            case 'driver':
                const { nic: dNic, username: dUsername, email: dEmail, password: dPassword, phoneNumber: dPhoneNumber, address: dAddress } = req.body;
                const driver = await Driver.findOne({ email: dEmail });
                if (driver) {
                    return res.status(400).json({ message: "Driver already registered" });
                }
                const hashDPassword = await bcrypt.hash(dPassword, 10);
                const newDriver = new Driver({
                    username: dUsername,
                    email: dEmail,
                    password: hashDPassword,
                    phoneNumber: dPhoneNumber,
                    address: dAddress,
                    userType: "driver",
                    nic: dNic,
                });
                await newDriver.save();
                return res.status(200).json({ status: true, message: "User Registered" });

            case 'owner':
                const { nic: oNic, username: oUsername, email: oEmail, password: oPassword, phoneNumber: oPhoneNumber, address: oAddress } = req.body;
                const owner = await Owner.findOne({ email: oEmail });
                if (owner) {
                    return res.status(400).json({ message: "Owner already registered" });
                }
                const hashOPassword = await bcrypt.hash(oPassword, 10);
                const newOwner = new Owner({
                    username: oUsername,
                    email: oEmail,
                    password: hashOPassword,
                    phoneNumber: oPhoneNumber,
                    address: oAddress,
                    userType: "owner",
                    nic: oNic,
                });
                await newOwner.save();
                return res.status(200).json({ status: true, message: "User Registered" });
            
            default:
                return res.status(400).json({ message: "Invalid role" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
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
                user = await Vehiclemanager.findOne({ email });

                if (!user) {
                    // Check if the user is an owner
                    user = await Owner.findOne({ email });
                    if (!user) {
                        return res.json({ message: "User is not registered" });
                    }
                }
            }
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.json({ message: "Wrong Credentials!" });
        }

        const token = jwt.sign({ email: user.email }, KEY, { expiresIn: '1h' });

        // Return the user data along with the token
        return res.json({ status: true, user: user, token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

export { router as authRouter };
