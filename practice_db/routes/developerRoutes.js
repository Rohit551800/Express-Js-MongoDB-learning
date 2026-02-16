const route = require('express').Router();
const {
        getSingleDeveloper, 
        getMultipleDeveloper, 
        createDeveloper, 
        updateDeveloper, 
        deleteDeveloper 
    } = require('../controllers/developerController');
const userSchema = require('../models/Developer');


route.get('', getSingleDeveloper)
route.get('/:id' , getMultipleDeveloper);

//create developer
route.post('', createDeveloper);

route.put('/:id' , updateDeveloper);

route.delete('/:id' , deleteDeveloper);

module.exports = route;