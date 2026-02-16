const Developer = require('../models/Developer.js');


const getSingleDeveloper = async(req , res) => {
    const developers = await Developer.find(); 
    res.send(developers);
};
const getMultipleDeveloper = async(req , res) => {
    const {id} = req.params;
    const developers = await Developer.findById(id);
    if(!developers){
        res.status(404).json({message : "User not found"});
        return ;
    }   
    res.send(developers)
};
const createDeveloper = async (req , res) => {
    const {name , email , age , domain , password} = req.body;

    const newDev = new Developer({
        name , email , age , domain , password
    });
    const savedDev = await newDev.save();
    res.send({message : "New Developer Created"});
};
const updateDeveloper = async (req, res) => {
    const id = req.params.id ;
    const updatedUser = await Developer.findByIdAndUpdate(
    id,
    req.body,
    { new: true }
    );
    if(!updatedUser){
        res.status(404).json({message : "User not found"});
    }
    res.status(200).json({message : "User updated successfully"});
};
const deleteDeveloper = async (req , res) => {
    const id = req.params.id;
    const user = await Developer.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({message:"User name with this user_id not found"});
    }
    res.status(200).json({message : `User ${Developer.name} deleted successfully`});
};
module.exports = {
    getSingleDeveloper,
    getMultipleDeveloper,
    createDeveloper,
    updateDeveloper,
    deleteDeveloper
};
