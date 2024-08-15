const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler(async (req, res) => {
    //solicitados el id de user de protect
    const tareas = await Tarea.find({user : req.user.id})
    res.status(200).json(tareas)
})

const createTareas = asyncHandler(async (req, res) => {
    
    if(!req.body.texto){
        res.status(400)
        throw new Error ( "Favor de teclear un descripcion")
    }

    const tarea = await Tarea.create({
        texto: req.body.texto,
        //muestrame al dueño del usuario logueado porque tiene protect
        user: req.user.id
    })
    res.status(201).json(tarea)
   
})

const updateTareas =  asyncHandler(async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
        res.status(400)
        throw new Error('Tarea no encontrada')
        }
    const tareaUpdate = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(tareaUpdate)
})

const deleteTareas = asyncHandler(async (req, res) => {
    const tarea = await Tarea.findById(req.params.id)
    if(!tarea){
        res.status(400)
        throw new Error('Tarea no encontrada')
        }
        await tarea.deleteOne()
        res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}