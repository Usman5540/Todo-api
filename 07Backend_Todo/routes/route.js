import express from 'express'
import { newUser,getAlluers, getUserDetails ,login,logout} from '../controller/users.js';
import { isAuthenticated } from '../middlewere/auth.js';
// make sure file at last when you simply importing javascript
const router=express.Router()
// as of now router is used to set prefix
router.post("/new",newUser)
router.get("/all",getAlluers)
router.post("/login",login)
router.get("/logout",logout)// sirf idhar likhny men aur code readability barhti hai aur kuch nahi
router.get("/me",isAuthenticated,getUserDetails)  // OK 
export default router
 
