const Schedule =require('../models/schedule.model');

const addSchedule = async (req, res) => {
    if (req.body) {
        const schedule = new Schedule({
            con_title: req.body.subject,
            reg_start_date:req.body.reg_start_date,
            publish_date:req.body.publish_date,
            conference_date:req.body.conference_date,
        });
        try {
            const newSchedule = await schedule.save();
            res.status(201).json(newSchedule);
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
};

const getSchedule=async(req,res)=>{
    try{
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getScheduleByID=async(req,res)=>{
    if (req.params.id) {
        try {
            const schedule = await Schedule.findById(req.params.id);
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}
const deleteSchedule = async(req,res)=>{
    if (req.params.id) {
        try {
            const deletedSchedule = await Schedule.findByIdAndDelete(req.params.id);
            res.status(200).json(deletedSchedule);
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
}
const updateSchedule = async (req, res) => {
    if (req.params.id && req.body) {
        const schedule = new Schedule({
            con_title: req.body.subject,
            reg_start_date:req.body.reg_start_date,
            publish_date:req.body.publish_date,
            conference_date:req.body.conference_date,
        });

        try {
            const newSchedule = await Schedule.findByIdAndUpdate(req.params.id,schedule);
            res.status(200).json(newSchedule);
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
};
module.exports ={
    addSchedule,
    getSchedule,
    deleteSchedule,
    updateSchedule,
    getScheduleByID
}