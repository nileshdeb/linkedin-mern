import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connected")

    }catch(err){
        console.log("db error");
    }
}

export default connectDb; 