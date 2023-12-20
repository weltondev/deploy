require('dotenv').config();
const mongoose = require('mongoose');

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;

//mongoose.connect('mongodb+srv://root:admin123@pi.1qwnksm.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(`mongodb+srv://${USER}:${PASS}@pi.1qwnksm.mongodb.net/?retryWrites=true&w=majority`)

module.exports = mongoose;