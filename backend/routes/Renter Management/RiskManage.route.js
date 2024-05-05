import express from "express";
import multer from 'multer';
import path from 'path';
import { Risk } from '../../models/Renter Management/Risk.model.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'public/uploads/accident/');
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get('/risk', (req, res) => {
  res.json({ message: "Risk route working" });
});

router.get('/', async (req, res) => {
  try {
    const risks = await Risk.find();
    res.json(risks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', upload.array('accidentPhotos', 10), async (req, res) => {
  try {
    const { username, email, nic, phoneNumber, address, accidentAddress, accidentDate, accidentTime, accidentDescription, injuries, legalAndInsuranceInfo, vehiclenumber } = req.body;
    const picturePaths = req.files.map(file => `public/uploads/accident/${file.filename}`);

    const newRisk = new Risk({
      username,
      email,
      nic,
      phoneNumber,
      address,
      accidentAddress,
      accidentDate,
      accidentTime,
      accidentDescription,
      accidentPhotos: picturePaths,
      injuries,
      legalAndInsuranceInfo,
      vehiclenumber,
    });

    const savedRisk = await newRisk.save();
    res.json(savedRisk);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const risk = await Risk.findById(id);
    if (!risk) {
      return res.status(404).json({ message: 'No data Found' });
    }
    res.json(risk);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const risk = await Risk.findById(id);
    if (!risk) {
      return res.status(404).json({ message: 'No data Found' });
    }
    Object.assign(risk, req.body);
    const updatedrisk = await risk.save();
    res.json(updatedrisk);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const risk = await Risk.findById(id);
    if (!risk) {
      return res.status(404).json({ message: 'No data Found' });
    }
    await Risk.findByIdAndDelete(req.params.id);
    res.json({ alert: 'Risk deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export { router as RiskRouter };
