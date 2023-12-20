const express = require('express');
const router = require('./routes.js');
const mongoose = require('./database/index.js');
const User = require('./models/users.js');

const app = express();
app.use(express.json());
app.use(router)
const PORT = 3333;


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});