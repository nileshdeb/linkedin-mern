import express from "express"
import { createPost } from "../controllers/post.controllers"
import isAuth from "../middlewares/isAuth"
import upload from "../middlewares/multer"

const postRouter=express.Router()

postRouter.post("/create",isAuth,upload.single("image"),createPost)

export default postRouter