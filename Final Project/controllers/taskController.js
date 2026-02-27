const Task = require('../models/task');
const User = require('../models/user')

const createTask = async (req, res) => {
    try {

        const { title, description } = req.body;

        const task = await Task.create({
            title,
            description,
            user: req.user
        });

        res.status(201).json({
            success: true,
            message: "Task Created Successfully",
            task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getUserTask = async (req , res) => {
    try{
        const id = req.params.id;
        const user = await User.findById(id);
        if(!user){
            res.status(401).json({message : "User not found"});
        }
        const tasks = await Task.find( {user : id});
        res.status(200).send({
            success : true ,
            No_of_task : tasks.length,
            tasks
        })
    } catch(error){
        console.log("Get Task Error" , error);
    }
    
}

const getAllTask = async (req , res) => {
    try{
        const tasks = await Task.find();
        res.status(200).send({
            success : true ,
            No_of_task : tasks.length,
            tasks
        })
    } catch(error){
        console.log("Get Task Error" , error);
    }
    
}

const deleteTask = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
module.exports = {
    createTask,
    getUserTask,
    getAllTask
}