const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

//importar funciones de usersControllers
const { registrarUser, loginUser, dataUser} = require('../controllers/usersControllers')

router.post('/registrar', registrarUser)//endpoint publico
router.post('/login', loginUser)//endpoint publico
router.get('/data', protect, dataUser)//endpoint Solo es privado

module.exports = router