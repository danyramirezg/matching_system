const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/new', userController.newUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.put('/:id', userController.putUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
