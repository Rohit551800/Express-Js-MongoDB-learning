const express = require('express');
const app = express();


require('dotenv').config();
require('./config/db');

const PORT = process.env.PORT || 5000;

const productRoute = require('./routes/product_routes')
app.use(express.json());
app.use('/api/products/' , productRoute);



app.listen(PORT , () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});