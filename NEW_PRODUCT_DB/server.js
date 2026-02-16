const express = require('express');
const app = express();


app.use(express.json());
require('dotenv').config();
require('./config/db');
const product = require('./models/product');
PORT = process.env.PORT || 5000;



app.listen(PORT , () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});