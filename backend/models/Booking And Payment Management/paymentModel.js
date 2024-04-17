import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
    {
        // Booking details
        booking_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'booking_id',
            required: true,
          },

        //payment detials
        estimatePrice: {
            type: Number,
            required: true,
        },
        tirpStart: {
            type: Date,
        },
        tripEnd: {
            type: Date,
        }
        // actualPrice: {
        //     type: Number,
        //     required: true,
        // },
        // paymentMethod: {
        //     type: String,
        //     required: true,
        // },
        // paymentStatus: {
        //     type: String,
        //     required: true,
        // },
    },
    {
        timestamps: true,
    }
);

export const Payment = mongoose.model('Payment',paymentSchema);