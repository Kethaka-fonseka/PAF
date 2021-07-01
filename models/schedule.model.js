const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
        reg_start_date:{
            required:true,
            type:Date,
            trim:true
        },
        reg_end_date:{
            required:true,
            type:Date,
            trim:true
        },
        publish_date:{
            required:true,
            type:Number,
            trim:true
        },
        conference_date:{
            required:true,
            type:Number,
            trim:true
        },
        conference:[{
            type:mongoose.Schema.Types.ObjectId,
            required:false,
            ref:'conference'
        }]
    }
)
module.exports=mongoose.model('schedule',scheduleSchema);