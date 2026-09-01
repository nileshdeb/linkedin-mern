import multer from "multer";

const upload =multer({storage})

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public")
    },
    filename:()

})