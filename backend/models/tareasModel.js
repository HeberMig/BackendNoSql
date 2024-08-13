const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    user:{ //Tiene que ser id de un usuario
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //Referenciado a user
    },

    texto: {
        type: String,
        required: [true, 'Por favor teclea un texto para la tarea']
    },
}, {
    timestamps: true
})
//Tiene que ser singular

module.exports = mongoose.model('Tarea', tareaSchema)
