import jwt from 'jsonwebtoken'

const jwtAuthMiddleware = (req,res,next) =>{
      //first check request headers has authorization or not
      const authorization = req.headers.authorization
      if(!authorization) return res.status(401).json({msg:"Token not found"})

      //Extract the jwt token from the headers
      const token = req.headers.authorization.split(' ')[1];
      if(!token) return res.status(401).json({msg:"Unauthorized"})

      try {
            //Verify the jwt token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user = decoded
            next();
      } catch (error) {
            res.status(401).json({msg: "Invalid token"})
      }
}

//function to generate jwt token
const generateToken = (userData) =>{
      //Generate a new JWT token using new user
      return jwt.sign(userData,process.env.JWT_SECRET, {expiresIn: 3000})
}

export {jwtAuthMiddleware,generateToken}