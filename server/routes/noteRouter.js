const Router = require('express')
const router = new Router()
const noteController = require('../controllers/noteController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('DOCTOR'), noteController.create)
router.get('/', noteController.getAll)
router.get('/:id', noteController.getOne)

module.exports = router///
