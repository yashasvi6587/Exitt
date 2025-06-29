import express from "express"

import { loginUser,registerUser,adminLogin,getUserProfile,updateUserProfile } from "../controllers/UserController.js"
const userRouter=express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/admin",adminLogin)
userRouter.get("/profile",getUserProfile)
userRouter.put("/profile", updateUserProfile) // ✅ Use PUT for updates


export default userRouter