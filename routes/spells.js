var express = require('express');
var router = express.Router();
var queryUtils = require('../lib/query_helper');
const DungeonAPI = require('../dungeons');

router.get('/', async(req, res) => {
    queryUtils.queryApi(DungeonAPI.getSpells(), res)
})

module.exports = router;