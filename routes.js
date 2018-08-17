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

router.get ('/spring', (req, res) => {
  res.send('spring page')
})

router.get ('/spring/:id', (req, res) => {
  const id = req.params.id //just testing 1 or 2

  const found = data.produce.find(function(produce) {
    return produce.id == id
    })
  if (id >= 1 && id <= 8){
    res.send(found)}
    else{
      res.send("out of season")
    }
// res.render('spring/TEMP', found)

})

router.get ('/summer', (req, res) => {
  res.send('summer page')
})

router.get ('/summer/:id', (req, res) => {
  const id = req.params.id //just testing 1 or 2

  const found = data.produce.find(function(produce) {
    return produce.id == id
    })
  if (id >= 9 && id <= 16){
    res.send(found)}
    else{
      res.send("out of season")
    }
// res.render('summer/TEMP', found)

})

router.get ('/autumn', (req, res) => {
  res.send('autumn page')
})

router.get ('/autumn/:id', (req, res) => {
  const id = req.params.id //just testing 1 or 2

  const found = data.produce.find(function(produce) {
    return produce.id == id
    })
  if (id >= 17 && id <= 24){
    res.send(found)}
    else{
      res.send("out of season")
    }
// res.render('spring/autumn', found)

})

router.get ('/winter', (req, res) => {
  res.send('winter page')
})

router.get ('/winter/:id', (req, res) => {
  const id = req.params.id //just testing 1 or 2

const found = data.produce.find(function(produce) {
  return produce.id == id
  })
if (id >= 25 && id <= 32){
  res.send(found)}
  else{
    res.send("out of season")
  }


// res.render('spring/winter', found)

})

//   if (id == 1){
//     res.send('category id' + id)
//   }
//  else if (id == 2){
//   res.send('category id' + id)

