let express = require('express')
let router = express.Router()
const data = require('./produce.json')
const fullCart = require('./cart.json')
// let fs = require('fs')
//let empty = {}
module.exports = router




router.get ('/', (req, res) => {
  res.render('layouts/homescreen.hbs', data)
})




router.get ('/categories', (req, res) => {

  const seasonData = data.produce.filter(data => data.season == "Spring")
  res.render('layouts/spring.hbs', {seasonData})
})

router.get ('/categories/:id', (req, res) => {

  const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)
})






router.get ('/cart', (req, res) => {
  //res.send('cart')
  let subTotal;
  let price = 5;
  let quantity = 2;
  function calculate(price, quantity){
    subTotal =  price * quantity
    return subTotal
  }
  let stuff = fullCart.cart
  res.render('layouts/cart.hbs', {stuff})
})




router.get ('/spring', (req, res) => {
//  res.send('spring page');
const seasonData = data.produce.filter(data => data.season == "Spring")
  res.render('layouts/spring.hbs', {seasonData})
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

const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)

})




router.get ('/summer', (req, res) => {
  const seasonData = data.produce.filter(data => data.season == "Summer")
  res.render('layouts/summer.hbs', {seasonData})
  //res.send('summer page')
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

const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)

})



router.get ('/autumn', (req, res) => {
  const seasonData = data.produce.filter(data => data.season == "Autumn")
  res.render('layouts/autumn.hbs', {seasonData})
  //res.send('autumn page')
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

const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)

})



router.get ('/winter', (req, res) => {
  const seasonData = data.produce.filter(data => data.season == "Winter")
  res.render('layouts/winter.hbs', {seasonData})
 // res.send('winter page')
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

const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)

})

//   if (id == 1){
//     res.send('category id' + id)
//   }
//  else if (id == 2){
//   res.send('category id' + id)

