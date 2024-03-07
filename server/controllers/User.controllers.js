import { User } from "../models/User.models.js";
import {  generateToken } from "../middleware/Auth.middleware.js";

const signupUser = async(req,res) => {

      try {
            const data = req.body
            
            const newUser = new User(data)

            const response = await newUser.save()

            const payload = {
                  id: response.id,
            }

            const token = generateToken(payload)
            console.log("Token is",token)

            res.status(200).json({success: true,response: response, token: token})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}
const loginUser = async(req,res) => {
      try {
            const { aadharCardNumber, password, role } = req.body

            const user = await User.findOne({aadharCardNumber: aadharCardNumber,role: role})
            
            if(!user || !(await user.comparePassword(password))){
                  return res.status(401).json({success:false,msg: "Invalid aadhar or password"})
            }
            
            //generate token
            const payload = {
                  id: user.id,
            }
            const token = generateToken(payload)

            res.status(200).json({success:true,token})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const profile = async(req,res) => {
      try {
            const userData = req.user
            const userId = userData.id
            const user = await User.findById(userId)

            res.status(200).json({user})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}

const updateUser = async(req,res) => {
      try {
            const userId = req.user
            const {currentPassword,newPassword} = req.body

            const user = await User.findById(userId)

            if(!user || !(await user.comparePassword(currentPassword))){
                  return res.status(401).json({success:false,msg: "Invalid username or password"})
            }

            //update the user password
            user.password = newPassword
            await user.save();

            res.status(200).json({success:true,msg: "Password Updated"})
      } catch (error) {
            res.status(500).json({success:false,msg: "Internal Server Error"})
      }
}
export { signupUser, loginUser, profile, updateUser }