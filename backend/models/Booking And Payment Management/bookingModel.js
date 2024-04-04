// import mongoose from "mongoose";

// const bookingSchema = mongoose.Schema(
//     {
//         // User details
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User',
//             required: true,
//           },

//         // Vehicle information
//         vehicle: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Vehicle',
//             required: true,
//         },

//         // Booking details
//         serviceType: {
//             type: String,
//             enum: ['rent', 'hire'],
//             required: true,
//         },
//         startDate: {
//             type: Date,
//             required: true,
//         },
//         endDate: {
//             type: Date,
//             required: true,
//         },
//         status: {
//             type: String,
//             enum: ['pending', 'approved', 'rejected', 'cancelled'],
//             default: 'pending',
//             required: true,
//         },
//         location: {
//             type: String,
//             required: true,
//         },
//         description: {
//             type: String,
//             required: true,
//         },
//     },
//     {
//         timestamps: true,
//     }
// );

// export const Booking = mongoose.model('Booking',bookingSchema);

import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
    {
        // User details
        user: {
            type: String,
            required: true,
          },

        // Vehicle information
        vehicle: {
            type: String,
            required: true,
        },

        // Booking details
        serviceType: {
            type: String,
            enum: ['rent', 'hire'],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Booking = mongoose.model('Booking',bookingSchema);