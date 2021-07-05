const Product = require('../models/products')

const dataController = {
  index(req, res, next){
    Product.find({}, (err, foundProducts) => {
      if(err) {
        res.status(404).send({
          msg: err.message
        })
      } else {
        res.locals.data.products = foundProducts;
        next()
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
        res.locals.data.products = viewProduct;
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
        res.locals.data.products = createdProduct;
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
        res.locals.data.products = deletedProduct;
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
        res.locals.data.products = newProducts;
        next();
      }
    })
  }
}

module.exports = dataController;
