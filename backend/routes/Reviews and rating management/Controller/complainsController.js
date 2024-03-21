const Complains= require("../Model/complainsModel");

const getAllcomplains =async(req,res,next)=>{
    let complains;
// get all complains
    try{
        complains= await complains.find();
    }
    catch(err){
        console.log(err);
    }
//not found
    if(!complains.length){
        return res.status(404).json({message:"complains not found"});
    }
    //display all users
    return res.status(200).json({complains});

    };


const addComplains = async(req,res,next)=>{

    const{vehicle_id,trip_id,complains_for,explain}=req.body;
    let complains;

    try{
        complains=new complains({vehicle_id,trip_id,complains_for,explain});
        await complains.save();
    }catch(err){
        console.log(err);
    }
    //not insert complains
    if(!complains){
        return res.status(404).json({message:"unable to add complains"});
    }
    return res.status(200).json({complains});


}

//export
exports.addComplains=addComplains;
exports.getAllcomplains = getAllcomplains;











