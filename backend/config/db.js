const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        //Hacer la conexio a la db llamando la ur de env
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}` .cyan.underline)
                } catch (error) {
                    console.error(error);
                    process.exit(1);
                }
}

module.exports = connectDB