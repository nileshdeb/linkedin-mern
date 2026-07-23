import express from 'express';
import dotenv from'dotenv';
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import connectDb from './config/db.js';
import authRouter from './routes/auth.routes.js';
dotenv.config();


let app =express();
let port =process.env.PORT || 5000

app.use ("/api/auth",authRouter);

app.listen(port,()=>{
    connectDb();
    console.log("server started")
})