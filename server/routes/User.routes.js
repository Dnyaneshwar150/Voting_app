import { Router } from "express";
import { signupUser, loginUser, profile, updateUser } from "../controllers/User.controllers.js";
import { jwtAuthMiddleware } from "../middleware/Auth.middleware.js";
const router = Router()

router.post('/signup',signupUser)
router.post('/login',loginUser)
router.get('/profile',jwtAuthMiddleware,profile)
router.put('/profile/password',jwtAuthMiddleware,updateUser)

export default router