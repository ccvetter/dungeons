'use strict';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// Routes
const spells = require('./routes/spells');
const skills = require('./routes/skills');
const abilities = require('./routes/ability_scores');

var corsOptions = {
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use('/spells', spells);
app.use('/skills', skills);
app.use('/abilities', abilities);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);