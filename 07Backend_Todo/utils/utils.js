import jwt from 'jsonwebtoken'
// export const tokenfunction=(res,user,message,status)=>{
//     // syntax must use {} inside built in function 
//     const token  = jwt.sign({_id: user._id},process.env.JWT_SECRET) //syntax we need to give secret
    

//     res.status(status).cookie("token",token,{
//       httpOnly: true,//for the security purpose 
//       maxAge:15*60*1000,
//       SameSite:process.env.NODE_URL==="Development"? "none" :"lax",
//       // none means any third party web can set cookie as we saw in video and strict only first-party site can set cookie and lax third party can request but does not set cookie this allow only for 
//       // first-party 
//         // by default it is Strict which means url of the frontend and backend must be same 
//       Secure:process.env.NODE_URL=== "Development" ? false :true
//       // this property must be ture in case of using  SameStie 
//     }).json({
//       success:true,
//       message,
//     })
// }


export const tokenfunction = (res, user, message, status, req) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  let secureFlag = true; // Default to true for production

  // Check if the request is secure (HTTPS)
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
    secureFlag = true;
  } else {
    secureFlag = false;
  }

  res
    .status(status)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "development" ? "none" : "lax",
      secure: secureFlag // Set secure flag based on request
    })
    .json({
      success: true,
      message,
    });
};

