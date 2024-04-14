import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
    {
        // Booking details
        booking_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Renter',
            type: String,
            required: true,
          },

        //payment detials
        estimatePrice: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Payment = mongoose.model('Payment',paymentSchema);