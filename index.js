const req = require('express/lib/request');
const charFactory = require('./src/Model/Character')
const routerIndex = require('express').Router()
const routerUpgrade = require('express').Router()
const dao = require('./src/Infrastructure/Dao')

const conn = new dao()

routerIndex.use('/',(req,res) => {
    let char = new charFactory(req.body.name,req.body.class)
    res.send(validateChar(char))
})

function validateChar(char){
    let classList = ['Warrior','Mage']
    if(classList.indexOf(char.class) > -1){
        conn.insert(char)
        return message = {'level':char.level,'name':char.nick,'class':char.class,'life':char.life,'mana':char.mana,'damage':char.damage}
    }else{
        return message = JSON.stringify(`Revise seus dados, classes disponíveis: ${classList}`)
    }
}

routerUpgrade.use('/',(req,res) => {
    conn.update(req.body)
    // console.log(req.body)
    res.send(`Personagem upado!`)
})

module.exports = {routerIndex,routerUpgrade}