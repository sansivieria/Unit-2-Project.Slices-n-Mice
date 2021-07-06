const {Schema, model} = require('mongoose');

const productSchema = new Schema({
  img: { type: String, required: true},
  name: { type: String, required: true},
  manufacturer: { type: String, required: true},
  group: { type: String, required: true},
  rating: { type: String, required: true},
  price: { type: Number,required: true},
  qty: { type: Number, required: true},
});

const Product = model('Product', productSchema);

module.exports = Product;
