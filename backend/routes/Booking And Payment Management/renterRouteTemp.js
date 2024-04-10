import express from 'express';
import {Owner} from '../../models/Booking And Payment Management/ownerModelTemp.js'

const router = express.Router();

//Insert a new owner
router.post('/', async (req, res) => {
  const owner = new Owner(req.body);
  try {
    const newOwner = await owner.save();
    res.status(201).json(newOwner);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert owner' });
  }
});

// GET a specific owner by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const owner = await Owner.findById(id);
    if (!owner) {
      return res.status(404).json({ message: 'owner not found' });
    }
    res.json(owner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;

