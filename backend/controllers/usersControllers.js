const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModel')


const registrarUser = asyncHandler(async (req, res) => {
    //destructarando el objeto body
    const { name, email, password } = req.body
    //validacion 
    if (!name || !email || !password ){
        res.status(400)
        throw new Error('Faltan datos')
    }
    //verificar si el usuario ya existe
    const existeUsuario = await User.findOne({ email })

    if (existeUsuario) {
        res.status(400)
        throw new Error('El usuario ya existe')
    } else {

        //hashear la contraseña
        //hash passowrd
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        //crear el usuario
        const user = await User.create({
            name,
            email,
            password: hashedPassword
    })
    if (user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
            res.status(400)
            throw new Error('No se pudieron guardar los datos')
        }
    
    }
})

const loginUser = asyncHandler (async(req, res) => {

    const { email, password } = req.body
    
    //Verificar q ue el usuario que existe
    const user = await User.findOne({ email })
    
    //Si existe el usuario verifcamos el has del password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generarToken(user._id)
            })
    } else {
        res.status(400)
        throw new Error('Credenciales incorretas')
    }
})

const generarToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
        })
}

const dataUser = (req, res) => {
    res.status(200).json(req.user)
}

module.exports = {
    registrarUser,
    loginUser,
    dataUser
}