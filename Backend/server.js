const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const logger = require('morgan');
const { auth } = require('express-openid-connect');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;
const bodyParser = require("body-parser");



// Middleware
app.use(cors());
app.use(express.json());

// Path to the blogs.json file


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});