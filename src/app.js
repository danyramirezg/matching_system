// Import express module
const express = require('express');

// Create the express server
const app = express();

// Settings: Access port 4000
app.set('port', process.env.PORT || 4000);

// Create route
app.get('/', (req, res) => res.send("Hello_world Dani"));

// Start server
app.listen(app.get('port'), () => console.log('Server on port 4000'));








