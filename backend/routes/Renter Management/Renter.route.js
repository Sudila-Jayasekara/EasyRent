import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import { KEY } from "../../config.js";
import { Renter } from "../../models/Renter Management/Renter.model.js";
import nodemailer from 'nodemailer' 

const router = express.Router();


router.post('/signup', async (req, res) => {
    const { username, email, password, phoneno, address } = req.body;
    try {
        const renter = await Renter.findOne({ email, phoneno });
        if (renter) {
            return res.json({ message: "Renter already registered" });
        }
        const hashpassword=await bcrypt.hash(password,10)
        const newRenter = new Renter({
            username,
            email,
            password:hashpassword, 
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
        const validpassword=await bcrypt.compare(password,renter.password)
        if (!validpassword) { // Direct comparison (not recommended)
            return res.json({ message: "Password is incorrect" });
        }
        const token = jwt.sign({ email: renter.email }, KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
        return res.json({ status: true, message: "Login successful" });
    } catch (error) {
        console.error(error);
        
    }
})

router.post('/forgotpassword',async(req,res)=>{
    const{email}=req.body
    try{
        const renter=await Renter.findOne({email})
        if(!renter){
            return res.json({
                message:"User Not registered"
            })
        }
    }catch(err){
        console.log(err)
    }
    const token=jwt.sign({id:Renter._id},KEY,{expiresIn:'5m'})
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'chanukadushan130@gmail.com',
          pass: 'vsmf xpzq tnwn iipe'
        }
      });
      
      var mailOptions = {
        from: 'EasyRent@gmail.com',
        to: email,
        subject: 'Reset Password',
        text: 'http://localhost:5173/resetPassword/${token}'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return res.json({message:"error while sending"})
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})

export { router as RenterRouter };
