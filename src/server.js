const express = require('express');
const contactsRoutes = require('./routes/contactsRoutes');
require('dotenv').config();

const setupServer = () => {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());
  app.use('/api', contactsRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

module.exports = setupServer;
