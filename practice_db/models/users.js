const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name : {
        type : String ,
        required : true
    },
    Mob : {
        type : Number ,
        unique : true ,
        required : true

    },
    Email : {
        type : String ,
        required : true ,
        unique : true

    },
    Course : {
        type : String ,
        required : true , 
        enum : ["FullStack" , "Data-Science" , "Devops"]
    },
    Age : {
        type : Number ,
        required : true
    }
});

module.exports = mongoose.model('Users' , userSchema);


/*
    {
        "Name" : "User_Name" ,
        "Mob" :012345xxxx ,
        "Email" : "xxxx@gmail.com" ,
        "Course" : "FullStack",
        "Age" : xx
    }
 */