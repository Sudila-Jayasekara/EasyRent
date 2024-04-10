import mongoose from "mongoose";

const ownerSchema = mongoose.Schema(

{    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}

);

export const Owner = mongoose.model('BookingOwnerTest',ownerSchema);