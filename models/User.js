const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email : String,
    password: String,
    role:{type:String,
    enum:["admin","client"],default:"client"
        },
    products:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
        }
    ],
    verified:false
})

module.exports = mongoose.model('User',userSchema)