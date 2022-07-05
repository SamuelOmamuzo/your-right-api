const UserModel = require("../model/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"../upload")
    },
    filename: function (req,file, cb){
        cb(null,file.originalname)
    }
})

module.exports.upload = multer({storage:storage})


module.exports.register = async (req,res) =>{
    try{
        const { name, email, password } = req.body
        const saltPassword =  await bcrypt.genSalt(10);
        const Info = await UserModel.create({
            name,
            email,
            password:await bcrypt.hash(password, saltPassword),
        })
        res.status(200).json({msg:"your just register",data:Info})
    }catch(error){
        res.status(200).json({msg:"error registering",data:error.message})
    }
}


module.exports.register_Lawyer = async (req,res) =>{
    try{
        const { name, email, password,category } = req.body
        const saltPassword =  await bcrypt.genSalt(10);
        const Info = await UserModel.create({
            name,
            email,
            category,
            isLawer:true,
            password:await bcrypt.hash(password, saltPassword),
        })
        res.status(200).json({msg:"your just register",data:Info})
    }catch(error){
        res.status(200).json({msg:"error registering",data:error.message})
    }
}


module.exports.Add_Lawyer = async (req,res) =>{
    try{
        const Info = await UserModel.create({
            category:req.body,
            about:req.body,
            avater:req.file.path,
            contact:req.body,
        })
        res.status(200).json({msg:"your just register",data:Info})
    }catch(error){
        res.status(200).json({msg:"error registering",data:error.message})
    }
}

module.exports.signIn = async (req,res) =>{
    try{
        const { email, password } = req.body
        const Info = await UserModel.findOne(email);

        if(Info){
            const decoded = await bcrypt.compare(password,Info.password)
            if(decoded){
               const token = jwt.sign({
                   name:Info.name,
                   userId: Info._Id,
                   isAdmin: Info.isAdmin,
                   isLawer: Info.isLawer,
                   category: Info.category
               },
               "LawersPlatformScrite234#",
               {expires:"1d"}
               )
               res.status(200).json({msg:"your just signIn",user:{data:Info,token:token}})
            }else{
                res.status(404).json({msg:"wrong password"})
            }
        }else{
            res.status(404).json({msg:"your email is wrong"})
        }

    }catch{
        res.status(401).json({msg:"error registering"})
    }
}

module.exports.AllUser = async (req,res) =>{
    try{
        const Info = await UserModel.find();
        res.status(200).json({msg:"all Users",data:Info})
    }catch{
        res.status(401).json({msg:"error registering"})
    }
}