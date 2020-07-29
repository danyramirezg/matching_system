const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectControllers');

router.post('/new', projectController.newProject);
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProject);
router.put('/:id', projectController.putProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
