const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');

router.get('/contacts', contactsController.getContacts);
router.get('/contacts/:contactId', contactsController.getContactById);

module.exports = router;
