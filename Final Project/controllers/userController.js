const User = require('../models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const registerUser = async (req,res) => {
    
    try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are necessary" });
    }

    const findEmail = await User.findOne({email});

    if (findEmail) {
        return res.status(400).json({ message: "Email Already Exists" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashPass
    });

    res.status(201).json({
        message: `User Created Successfully: ${name}`
    });

} catch (error) {

    if (error.code === 11000) {
        return res.status(400).json({
            message: "Email already exists"
        });
    }

    console.log("User cannot be created", error);

    res.status(500).json({
        message: "Internal Server Error",
        error: error.message
    });
    }
}


const getAllUsers = async (req , res) => {
    try{
        const user =await User.find();
        if(!user){
            return res.status(404).send({message : "No user exist"});
        }
        res.send(user);
    }
    catch(error){
        res.json(error);
    }
}

const getSingleUser = async(req , res) => {
    try{
        const {id} = req.params;
        const userid = await User.findById(id);
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid User ID"
            });
        }
        if(!userid){
           return res.status(400).json({message : "User with this userid does not exit"});
        }        
        res.status(200).send(userid);
    }
    catch(error){
        console.log(error);
        res.status(400).json({
            message: "Internal Server error"
        });
    }
}

const deleteUser = async(req , res) => {
    const id = req.params.id;
    const userid = await User.findByIdAndDelete(id);
    if(!userid){
        return res.status(404).json({message:"User with this user_id not found"});
    }
    res.status(200).json({message : "User deleted Successfully"});
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Enter both email and password"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Email is not registered. Register first!"
            });
        }

        const correctPass = await bcrypt.compare(password, user.password);

        if (!correctPass) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }
        const payload = {
            userID:user.id ,
            email:user.email,
        }
        const token = jwt.sign(payload , process.env.JWT_SECRET , {expiresIn:"1d"});
        res.status(200).json({
            token:token ,
            message: "Login Successfully" , user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    registerUser ,
    getAllUsers,
    getSingleUser ,
    deleteUser , 
    loginUser
}