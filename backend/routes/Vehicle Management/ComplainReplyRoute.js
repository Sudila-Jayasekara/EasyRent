import { Router } from "express";
import ComplainReply from "../../models/Vehicle Management/ComplainReplyModel.js";

const router = Router();

router.post('/', async (req, res) => {
    try {
        const { complainId, reply, vehicleReview, driverReview } = req.body;
        const newReply = new ComplainReply({ complainId, reply, vehicleReview, driverReview });
        await newReply.save();
        res.status(201).json(newReply);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const replies = await ComplainReply.find();
        res.status(200).json(replies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReply = await ComplainReply.findByIdAndDelete(id);
        if (!deletedReply) {
            return res.status(404).json({ message: 'Reply not found' });
        }
        res.status(200).json({ message: 'Reply deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const reply = await ComplainReply.findById(id);
        if (!reply) {
            return res.status(404).json({ message: 'Reply not found' });
        }
        res.status(200).json(reply);
    } catch (error) {
        console.error('Error fetching reply by ID:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { reply } = req.body;
        const updatedReply = await ComplainReply.findByIdAndUpdate(id, { reply }, { new: true });
        if (!updatedReply) {
            return res.status(404).json({ error: 'Reply not found' });
        }
        res.status(200).json({ message: 'Reply updated successfully', reply: updatedReply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export { router as ComplainReplyRoute };
