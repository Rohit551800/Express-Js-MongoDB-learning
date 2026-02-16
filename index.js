const express = require('express');
const PORT = 8000;
const app = express();

const user = {
    UserName : "Rohit Singh Gouria" ,
    email : "rohitsingh139915@gmail.com" ,
    password : "12345678"
}

app.get('/' , (req , res) => {
    res.send("Hello express");
});
app.get('/about' ,(req , res)=>{
    res.send('AboutPage');
});
app.get('/user' ,(req , res)=> res.send(user))
app.listen(PORT , ()=>{
    console.log(`Server is running http://localhost:${PORT}`);
});