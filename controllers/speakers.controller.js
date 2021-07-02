const Speaker =require('../models/speaker.model');


const addSpeakers = async (req, res) => {
    if (req.body) {
        const speaker = new Speaker({
            name: req.body.name,
            description: req.body.description,
            img: req.file.originalname,
            conference: req.body.conference

        });
        try {
            const newSpeaker = await speaker.save();
            res.status(201).json(newSpeaker);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};

const getSpeakers = async (req, res) => {
    try {
        const speakers = await Speaker.find();
        res.status(200).json(speakers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    addSpeakers,
    getSpeakers
};
