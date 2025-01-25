require('dotenv').config(); // Load environment variables
const express = require('express');
const path = require('path');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://localhost:3001', "*"], 
  credentials: true
}));
app.use(express.json());

// Serve static files from the 'web/build' folder
app.use('/', express.static(path.join(__dirname, '../client/build')));
app.use('*', express.static(path.join(__dirname, '../client/build')));

// Start the server
const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
