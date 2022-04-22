const User = require("../models/User")

exports.getUserById = (req,res)=>{
    const id =req.user._id
    try {
        const user = User.findById(id).populate("products")

        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({msg:"couldnt get user",error})
        
    }
}