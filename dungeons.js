const axios = require("axios");

const BASE_URL = process.env.DND_API_URL

module.exports = {
    getSpells: () => axios({
        method: "GET",
        url: BASE_URL + 'spells',
        headers: {
            "content-type": "application/json"
        }
    }),
    getSpell: (spell) => axios({
        method: "GET",
        url: BASE_URL + `spells/${spell}`,
        headers: {
            "content-type": "application/json"
        }
    })
}