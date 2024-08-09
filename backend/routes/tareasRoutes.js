const express = require('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas } = require('../controllers/tareasControllers')


//Primer forma de hacer un endpoint porque son del mismo endpoint agruparlos
router.route('/').get(getTareas).post(createTareas)

//Segunda forma es de hacerlo individual el endpoint depende de cada uno hacerlo
// router.get('/', getTareas)
// router.post('/', createTareas)

router.route('/:id').put(updateTareas).delete(deleteTareas)
//router.put('/:id', updateTareas )
//router.delete('/:id', deleteTareas)

module.exports = router