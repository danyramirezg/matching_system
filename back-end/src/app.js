require('dotenv').config();

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');

require('./database');

// Create the express server
const app = express();

// Settings: Access port 4000
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret-matching-system',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(passport.initialize());
app.use(passport.session());

// Create route
app.get('/', (req, res) => res.send('Hello_world Dani'));

// Start server
app.listen(app.get('port'), () => console.log('Server on port 4000'));
