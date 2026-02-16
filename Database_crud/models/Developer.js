const mongoose = require('mongoose');
const DeveloperSchema = mongoose.Schema({
    name:{
        type : String ,
        required : true
    },
    email:{
        type:String,
        required : true,
        unique : true
    },
    age : {
        type : Number ,
        require : true
    },
    domain : {
        type : String ,
        require : true,
        enums : ["Frontend" , "Backend" , "FullStack"]
    },
    password : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("developers" , DeveloperSchema);


/*
{
    "name" : "Rohit Singh Gouria" ,
    "email" : "rohitsingh139915@gmail.com" ,
    "Age" : 21 ,
    "domain" : "Frontend Developer"
}  */