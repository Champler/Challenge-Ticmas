import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{         
        cb(null,path.join(__dirname,'../uploads'))
    },
    filename:(req, file, cb) =>{
        cb(null, `currentcsv.csv`)
    }
})
const fileFilter = (req: any, file: any,cb: any) => {   
    const filename: string = file.originalname
    const ext = path.extname(filename)
    
    if(ext !== '.csv'){
        
        cb(new Error("File uploaded is not of type csv"), false);
    }else{
        cb(null, true);
   }
}

export const upload = multer({storage: storage, fileFilter : fileFilter})