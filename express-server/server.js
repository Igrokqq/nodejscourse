const express = require('express');

// Create a new Express app
const app = express();

// Define a route for handling GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
