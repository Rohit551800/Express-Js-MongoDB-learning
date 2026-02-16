const express = require('express');
const app = express();


app.use(express.json());
require('dotenv').config();
require('./config/db');
const users = require('./models/users');
PORT = process.env.PORT || 5000;



app.get('/api/users' , async (req , res) => {
    const allUsers = await users.find();
    res.send(allUsers);
});
app.get('/api/users/:id' , async (req , res) => {
    const id = req.params.id;
    const user = await users.findById(id);
    if(!user){
        return res.status(404).json({message:"User name with this user_id not found"});
    }
    res.send(user);
});

app.post('/api/users' , async(req , res) => {
    const {Name , Mob , Email , Course , Age} = req.body;
    const newUser = new users({
        Name , Mob , Email , Course , Age
    });
    await newUser.save();
    res.send({message : `User Created Successfully ${Name}`});
});

app.put('/api/users/:id' ,async (req, res) => {
    const id = req.params.id ;
    const user =await users.findByIdAndUpdate(id , req.body , {new : true});
    if(!user){
        res.status(404).json({message : `User with id : ${id} is not found`});
    }
    res.status(200).json({message : "User updated successfully" , user});
});

app.delete('/api/users/:id' , async (req , res) => {
    const id = req.params.id;
    const user = await users.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({message:"User name with this user_id not found"});
    }
    res.status(200).json({message : `User ${user.Name} deleted successfully`});
});

app.listen(PORT , () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});