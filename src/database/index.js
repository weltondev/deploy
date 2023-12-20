const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:admin123@pi.1qwnksm.mongodb.net/?retryWrites=true&w=majority')

module.exports = mongoose;