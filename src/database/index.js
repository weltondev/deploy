require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL)
        console.log(`Connected`)
    } catch (error) {
        console.log(`${error.message}`)
    }
}

//mongoose.connect('mongodb+srv://root:admin123@pi.1qwnksm.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://root:admin123@pi.1qwnksm.mongodb.net/?retryWrites=true&w=majority')

module.exports = connectDB;