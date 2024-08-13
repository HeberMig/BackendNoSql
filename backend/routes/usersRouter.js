const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { registrarUser, loginUser, dataUser} = require('../controllers/usersControllers')

router.post('/registrar', registrarUser)//publico
router.post('/login', loginUser)//publico
router.get('/data', protect, dataUser)//Solo es privado

module.exports = router