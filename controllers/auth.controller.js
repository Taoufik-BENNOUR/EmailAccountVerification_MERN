const User = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Token = require("../models/Token")
const crypto = require("crypto")
const sendEmail = require("../middlewares/sendEmail")
///User register
exports.userRegister = async (req,res) =>{
    const newUser = await new User({...req.body})
    const email = newUser.email
    
    try {
        const user = await User.findOne({email}) //email : email
        if(user) return res.status(402).json({msg:'User already exist'}) 
       
         const payload = {
      id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phoneNumber: newUser.phoneNumber,
      email: newUser.email,
      adress: newUser.adress,
    };

        
        const token = await jwt.sign(payload, process.env.secretOrPrivateKey);

// hashage algorithm complexity
        const salt = await bcrypt.genSalt(10)
// Hashed password
        const hash = await bcrypt.hash(newUser.password,salt);

        newUser.password = hash;
        newUser.save()
        
        const verification = await new Token({
            userId:newUser._id,
            token:crypto.randomBytes(32).toString("hex")
        }).save()
        const message = `http://localhost:${process.env.BASE_URL}/user/${newUser._id}/verify/${verification.token}`
        await sendEmail(newUser.email,"Confirm your account",`

    <div>Thanks for signing up with Heroku! You must follow this link within 30 days of registration to activate your account:
    </div>
    ${message}

    
       `)
       if(!newUser.verified) {
        return res.status(400).send({msg:'Please confirm your email'})

   }
     
   res.status(202).json({msg:"user resgistred successfully",token: `Bearer ${token}`})

    } catch (error) {
        res.status(401).json({msg:'cant register',error:error})
    }
}
/* login*/
exports.userLogin = async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
try {
    if(!user) return res.status(403).json({msg:"Bad credentials"})

    const isMatch = await bcrypt.compare(password,user.password)
    
    if(!isMatch) return res.status(401).json({msg:'Bad credentials'}) 
    if(!user.verified) {
         let verification = await Token.findOne({userId:user._id})
         if(!verification){
            const verification = await new Token({
                userId:user._id,
                token:crypto.randomBytes(32).toString("hex")
            }).save()
            const message = `http://localhost:${process.env.BASE_URL}/user/${user._id}/verify/${verification.token}`
        await sendEmail(user.email,"Confirm your account",message)
         }
         return res.status(400).send({msg:'email sent to your adress'})
    }
    const payload = {
        id:user._id,
        firstName:user.firstName,
        lastName:user.lastName,
        phone:user.phoneNumber,
        email:user.email,
        adress:user.adress
    }
    const token = await jwt.sign(payload,process.env.secretOrPrivateKey)
    res.status(203).json({token:`Bearer ${token}`})
} catch (error) {
    
res.status(403).json({error:error})
}

}

exports.userVerification = async (req,res) =>{
       try {
            const user= await User.findOne({_id:req.params.id})
            if(!user) return res.status(400).json({errors: [{ msg: "Invalid Link" }]})
            const verification = await Token.findOne({userId:user._id,token:req.params.token})
    
            if(!verification) return res.status(400).json({errors: [{ msg: "Invalid Link" }]})
            await User.updateOne({_id:user._id,verified:true})
    
            await Token.findByIdAndDelete(verification._id)
    
            res.status(200).json({msg:"Email verified"})
    
        } catch (error) {
            res.status(400).json(error)
        }
}