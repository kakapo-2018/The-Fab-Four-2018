let express = require('express')
let router = express.Router()
const data = require('./produce.json')
// let fs = require('fs')
//let empty = {}
module.exports = router

router.get ('/', (req, res) => {
  res.send('Hello world')
})

router.get ('/cart', (req, res) => {
  res.send('cart')
})

router.get ('/categories', (req, res) => {
  res.send('category page')
})

router.get ('/categories/:id', (req, res) => {
  const id = req.params.id //just testing 1 or 2

const found = data.produce.find(function(produce) {
  return produce.id == id
})
res.send(found)
// res.render('categories/TEMP', found)

//   if (id == 1){
//     res.send('category id' + id)
//   }
//  else if (id == 2){
//   res.send('category id' + id)

})

