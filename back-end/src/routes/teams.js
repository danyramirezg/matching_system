const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamControllers');

router.post('/new', teamController.newTeam);
router.get('/', teamController.getTeams);
router.get('/:id', teamController.getTeam);
router.put('/:id', teamController.putTeam);
router.delete('/:id', teamController.deleteTeam);

module.exports = router;
