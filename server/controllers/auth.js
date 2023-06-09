require('dotenv').config()
const {connect}=require("getstream")
const bcrypt=require('bcrypt')
const StreamChat=require("stream-chat").StreamChat
const crypto=require("crypto")


const api_key=process.env.STREAM_API_KEY
const api_secret=process.env.STREAM_API_SECRET
const app_id=process.env.STREAM_APP_ID

const signup=async (req,res)=>{
    try{
       const {fullName,userName,phoneNumber,password}=req.body
        const userId=crypto.randomBytes(16).toString('hex')//for creating random hexa strings
        const serverClient=connect(api_key,api_secret,app_id)
        const hashedPassword=await bcrypt.hash(password,10)
        const token=serverClient.createUserToken(userId)
        res.status(200).json({token,fullName,userName,userId,phoneNumber,hashedPassword})
    }
    catch{
console.log(error)
res.status(500).json({message : error})

    }
}

const login=async (req,res)=>{
    try{
         const {userName,password}=req.body
         const serverClient=connect(api_key,api_secret,app_id)
         const client=StreamChat.getInstance(api_key,api_secret)
         const {users}=await client.queryUsers({name:userName})

         if(!users.length)return res.status(400).json({message:"user not found"})
         const success= await bcrypt.compare(password,users[o].hashedPassword)
         const token=serverClient.createUserToken(users[0].id)
        if(success){
        console.log("id in backend"+users[0].id)
            res.status(200).json({token,fullName:users[0].fullName,userName,userId:users[0].id})
        }else{
            res.status(500).json({message:"incorrect password"})
         }
    }
    catch{
console.log("this is the error from backend"+error)
res.status(500).json({message:error})
    }
}


module.exports ={login,signup};