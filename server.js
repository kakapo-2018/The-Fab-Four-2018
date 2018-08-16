const express = require('express')
const hbs = require('express-handlebars')
const data = require('./produce.json') 

const server = express()
let routes = require('./routes')

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))
server.use('/', routes)

module.exports = server