const User = require("../models/User")
const Product = require("../models/Product")


exports.getAllProducts = async (req,res)=>{
    try {
        const allProducts = await Product.find()

        res.status(201).json({msg:'Fetch product',allProducts})
        
    } catch (error) {
        res.status(401).json({errors:[{msg:"Fetch products failed"}]})      
    }
}

exports.addProduct = async (req,res)=>{
    let newProduct = await new Product({userId:req.user._id,...req.body})

    //routes res.send(req.user) 
    const user = await User.findOne({_id:req.user._id})

    const product = await newProduct.save()
    
    user.products = [...user.products,newProduct._id]
    try {
        res.status(201).json('Product added',product,user)
        
    } catch (error) {
        res.status(401).json({erros:[{msg:"add product failed"}]})
        
    }
}

exports.updateProduct = async (req,res)=>{
    
    try {
        const product = await Product.findOne({_id:req.params.idProduct})    
        if(req.user._id.equals(product.userId)){
            const updatedProduct = await Product.findByIdAndUpdate({_id:req.params.idProduct},{$set:{...req.body}})
        }
        res.status(201).json({msg:"Phone updated",updatedProduct})
    } catch (error) {
        res.status(401).json({error:[{msg:"Phone didnt update"}]})
        
    }
}

exports.deleteProduct = async (req,res)=>{

    try {
      await Product.findByIdAndDelete({_id:req.params.idProduct})
        res.status(201).json({msg:"phone deleted successfully"})
    } catch (error) {
        res.status(401).json({error:[{msg:"Couldnt delete the phone"}]})
    }
}

exports.getProductById = async (req,res)=>{
    const product = await Product.findById(req.params.idProduct)
    try {
        res.status(205).json({msg:"Fetch data",product})
    } catch (error) {
        res.status(404).json({errors:[{msg:"Fetch product failed"}]})
        
    }
}

exports.getUserById = async (req,res)=>{
    const user = await User.findById(req.params.idUser).populate("Product")
    try {

        res.status(200).json({msg:"Fetch user with success",user})
        
    } catch (error) {
        res.status(400).json({errors:[{msg:"Fetch user failed"}]})
        
    }
}