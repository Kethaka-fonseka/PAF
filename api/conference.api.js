const express = require('express');
const router = express.Router();
const controller = require('../controllers/conference.controller');

router.post('/add',controller.addUpConference);
router.get('/up',controller.getAllUpConferences)
router.get('/main',controller.getMainConferences)
router.get('/closed',controller.getClosedConferences)
router.delete('/:id',controller.deleteConference)
router.patch('/:id',controller.ConferenceStatusHandler);
router.get('/:id',controller.getConferenceByID);
module.exports=router;