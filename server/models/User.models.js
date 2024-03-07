import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      age: {
            type: Number,
            required: true
      },
      email: {
            type: String,
      },
      mobile: {
            type: String,
      },
      address: {
            type: String,
            required: true
      },
      aadharCardNumber: {
            type: Number,
            required: true,
            unique: true,
      },
      password: {
            type: String,
            required: true
      },
      role: {
            type: String,
            enum: ['voter','admin'],
            default: 'voter'
      },
      isVoted: {
            type: Boolean,
            default: false
      }
},{timestamps:true})

userSchema.pre('save', async function(next){
      const user = this

      //Hash the password only if it has been modified(or is new)
      if(!user.isModified('password')) return next();
      try {
            //hash password generation
            const salt = await bcrypt.genSalt(10);

            //hash password
            const hashedPassword = await bcrypt.hash(user.password,salt);

            user.password = hashedPassword
            next();
      } catch (error) {
            return next(error)
      }
})

userSchema.methods.comparePassword = async function(candidatePassword){
      try {
            //Use bcrypt to compare the provided password with the hashed password
            const isMatch = await bcrypt.compare(candidatePassword,this.password);
            return isMatch;
      } catch (error) {
            throw error;
      }
}

export const User = mongoose.model("User",userSchema)