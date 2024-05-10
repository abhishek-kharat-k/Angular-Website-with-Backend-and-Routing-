const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, '../dist/task-angular-app/browser')));


// Define route handler for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/task-angular-app/browser/index.html'));
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
