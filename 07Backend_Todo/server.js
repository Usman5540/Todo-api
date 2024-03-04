

import  connectDb from './DataBases/DB.js';
import app from './app.js'
const PORT=500
connectDb() 
app.listen(PORT,()=>{
    // console.log(process.env.PORT)
    // but unable to use above . i will see it later 
    console.log(`server is runnig at ${PORT} in ${process.env.NODE_URL} mode`)
})// this is an server which hosted locally 
app.get("/",(req,res)=>{
res.send("Deployed")
})
