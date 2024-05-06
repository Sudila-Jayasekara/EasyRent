import express from 'express';
import { DriverReport } from '../../models/Driver Management/driverReportModel';

const router = express.Router();

// Insert a new driver report
router.post('/', async (req, res) => {
  const driverReport = new DriverReport(req.body);
  try {
    const newDriverReport = await driverReport.save();
    res.status(201).json(newDriverReport);
  } catch (error) {
    res.status(500).json({ error: 'Failed to insert driver report' });
  }
});


// GET all driver reports
router.get('/', async (req, res) => {
  try {
    const driverReports = await DriverReport.find();
    res.json(driverReports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific driver report by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const driverReport = await DriverReport.findById(id);
    if (!driverReport) {
      return res.status(404).json({ message: 'Driver report not found' });
    }
    res.json(driverReport);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a driver report by id
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const driverReport = await DriverReport.findById(id);
    if (!driverReport) {
      return res.status(404).json({ message: 'Driver report not found' });
    }
    Object.assign(driverReport, req.body);
    const updatedDriverReport = await driverReport.save();
    res.json(updatedDriverReport);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete a driver report by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const driverReport = await DriverReport.findById(id);
    if (!driverReport) {
      return res.status(404).json({ message: 'Driver report not found' });
    }
    await DriverReport.findByIdAndDelete(req.params.id);
    res.json({ message: 'Driver report deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
