import mongoose from "mongoose";
  const connectDb=()=>{
mongoose.connect(process.env.MONGO_URL,{
    dbName:"Todo"
}).then((c) => {
        console.log(`db connected at ${c.Connection.host}`);
    }).catch((e)=>console.log(e))
}                             
 export default connectDb 