import express from 'express';
import { Employee } from '../../models/HR Management/employeeModel.js';

const router = express.Router();

// Insert a new employee
router.post('/', async (req, res) => {
	const employee = new Employee(req.body);
	try {
	  const newEmployee = await employee.save();
	  res.status(201).json({ message: 'Registration Successful', data: newEmployee });
	} catch (error) {
	  res.status(500).json({ error: 'Failed to insert employee' });
	}
  });
  

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      count: employees.length,
      data: employees,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a specific employee by id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    console.log('Fetching employee with ID:', id);
    const employee = await Employee.findById(id);
    if (!employee) {
      console.log('Employee not found for ID:', id);
      return res.status(404).json({ message: 'Employee not found' });
    }
    console.log('Employee found:', employee);
    res.json({ employee });
  } catch (err) {
    console.error('Error fetching employee:', err);
    res.status(500).json({ message: err.message });
  }
});


// Update an employee by id
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    Object.assign(employee, req.body);
    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an employee by id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    await Employee.findByIdAndDelete(id); // Fixed this line
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
