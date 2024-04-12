import express, { request } from 'express';
import { Complains } from '../../models/Reviews and rating management/ComplainsModel';
const router = express.Router();


// Insert a new complaint
router.post('/', async (req, res) => {
  try {
    if (
      !req.body.vehicle_id ||
      !req.body.Driver_description ||
      !req.body.Vehicle_description
    ) {
      return res.status(400).send({
        message: 'you must fill all the fields'
      });
    }

    const newComplaint = {
      vehicle_id: req.body.vehicle_id,
      Driver_description: req.body.Driver_description,
      Vehicle_description: req.body.Vehicle_description
    };

    const complaint = await Complains.create(newComplaint);
    return res.status(201).send(complaint);

  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// GET all complaints
router.get('/', async (req, res) => {
  try {
    const complaint = await Complains.find({});
    res.status(200).send(complaint);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
//get complains by id
router.get('/:id', async (req, res) => {
  try {
    const{id}=request.params;
    const complaint = await Complains.find(id);
    res.status(200).send(complaint);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
//update complains

router.put('/:id', async (req, res) => {
  try {
    if (
      !req.body.vehicle_id ||
      !req.body.Driver_description ||
      !req.body.Vehicle_description
    ) {
      return res.status(400).send({
        message: 'You must fill all the fields'
      });
    }

      const {id}=request.params;
      const result= await Complains.findByIdAndUpdate(id,req.body);
    if(!result){
      return res.status(404).json({message:'book not found'})
    }
    return res.status(200).json({message:'update successfully'})
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


// Delete a complaint by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const complaint = await Complains.findByIdAndDelete(id);
    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.json({ message: 'Complaint deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
