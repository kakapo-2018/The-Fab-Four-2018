let express = require('express')
let router = express.Router()
const data = require('./produce.json')
// let fs = require('fs')
//let empty = {}
module.exports = router

router.get ('/', (req, res) => {
  res.render('./layouts/main.hbs', data)
})

// router.get('/spring',(req,req) =>{

//   let spring = data.filter(e => e.season == 'Spring')
// })

