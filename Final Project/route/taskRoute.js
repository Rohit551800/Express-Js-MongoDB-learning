const route = require('express').Router();
const { createTask }= require('../controllers/taskController');
const authMiddleware = require("../middleware/auth");


route.post('/create' ,authMiddleware, createTask);


module.exports = route ;