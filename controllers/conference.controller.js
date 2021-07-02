
const Conference =require('../models/conference.model');
const Schedule = require('../models/schedule.model');
const Speakers = require('../models/speaker.model');
const upStatus = 'upcoming';
const closedStatus ='closed';
const activateStatus ='main'
const addUpConference = async (req, res) => {
    if (req.body) {
        const conference = new Conference({
            con_title: req.body.con_title,
            description: req.body.description,
            venue: req.body.venue,
            seats: req.body.seats,
            status: upStatus,
            date: req.body.date,
            researcher_fee: req.body.researcher_fee,
            participant_fee: req.body.participant_fee,

        });
        try {
            const newConference = await conference.save();
            res.status(201).json(newConference);
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
};
const UpdateConference = async (req, res) => {
    if (req.body) {

        const conference = new Conference({
            con_title: req.body.subject,
            description: req.body.description,
            venue: req.body.venue,
            seats: req.body.seats,
            status: req.body.status,
            date: req.body.date,
            researcher_fee: req.body.researcher_fee,
            participant_fee: req.body.participant_fee,

        });
        try {

            const newConference = await conference.updateOne({_id: req.params._id, conference});
            res.status(201).json(newConference);
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
};


const getAllUpConferences = async (req, res) => {
    try {
        const conferences = await Conference.find({ status: upStatus });
        res.status(201).json(conferences);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
};

const getMainConferences = async (req, res) => {
    try {
        const conferences = await Conference.find({ status: activateStatus });
        res.status(201).json(conferences);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
};

const getClosedConferences = async (req, res) => {
    try {
        const conferences = await Conference.find({ status: closedStatus });
        res.status(201).json(conferences);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
};


const deleteConference = async (req, res, params) => {
    if (req.params.id) {
        try {
            const conference = await Conference.findByIdAndDelete(req.params.id);
            const schedule = await Schedule.remove({conference:req.params.id})
            const speaker = await Speakers.remove({conference:req.params.id})
            res.status(200).json({
                status:"Success"
            });

        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
};

const ConferenceStatusHandler = async (req, res) => {
    if (req.params.id) {
        try {
            const conference = await Conference.findById(req.params.id);
            if (conference.status === upStatus) {
                conference.status = activateStatus;
            } else  {
                conference.status = closedStatus;
            }
            const newConference = await conference.save();
            res.status(200).json(newConference);
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
};

const getConferenceByID=async(req,res)=>{
    if (req.params.id) {
        try {
            const schedule = await Schedule.findById(req.params.id);
            res.status(200).json(schedule);
        } catch (error) {
            res.status(500).json({message: error.message})
        }
    }
}

module.exports ={
    addUpConference,
    getAllUpConferences,
    getMainConferences,
    getClosedConferences,
    ConferenceStatusHandler,
    getConferenceByID,
    UpdateConference,
    deleteConference

}