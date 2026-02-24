const express = require('express');
const app = express();

require('dotenv').config();
require('./config/db');
const auth = require('./middleware/auth')
const userRoute = require('./route/authRoute');
const taskRoute = require('./route/taskRoute')
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/user' , userRoute);
app.use('/api/task' , taskRoute);

app.get('/' ,(req,res) => {
    res.send("Server is Running");
})



app.listen(PORT , () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});