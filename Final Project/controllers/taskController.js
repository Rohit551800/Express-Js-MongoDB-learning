const Task = require('../models/task');

const createTask = async (req , res) => {
    try {

        const { title, description } = req.body;

        const task = await Task.create({
            title,
            description,
            user: req.user.userID
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
}


module.exports = {
    createTask
}