const mongoose = require('mongoose');

module.exports = mongoose.model("User", UserModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },    
    email:{
        type:String,
        unique:true,
        lowercase: true
    },
    avater:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },  
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"law"
    },
    rate:{
        type:Number,
        default:0
    },   
    isAdmin:{
        type:Boolean,
        default:false
    },   
    isLawer:{
        type:Boolean,
        default:false
    },
})
)
