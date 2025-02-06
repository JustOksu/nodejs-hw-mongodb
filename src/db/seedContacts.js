const fs = require('fs').promises;
const mongoose = require('mongoose');
const Contact = require('../models/contacts');
const initMongoConnection = require('./initMongoConnection');

const seedContacts = async () => {
  try {
    await initMongoConnection();

    const contactsData = await fs.readFile('./src/contacts.json', 'utf-8');
    const contacts = JSON.parse(contactsData);

    await Contact.deleteMany();
    await Contact.insertMany(contacts);

    console.log('Contacts successfully imported!');
    process.exit();
  } catch (error) {
    console.error('Error seeding contacts:', error);
    process.exit(1);
  }
};

seedContacts();
