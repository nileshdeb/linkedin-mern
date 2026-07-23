import jwt from "jsonwebtoken";

const genToken=async(userId)=>{
    try{
        let token=await jwt.sign({userId},PROCESS.env.JWT_SECRET,{expiresIn:"7d"})
        return token    
    }catch(err){
        console.log(err);
    }

}

export default genToken