import express from 'express';
import Employee from '../../models/HR Management/employeeModel.js'

const router = express.Router();

// Employee registration
router.post('/employee/register', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        return res.status(200).json({
            success: "Employee registered successfully"
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
});

// Get all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find().exec();
        return res.status(200).json({
            success: true,
            employees: employees
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
});

// Get specific employee
router.get('/employee/:id', async (req, res) => {
    try {
        const employeeID = req.params.id;
        const employee = await Employee.findById(employeeID).exec();

        if (!employee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }

        return res.status(200).json({
            success: true,
            employee: employee
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
});

// Update employee details
router.put('/employee/update/:id', async (req, res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, { $set: req.body });
        return res.status(200).json({
            success: "Employee details updated successfully"
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message
        });
    }
});

// Delete employee
router.delete('/employee/delete/:id', async (req, res) => {
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Employee deleted successfully",
            deletedEmployee: deleteEmployee
        });
    } catch (error) {
        return res.status(400).json({
            message: "Failed to delete employee",
            error: error.message
        });
    }
});

module.exports = router;