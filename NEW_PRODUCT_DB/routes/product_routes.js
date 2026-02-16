const products{
    getSingleProducts,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product_controllers.js');
app.get('/' , getAllProducts);
app.get('/:id' , getSingleProducts);

app.post('/' , createProduct);

app.put('/:id' ,updateProduct);

app.delete('/:id' , deleteProduct);
