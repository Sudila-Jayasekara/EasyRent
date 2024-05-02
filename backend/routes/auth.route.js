import express from 'express';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';
import { Renter } from '../models/Renter Management/Renter.model.js';
import { Driver } from '../models/Driver Management/Driver.model.js';
import { Owner } from '../models/Vehicle Owner Management/Owner.model.js';
import { Vehiclemanager } from '../models/Vehicle Management/VehicleManagerModel.js';
import jwt from 'jsonwebtoken'; 
import { KEY } from '../config.js';

const router = express.Router();

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/'); // Save the uploaded files to the 'public/uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/signup', upload.single('profilePicture'), async (req, res) => {
    const { role, profilePicture, username, email, password, phoneNumber, address, nic, additionalField1, additionalField2 } = req.body;
    const imagePath = req.file ? req.file.path : ''; // Get the path of the uploaded image if exists

    try {
        let UserModel;

        switch (role) {
            case 'renter':
                UserModel = Renter;
                break;
            case 'driver':
                UserModel = Driver;
                break;
            case 'owner':
                UserModel = Owner;
                break;
            case 'vehiclemanager':
                UserModel = Vehiclemanager;
                break;
            default:
                return res.json({ message: 'Invalid user role' });
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.json({ message: `${role} already registered` });
        }

        const hashpassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            username,
            email,
            password: hashpassword,
            phoneNumber,
            profilePicture,
            address,
            userType: role,
            nic,
            additionalField1,
            additionalField2,
            profilePicture: imagePath, // Save the image path
        });
        await newUser.save();
        return res.json({ status: true, message: 'User Registered' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
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
            if(!user){
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


router.patch('/update-profile/:id', upload.single('profilePicture'), async (req, res) => {
  const { username, phoneNumber, address } = req.body;
  const profilePicture = req.file ? req.file.path : ''; // Get the path of the uploaded image if exists

  try {
    // Find the user based on the provided ID
    const user = await Renter.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user data
    user.username = username;
    user.phoneNumber = phoneNumber;
    user.address = address;
    if (profilePicture) {
      user.profilePicture = profilePicture;
    }

    // Save the updated user data
    await user.save();

    return res.json({ status: true, message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// router.post('/forgotpassword',async(req,res)=>{
//     const{email}=req.body
//     try{
//         const renter=await Renter.findOne({email})
//         if(!renter){
//             return res.json({
//                 message:"User Not registered"
//             })
//         }
//     }catch(err){
//         console.log(err)
//     }
//     const token=jwt.sign({id:Renter._id},KEY,{expiresIn:'5m'})
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'chanukadushan130@gmail.com',
//           pass: 'vsmf xpzq tnwn iipe'
//         }
//       });
      
//       var mailOptions = {
//         from: 'EasyRent@gmail.com',
//         to: email,
//         subject: 'Reset Password',
//         text: 'http://localhost:5173/resetPassword/${token}'
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           return res.json({message:"error while sending"})
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });
//   })
  

export { router as authRouter};