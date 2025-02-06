const contactsService = require('../services/contactsService');

async function getContacts(req, res) {
  try {
    const contacts = await contactsService.getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

async function getContactById(req, res) {
  try {
    const contact = await contactsService.getContactById(req.params.contactId);
    if (contact) {
      res.status(200).json({
        status: 200,
        message: `Successfully found contact with id ${req.params.contactId}!`,
        data: contact,
      });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  getContacts,
  getContactById,
};
