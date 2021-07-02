const express = require('express');
const router = express.Router();
const controller = require('../controllers/speakers.controller');
const multer = require("multer");

const FileStorage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'../Frontend/public/user')
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
})

const upload= multer({ storage:FileStorage})
router.post('/add',upload.single('image'),controller.addSpeakers);
router.get('/',controller.getSpeakers);
// router.get('/update',controller.updateSpeakers);
// router.get('/delete/:id',controller.deleteSpeakers);
// router.get('/update/:id',controller.deleteSpeakers);


module.exports=router;