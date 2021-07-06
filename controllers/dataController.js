const Product = require('../models/product')

const dataController = {
  index(req, res, next){
    Product.find({}, (err, foundProducts) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.products = foundProducts;
        next();
      }
    })
  },
  show(req, res, next) {
    Product.findById(req.params.id, (err, viewProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = viewProduct;
        next()
      }
    })
  },
  create(req, res, next) {
    Product.create(req.body, (err, createdProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = createdProduct;
        next()
      }
    })
  },
  destroy(req, res, next){
    Product.findbyIdAndDelete(req.params.id, (err, deletedProduct) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = deletedProduct;
        next()
      }
    })
  },
  update(req, res, next){
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, newProducts) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.product = newProducts;
        next();
      }
    })
  },
  buy(req, res, next){
    Product.findIdAndUpdate(req.params.id, { $inc: { qty: -1} }, (err, updatedQty) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {

      }
    })
}


module.exports = dataController;
