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
const DungeonAPI = require('./dungeons');

var corsOptions = {
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/spells', async (req, res) => {
    query_api(DungeonAPI.getSpells(), res);
});

app.get('/skills', async (req, res) => {
    query_api(DungeonAPI.getSkills(), res);
})

async function query_api(query, res) {
    let response;
    try {
        response = await query;
        res.send(response.data);
    } catch (err) {
        res.status(500).send();
    }
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);