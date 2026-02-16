

app.get('/' , async (req , res) => {
    const allproduct = await product.find();
    res.send(allproduct);
});
app.get('/api/product/:id' , async (req , res) => {
    const id = req.params.id;
    const user = await product.findById(id);
    if(!user){
        return res.status(404).json({message:"User name with this user_id not found"});
    }
    res.send(user);
});

app.post('/api/product' , async(req , res) => {
    const {Name , Mob , Email , Course , Age} = req.body;
    const newUser = new product({
        Name , Mob , Email , Course , Age
    });
    await newUser.save();
    res.send({message : `User Created Successfully ${Name}`});
});

app.put('/api/product/:id' ,async (req, res) => {
    const id = req.params.id ;
    const user =await product.findByIdAndUpdate(id , req.body , {new : true});
    if(!user){
        res.status(404).json({message : `User with id : ${id} is not found`});
    }
    res.status(200).json({message : "User updated successfully" , user});
});

app.delete('/api/product/:id' , async (req , res) => {
});
