import express from "express";

import { Renter } from "../../models/Renter Management/Renter.model.js";
const router=express.Router();

router.post('/signup',async (req,res)=>{
    const{username,email,password,phoneno,address}=req.body;
   const renter=await Renter.findOne({email,phoneno})
   if(renter){
    return res.json({message:"Renter already registered"})
   }
   const newRenter=new Renter({
        username,
        email,
        password,
        phoneno,
        address,
   })
   await newRenter.save()
   return res.json({message:"record Registered"})
})

export{router as RenterRouter}