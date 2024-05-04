import express from 'express';
import { Attendance } from '../../models/HR Management/attendanceModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { employeeName, selectedDate, signInTime, signOutTime, workingHours } = req.body;
  const attendanceEntry = new Attendance({ employeeName, selectedDate, signInTime, signOutTime, workingHours });
  try {
    const newAttendanceEntry = await attendanceEntry.save();
    res.status(201).json({ message: 'Attendance entry added successfully', data: newAttendanceEntry });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add attendance entry' });
  }
});

router.get('/', async (req, res) => {
  try {
    const attendanceEntries = await Attendance.find();
    res.status(200).json({
      count: attendanceEntries.length,
      data: attendanceEntries,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const attendanceEntry = await Attendance.findById(id);
    if (!attendanceEntry) {
      return res.status(404).json({ message: 'Attendance entry not found' });
    }
    res.json(attendanceEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const attendanceEntry = await Attendance.findById(id);
    if (!attendanceEntry) {
      return res.status(404).json({ message: 'Attendance entry not found' });
    }
    Object.assign(attendanceEntry, req.body);
    const updatedAttendanceEntry = await attendanceEntry.save();
    res.json(updatedAttendanceEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const attendanceEntry = await Attendance.findById(id);
    if (!attendanceEntry) {
      return res.status(404).json({ message: 'Attendance entry not found' });
    }
    await Attendance.findByIdAndDelete(id);
    res.json({ message: 'Attendance entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
