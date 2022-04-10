const dao = require('./Dao')

const conn = new dao()

conn.search({
    "level": 2,
    "name": "Geralt",
    "class": "Mage",
    "life": 100,
    "mana": 330,
    "damage": 400
})