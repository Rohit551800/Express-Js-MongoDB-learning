const product = require('../models/product.js');

const getAllProducts =  async (req , res) => {
    const allproduct = await product.find();
    res.send(allproduct);
};
const getSingleProduct =  async (req , res) => {
    const id = req.params.id;
    const productid = await product.findById(id);
    if(!productid){
        return res.status(404).json({message:"User name with this user_id not found"});
    }
    res.send(productid);
};

const createProduct = async(req , res) => {
    const {title , description , price , category} = req.body;
    const newProduct = new product({
        title , description , price , category , timestamps
    });
    await newProduct.save();
    res.send({message : `Product Created Successfully :${title}`});
};

const updateProduct = async (req, res) => {
    const id = req.params.id ;
    const productid =await product.findByIdAndUpdate(id , req.body , {new : true});
    if(!productid){
        res.status(404).json({message : `Product with id : ${id} is not found`});
    }
    res.status(200).json({message : "Product updated successfully" , product : id});
};

const deleteProduct =  async (req , res) => {
    const id = req.params.id;
    const productid = await product.findByIdAndDelete(id);
    if(!productid){
        res.status(404).json({message : `Product with ${id} is not found`});
    }
    res.send({message : "Product deleted Successfully"});
};


module.exports = {
    getAllProducts ,
    getSingleProduct, 
    createProduct ,
    updateProduct ,
    deleteProduct
}