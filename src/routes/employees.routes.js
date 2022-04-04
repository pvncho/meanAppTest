const { Router } = require('express')
const employeeController = require('../controllers/employees.controllers.js')
const router = Router()

employeesController = require('../controllers/employees.controllers.js')
// C.R.U.D


router.get('/', employeeController.getEmployees)
router.post('/', employeeController.createEmployee)
router.get('/:id', employeeController.getEmployee)
router.put('/:id', employeeController.editEmployee)
router.delete('/:id', employeeController.deleteEmployee)

module.exports = router