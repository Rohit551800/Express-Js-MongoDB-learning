const User = require('../models/user');

const registerUser = async (req,res) => {
    
    try{
        const { name, email, password } = req.body;
        const user = new User({
            name,
            email,
            password
        });
        await user.save();
        res.status(201).send({message : `User Created Successfully :${name}`});
    }catch(error){
        console.log("User connot be created " ,error);
        res.status(500).json(error , "Internal Server Error");
    }
}

module.exports = registerUser ;