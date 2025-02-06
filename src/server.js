const express = require('express');
const mongoose = require('mongoose');
const contactsRoutes = require('./routes/contactsRoutes');
require('dotenv').config();

function setupServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());
  app.use('/contacts', contactsRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = setupServer;
