const mongoose =require("mongoose");
const Schema = mongoose.Schema;

//vehicle_id,trip_id,complains_for,explain
const userSchema = new Schema({
    vehicle_id:{
        type:'string',
        required:true

    },
    trip_id:{
        type:'string',
        required:true

    },
    complains_for:{
        type:'string',
        required:true

    },
    explain:{
        type:'string',
        required:true

    },

});

module.exports =mongoose.model(
    "complainsModel",//file name
    userSchema//function name
)