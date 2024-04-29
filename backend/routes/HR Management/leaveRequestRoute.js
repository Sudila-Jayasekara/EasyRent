import express from 'express';
import { LeaveRequest } from '../../models/HR Management/leaveRequestModel.js';

const router = express.Router();

// Insert a new leave request entry
router.post('/', async (req, res) => {
  const { employeeName, leaveType, leaveFrom, leaveTo, actionPlan } = req.body;
  const leaveRequestEntry = new LeaveRequest({ employeeName, leaveType, leaveFrom, leaveTo, actionPlan });
  try {
    const newLeaveRequestEntry = await leaveRequestEntry.save();
    res.status(201).json({ message: 'Leave request added successfully', data: newLeaveRequestEntry });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add leave request' });
  }
});

// GET all leave request entries
router.get('/', async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.find();
    res.status(200).json({
      count: leaveRequests.length,
      data: leaveRequests,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific leave request entry by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const leaveRequestEntry = await LeaveRequest.findById(id);
    if (!leaveRequestEntry) {
      return res.status(404).json({ message: 'Leave request entry not found' });
    }
    res.json(leaveRequestEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a leave request entry by id
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const leaveRequestEntry = await LeaveRequest.findById(id);
    if (!leaveRequestEntry) {
      return res.status(404).json({ message: 'Leave request entry not found' });
    }
    Object.assign(leaveRequestEntry, req.body);
    const updatedLeaveRequestEntry = await leaveRequestEntry.save();
    res.json(updatedLeaveRequestEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a leave request entry by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const leaveRequestEntry = await LeaveRequest.findById(id);
    if (!leaveRequestEntry) {
      return res.status(404).json({ message: 'Leave request entry not found' });
    }
    await LeaveRequest.findByIdAndDelete(id);
    res.json({ message: 'Leave request entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
