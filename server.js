'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const DungeonAPI = require('./dungeons')

app.get('/spells', async (req, res) => {
    console.log('getting spells')
    let response;
    try {
        response = await DungeonAPI.getSpells();
        console.log(response)
        res.send(response.data);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);