import express from "express";
import {Risk} from '../../models/Renter Management/Risk.model.js';



const router = express.Router();

router.get('/risk', (req, res) => {
    res.json({ message: "Risk route working" });
});

router.get('/', async (req, res) => {
  try {
      const risk = await Risk.find();
      res.json(risk);

  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


// GET all renters
router.post('/', async (req, res) => {
  try {
    const riskData = req.body;
   
    const newRisk = new Risk(riskData);
    await newRisk.save();
    
    res.status(201).json({ message: "Risk added successfully" });
  } catch (error) {
    console.error("Error adding risk:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET a specific renter by id  
router.get('/', async (req, res) => {
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

// GET a specific renter by id
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


// Update a renter by id
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
         alert: 'Risk updated successfully';

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//Delete a renter by id
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
