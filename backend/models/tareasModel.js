const mongoose = require('mongoose')
const tareaSchema = mongoose.Schema({

    texto: {
        type: String,
        required: [true, 'Por favor teclea un texto para la tarea']
    },
}, {
    timestamps: true
})
//Tiene que ser singular
module.exports = mongoose.model('Tarea', tareaSchema)
