import userRouter  from './routes/route.js';
import taskRouter from './routes/taskRoute.js'
import express from 'express'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { errorMiddlewere } from './middlewere/error.js';
import cors from 'cors'
dotenv.config({ path: './config.env' });
// here we config the path to use dotenv any where
const app = express()
app.use(express.json())
app.use(cookieParser())// this will allow for req.cookies in getuserDetails
app.use( cors({// Cross Origin Resource Sharing 
    origins:[process.env.NODE_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true, 
}))
app.use("/api/v1/users",userRouter) 
app.use("/api/v1/tasks",taskRouter)
app.use(errorMiddlewere);
export default app
