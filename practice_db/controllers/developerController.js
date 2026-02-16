const getSingleDeveloper = async(req , res) => {
    const allUsers = await users.find();
    res.send(allUsers);
};
const getMultipleDeveloper = async(req , res) => {
    const id = req.params.id;
    const user = await users.findById(id);
    if(!user){
        return res.status(404).json({message:"User name with this user_id not found"});
    }
    res.send(user);
};
const createDeveloper = async (req , res) => {
    const {Name , Mob , Email , Course , Age} = req.body;
    const newUser = new users({
        Name , Mob , Email , Course , Age
    });
    await newUser.save();
    res.send({message : `User Created Successfully ${Name}`});
};
const updateDeveloper = async (req, res) => {
    const id = req.params.id ;
    const user =await users.findByIdAndUpdate(id , req.body , {new : true});
    if(!user){
        res.status(404).json({message : `User with id : ${id} is not found`});
    }
    res.status(200).json({message : "User updated successfully" , user});
};
const deleteDeveloper = async (req , res) => {
    const id = req.params.id;
    const user = await users.findByIdAndDelete(id);
    if(!user){
        return res.status(404).json({message:"User name with this user_id not found"});
    }
    res.status(200).json({message : `User ${user.Name} deleted successfully`});
};


module.exports = {
    getSingleDeveloper,
    getMultipleDeveloper,
    createDeveloper,
    updateDeveloper,
    deleteDeveloper
};
