import express from 'express';
import { Payroll } from '../../models/HR Management/payrollModel.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { employeeName, hoursworked, hourlyrate, total } = req.body;
  const payrollEntry = new Payroll({ employeeName, hoursworked, hourlyrate, total });
  try {
    const newPayrollEntry = await payrollEntry.save();
    res.status(201).json({ message: 'Payroll entry added successfully', data: newPayrollEntry });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add payroll entry' });
  }
});

router.get('/', async (req, res) => {
  try {
    const payrollEntries = await Payroll.find();
    res.status(200).json({
      count: payrollEntries.length,
      data: payrollEntries,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const payrollEntry = await Payroll.findById(id);
    if (!payrollEntry) {
      return res.status(404).json({ message: 'Payroll entry not found' });
    }
    res.json(payrollEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const payrollEntry = await Payroll.findById(id);
    if (!payrollEntry) {
      return res.status(404).json({ message: 'Payroll entry not found' });
    }
    Object.assign(payrollEntry, req.body);
    const updatedPayrollEntry = await payrollEntry.save();
    res.json(updatedPayrollEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const payrollEntry = await Payroll.findById(id);
    if (!payrollEntry) {
      return res.status(404).json({ message: 'Payroll entry not found' });
    }
    await Payroll.findByIdAndDelete(id);
    res.json({ message: 'Payroll entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
