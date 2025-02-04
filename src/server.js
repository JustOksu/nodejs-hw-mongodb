const express = require('express');
const cors = require('cors');
const pino = require('pino');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};

module.exports = { setupServer };
