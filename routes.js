let express = require('express')
let router = express.Router()
const data = require('./produce.json')
let fs = require('fs')
let fullCart = require('./cart.json')
//let empty = {}
module.exports = router




router.get ('/', (req, res) => {
  res.render('layouts/homescreen.hbs', data)
})




router.get ('/categories', (req, res) => {

  const seasonData = data.produce.filter(data => data.season == "Spring")
  // console.log(seasonData);
  // res.send("hi")
  res.render('layouts/spring.hbs', {seasonData})
})



router.get ('/categories/:id', (req, res) => {

  const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)
})

router.post('/categories/:id', (req,res) => {
  let obj ={}

  let quantity = req.body.name

  const inDiv = data.produce.find(data => data.id == req.params.id)

  let Totalprice = Number(inDiv.price) * Number(quantity)
  let price = inDiv.price
  let item = inDiv.name

  obj.quantity = quantity
  obj.Totalprice = Totalprice
  obj.price = price
  obj.item = item

  fullCart.cart.push(obj)

  fs.writeFile('./cart.json', JSON.stringify(fullCart, null, 2), (err) => {
    if (err) res.send('Not quite right')
  })
  res.redirect('/categories/' + req.params.id)
})






router.get ('/cart', (req, res) => {
  res.send('cart')
})

router.get ('/spring', (req, res) => {
  const seasonData = data.produce.filter(data => data.season == "Spring")
  // console.log(seasonData);
  // res.send("hi")
  res.render('layouts/spring.hbs', {seasonData})
})

router.get ('/spring/:id', (req, res) => {

  const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)


})

router.post('/spring/:id', (req,res) => {
  let obj ={}

  let quantity = req.body.name

  const inDiv = data.produce.find(data => data.id == req.params.id)

  let Totalprice = Number(inDiv.price) * Number(quantity)
  let price = inDiv.price
  let item = inDiv.name

  obj.quantity = quantity
  obj.Totalprice = Totalprice
  obj.price = price
  obj.item = item

  fullCart.cart.push(obj)

  fs.writeFile('./cart.json', JSON.stringify(fullCart, null, 2), (err) => {
    if (err) res.send('Not quite right')
  })
  res.redirect('/spring/' + req.params.id)
})

router.get ('/summer', (req, res) => {
  const seasonData = data.produce.filter(data => data.season == "Summer")
  // console.log(seasonData);
  // res.send("hi")
  res.render('layouts/summer.hbs', {seasonData})
})

router.get ('/summer/:id', (req, res) => {
  const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)
// res.render('summer/TEMP', found)

})

router.post('/summer/:id', (req,res) => {
  let obj ={}

  let quantity = req.body.name

  const inDiv = data.produce.find(data => data.id == req.params.id)

  let Totalprice = Number(inDiv.price) * Number(quantity)
  let price = inDiv.price
  let item = inDiv.name

  obj.quantity = quantity
  obj.Totalprice = Totalprice
  obj.price = price
  obj.item = item

  fullCart.cart.push(obj)

  fs.writeFile('./cart.json', JSON.stringify(fullCart, null, 2), (err) => {
    if (err) res.send('Not quite right')
  })
  res.redirect('/summer/' + req.params.id)
})

router.get ('/autumn', (req, res) => {
  const seasonData = data.produce.filter(data => data.season == "Autumn")
  // console.log(seasonData);
  // res.send("hi")
  res.render('layouts/autumn.hbs', {seasonData})
})

router.get ('/autumn/:id', (req, res) => {
  const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)
// res.render('spring/autumn', found)

})

router.post('/autumn/:id', (req,res) => {
  let obj ={}

  let quantity = req.body.name

  const inDiv = data.produce.find(data => data.id == req.params.id)

  let Totalprice = Number(inDiv.price) * Number(quantity)
  let price = inDiv.price
  let item = inDiv.name

  obj.quantity = quantity
  obj.Totalprice = Totalprice
  obj.price = price
  obj.item = item

  fullCart.cart.push(obj)

  fs.writeFile('./cart.json', JSON.stringify(fullCart, null, 2), (err) => {
    if (err) res.send('Not quite right')
  })
  res.redirect('/autumn/' + req.params.id)
})

router.get ('/winter', (req, res) => {
  const seasonData = data.produce.filter(data => data.season == "Winter")
  // console.log(seasonData);
  // res.send("hi")
  res.render('layouts/winter.hbs', {seasonData})
})

router.get ('/winter/:id', (req, res) => {
  const inDiv = data.produce.find(data => data.id == req.params.id)
  res.render('layouts/indivdual.hbs', inDiv)


// res.render('spring/winter', found)

})

router.post('/winter/:id', (req,res) => {
  let obj ={}

  let quantity = req.body.name

  const inDiv = data.produce.find(data => data.id == req.params.id)

  let Totalprice = Number(inDiv.price) * Number(quantity)
  let price = inDiv.price
  let item = inDiv.name

  obj.quantity = quantity
  obj.Totalprice = Totalprice
  obj.price = price
  obj.item = item

  fullCart.cart.push(obj)

  fs.writeFile('./cart.json', JSON.stringify(fullCart, null, 2), (err) => {
    if (err) res.send('Not quite right')
  })
  res.redirect('/winter/' + req.params.id)
})

//   if (id == 1){
//     res.send('category id' + id)
//   }
//  else if (id == 2){
//   res.send('category id' + id)

