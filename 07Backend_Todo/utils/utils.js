import jwt from 'jsonwebtoken'
 export const tokenfunction=(res,user,message,status)=>{
     // syntax must use {} inside built in function 
   const token  = jwt.sign({_id: user._id},process.env.JWT_SECRET) //syntax we need to give secret
    

     res.status(status).cookie("token",token,{
       httpOnly: true,//for the security purpose 
       maxAge:15*60*1000,
       SameSite:process.env.NODE_URL==="Development"? "lax" :"none",
       // none means any third party web can set cookie as we saw in video and strict only first-party site can set cookie and lax third party can request but does not set cookie this allow only for 
       // first-party 
         // by default it is Strict which means url of the frontend and backend must be same 
      Secure:process.env.NODE_URL=== "Development" ? false :true
       // this property must be ture in case of using  SameStie 
     }).json({
       success:true,
       message,
     })
 }


