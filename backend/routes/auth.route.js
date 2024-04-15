import express from 'express';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';
import { Renter } from '../models/Renter Management/Renter.model.js';
import { Driver } from '../models/Driver Management/Driver.model.js';
import { Owner } from '../models/Vehicle Owner Management/Owner.model.js';
import jwt from 'jsonwebtoken';
import { KEY } from '../config.js';

const router = express.Router();

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads'); // Specify the upload directory
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Add a timestamp to the filename to ensure uniqueness
    }
  });
  
  // Init multer
  const upload = multer({ storage: storage });
  
  router.post('/signup', upload.single('profilePicture'), async (req, res) => {
    const { role, username, email, password, phoneNumber, address, nic } = req.body;
  
    try {
      const renter = await Renter.findOne({ email });
      if (renter) {
        return res.json({ message: "Renter already registered" });
      }
  
      const hashpassword = await bcrypt.hash(password, 10);
      const profilePicturePath = req.file ? req.file.filename : null;
  
      const newRenter = new Renter({
        username,
        email,
        password: hashpassword,
        phoneNumber,
        address,
        nic,
        userType: role,
        profilePicturePath
      });
  
      await newRenter.save();
      return res.json({ status: true, message: "User Registered" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  
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
                userType:"driver",
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
                userType:"owner",
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

        // Return the user data along with the token
        return res.json({ status: true, user: user, token });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
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