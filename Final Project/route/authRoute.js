const route = require('express').Router();
const {registerUser,getAllUsers , getSingleUser , deleteUser , loginUser} = require('../controllers/userController');


route.post('/register' , registerUser);
route.post('/register' , registerUser);
route.get('/' , getAllUsers);
route.get('/:id' , getSingleUser);
route.post('/login' , loginUser);
route.delete('/:id' , deleteUser);

module.exports = route;