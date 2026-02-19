const route = require('express').Router();
const registerUser = require('../controllers/userController');
const {} = require('../controllers/userController');


route.post('/register' , registerUser);

module.exports = route;