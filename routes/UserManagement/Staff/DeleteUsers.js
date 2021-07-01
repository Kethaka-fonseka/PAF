const  express=require("express");
var router = express.Router();
let path = require('path');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserManagement=require("../../../models/UserManagementModel");
const auth = require("../../../middleware/auths")

//display user details by using ID
router.route('/:id').get(auth,async (req, res) => {
    const _id =  req.params.id;
   await UserManagement.findById(_id,(err, UserManagement)=>{
        return res.status(200).json({
            success:true,
            UserManagement
        });
     
    }).catch((err)=>{
        console.log(err);
    });

});
//Delete user Details
router.route('/delete/:id').delete(auth,(req, res) => {
    const _id = req.params.id;
     UserManagement.findByIdAndDelete(_id).then((sellers) => {

            res.json({
                status:"Success"
            })
    }).catch((err)=>{
        console.log(err);
    });

});
module.exports=router;