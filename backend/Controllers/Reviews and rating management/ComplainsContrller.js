import Complains from "../models/Reviews and rating management/ComplainsModel.js";

export const create =async(req,res)=>{
    try{
        const ComplainsData= new Complains(req.body);
        if(!ComplainsData){
            return res.status(404).json({msg:"user data not found"})
        }
        const svedata=await ComplainsData.save();
        res.status(200).json(svedata)
    }
    catch(err){
        res.status(500).json({error: err});
    }
}


