const express = require('express');
const app = express();

require('dotenv').config();
require('./config/db');
const userRoute = require('./route/authRoute');
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/user' , userRoute);

app.get('/' ,(req,res) => {
    res.send("Server is Running");
})



app.listen(PORT , () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});