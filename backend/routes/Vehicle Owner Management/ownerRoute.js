import express from 'express';
import { Owner } from '../../models/Vehicle Owner Management/Owner.model.js';

const router = express.Router();

//Insert a new owner
router.post('/', async (req, res) => {
    const owner = new Owner(req.body);
    try {
        const newOwner = await owner.save();
        res.status(201).json(newOwner);
    } catch (error) {
        res.status(500).json({ error: 'Failed to insert booking' });
    }
});

// GET all owners
router.get('/', async (req, res) => {
    try {
        const owners = await Owner.find();
        res.json(owners);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a specific owner by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const owner = await Owner.findById(id);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        res.json(owner);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a owner by id
router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const owner = await Owner.findById(id);
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        Object.assign(owner, req.body);
        const updatedOwner = await owner.save();
        res.json(updatedOwner);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a owner by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const owner = await Owner.findById(id);
      if (!owner) {
        return res.status(404).json({ message: 'Owner not found' });
      }
      await Owner.findByIdAndDelete(req.params.id);
      res.json({ message: 'Owner deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
export default router;

