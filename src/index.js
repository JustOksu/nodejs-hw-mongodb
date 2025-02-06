process.env.NODE_OPTIONS = '--dns-result-order=ipv4first';
require('dotenv').config();

const initMongoConnection = require('./db/initMongoConnection');
const setupServer = require('./server');

const startApp = async () => {
  try {
    console.log('MONGODB_URL:', process.env.MONGODB_URL);

    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error('Error starting the application:', error);
    process.exit(1);
  }
};

startApp();
