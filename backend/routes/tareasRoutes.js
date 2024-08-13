const express = require('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas } = require('../controllers/tareasControllers')
const { protect } = require('../middleware/authMiddleware')

//Primer forma de hacer un endpoint porque son del mismo endpoint agruparlos
//router.route('/').get(protect, getTareas).post(protect, createTareas)

//Segunda forma es de hacerlo individual el endpoint depende de cada uno hacerlo
 router.get('/', protect, getTareas)
 router.post('/', protect, createTareas)

//router.route('/:id').delete(protect, deleteTareas).put(protect, updateTareas)
router.put('/:id', protect, updateTareas )
router.delete('/:id', protect, deleteTareas)

module.exports = router