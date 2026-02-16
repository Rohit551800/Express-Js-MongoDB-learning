const express  = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('dotenv').config();
const PORT = process.env.PORT || 5000;


const users = [{
    id:1 ,
    name:"Rohit Singh Gouria",
    email:"rohitsingh139915@gmail.com",
    age:21
},
{
    id:2,
    name:"Mohit Ameta",
    email:"ametamohit123@gmail.com",
    age:20
}];

app.get('/' , (req , res) => {
    res.send("Home-Section");
});
app.get('/about' , (req , res) => {
    res.send("About-Section");
});
app.get('/services' , (req , res) => {
    res.send("Services-Section");
});
app.get('/contact' , (req , res) => {
    res.send("Contact-Section");
});
app.get('/blog' , (req , res) => {
    res.send("Blog-Section");
});
app.get('/users' , (req , res) => {
    res.send(users);
});
app.get('/users/:id' , (req , res) => {
      const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);
    
    if (!user) {
    return res.status(404).send({ message: "User not found" });
    }

    res.send(user);
});


//Create user post

app.post("/users" , (req , res) => {
    let {name , email , age} = req.body;
    let newUser = {
        id:users.length+1,
        name:name,
        email:email,
        age:age
    }
    users.push(newUser);
    console.log(newUser);
});
app.put("/users/:id" , (req , res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    const { name, email, age } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;
    if (age) user.age = age;
    res.send({message:"Successfully Updates"});
})

app.delete("/users/:id" , (req,res)=>{
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === userId);
    if(userIndex === -1) res.status(404).json({message : "User not found"});
    users.splice(userIndex , 1 );
    
    console.log("User deleted successfully");
});
app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});