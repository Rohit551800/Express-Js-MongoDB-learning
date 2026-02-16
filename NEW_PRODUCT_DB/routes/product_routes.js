const route = require('express').Router();

const {
    getSingleProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/product_controllers.js');


route.get('/' , getAllProducts);
route.get('/:id' , getSingleProduct);

route.post('/' , createProduct);

route.put('/:id' ,updateProduct);

route.delete('/:id' , deleteProduct);


module.exports = route ;