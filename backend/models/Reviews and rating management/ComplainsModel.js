import mongoose from "mongoose";

const ComplainsSchema = new mongoose.Schema({
    Vehicle_id:{
        type:String,
        required:true
    },
    Trip_id:{
        type:String,
        required:true
    },
    Driver_id:{
        type:String,
    },
    Explain:{
        type:String,
        required:true
    }
})
 export default mongoose.model("Complains",ComplainsSchema);