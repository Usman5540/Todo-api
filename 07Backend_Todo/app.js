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
// Cross Origin Resource Sharing 
app.use(cors({
    origin: [process.env.NODE_URL, 'http://localhost:5173'],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.set("trust proxy",1);

// this si what we used in front end withcredential true 
app.use("/api/v1/users",userRouter) 
app.use("/api/v1/tasks",taskRouter)
app.use(errorMiddlewere);
export default app
