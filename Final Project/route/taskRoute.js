const route = require('express').Router();
const { createTask , getUserTask , getAllTask}= require('../controllers/taskController');
const authMiddleware = require("../middleware/auth");


route.post('/create' , authMiddleware, createTask);
route.get('/:id' , getUserTask);
route.get('/' , getAllTask);
route.delete('/' , authMiddleware, deleteTask);


module.exports = route;