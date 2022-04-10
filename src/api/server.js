const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const routes = require('../../index')
app.use('/create',routes.routerIndex)

app.use('/upgrade',routes.routerUpgrade)

app.listen(4567,() => console.log('Ok'))