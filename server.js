'use strict';

const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const DungeonAPI = require('./dungeons');

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get('/spells', async (req, res) => {
    let response;
    try {
        response = await DungeonAPI.getSpells();
        res.send(response.data);
    } catch (err) {
        res.status(500).send();
    }
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);