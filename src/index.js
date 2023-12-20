require('dotenv').config();
const express = require('express');
const router = require('./routes.js');
const connectDB = require('./database/index.js');
const User = require('./models/users.js');

const app = express();
app.use(express.json());
app.use(router)

connectDB();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});