import mongoose from 'mongoose';

const favListSchema = new mongoose.Schema({
    renterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Renter',
        required: true
    },
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const FavList = mongoose.model('FavList', favListSchema);

module.exports = FavList;