const express = require('express');
const router = express.Router();
const controller = require('../controllers/schedule.controller');

router.post('/add',controller.addSchedule);
router.get('/',controller.getSchedule)
router.delete('/:id',controller.deleteSchedule)
router.put('/:id',controller.updateSchedule)
router.get('/:id',controller.getScheduleByID)
module.exports=router;
