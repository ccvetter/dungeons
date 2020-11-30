module.exports = {
    queryApi:async function(query, res) {
        let response;
        try {
            response = await query;
            res.send(response.data);
        } catch (err) {
            res.status(500).send();
        }
    }
}