const mongoose  = require('mongoose')

const  userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor teclea tu nombre"],
        //unique: true
    },
    email: {
        type: String,
        required: [true, "Por favor teclea tu email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Por favor teclea tu contraseña"]
    },
}, { 
    timestamps: true

})

module.exports = mongoose.model('User', userSchema)

