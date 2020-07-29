const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');

router.post('/new', adminController.newAdmin);
router.get('/', adminController.getAdmins);
router.get('/:id', adminController.getAdmin);
router.put('/:id', adminController.putAdmin);
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
