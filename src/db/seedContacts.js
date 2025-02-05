const mongoose = require('mongoose');
const Contact = require('../models/contacts');
const initMongoConnection = require('../db/initMongoConnection');

const contacts = [
  {
    name: 'Yulia Shevchenko',
    phoneNumber: '+380000000001',
    email: 'oleh@example.com',
    isFavourite: false,
    contactType: 'personal',
  },
  {
    name: 'Dmytro Boyko',
    phoneNumber: '+380000000002',
    isFavourite: false,
    contactType: 'personal',
  },
];

const seedContacts = async () => {
  await initMongoConnection();
  await Contact.deleteMany();
  await Contact.insertMany(contacts);
  console.log('Contacts successfully imported!');
  process.exit();
};

seedContacts();
