const express  = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 5000;
require('./config/db');


const Developer = require ('./models/Developer');
const developerRoute = require('./routes/developerRoutes');

app.use(express.json());
app.use('/api/developer' , developerRoute);

app.get('/' , (req , res) => {
    res.send("Hello world");
});




app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});