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
    }),
    getSkills: () => axios({
        method: "GET",
        url: BASE_URL + 'skills',
        headers: {
            "content-type": "application/json"
        }
    }),
    getAbilities: () => axios({
        method: "GET",
        url: BASE_URL + 'ability-scores',
        headers: {
            "content-type": "application/json"
        }
    })
}