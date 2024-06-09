const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define another route
app.get('/goodbye', (req, res) => {
  res.send('Goodbye, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
