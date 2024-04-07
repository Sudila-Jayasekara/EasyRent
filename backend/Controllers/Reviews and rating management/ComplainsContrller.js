const ComplainsModel = require('../Reviews and rating management')
const getAllcomplains=async(req,res,next)=>{
    let Complains;
//get users
    try{
        Complains=await ComplainsModel.find();
    }
    catch(err){
        console.log(err);
}
//not found
if(!Complains){
    return res.status(404).json({message:"complains not found"});
}
//display
return res.status(200).json({Complains})

};
exports.getAllcomplains=getAllcomplains;
