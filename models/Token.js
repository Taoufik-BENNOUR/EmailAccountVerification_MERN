const mongoose = require('mongoose')

const TokenSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
        unique:true
    },
    token:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:10
    }
})

module.exports = mongoose.model('Token',TokenSchema)