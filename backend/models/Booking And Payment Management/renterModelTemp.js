import mongoose from "mongoose";

const renterSchema = mongoose.Schema(

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

export const Owner = mongoose.model('BookingRenterTest',renterSchema);