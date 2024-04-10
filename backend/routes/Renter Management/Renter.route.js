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
