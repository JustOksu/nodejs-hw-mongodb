process.env.NODE_OPTIONS = '--dns-result-order=ipv4first';
require('dotenv').config();

const { initMongoConnection } = require('./db/initMongoConnection');
const { setupServer } = require('./server');

const startApp = async () => {
  console.log('MONGODB_URL:', process.env.MONGODB_URL);

  await initMongoConnection();
  setupServer();
};

startApp();
