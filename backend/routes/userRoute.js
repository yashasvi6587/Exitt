import express from "express"
import { loginUser, registerUser, adminLogin,getUserDetails} from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/profile", getUserDetails);

export default userRouter;
