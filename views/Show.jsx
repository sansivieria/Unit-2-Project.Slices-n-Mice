const React = require('react');
const DefaultLayout = require('./layouts/Default');

class Show extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <DefaultLayout title={"GET GOOD...PIZZA!"}>
      <h1>show page</h1>
        <img src={product.img} /><br/>
        Name: {product.name}<br/>
        Manufacturer: {product.manufacturer}<br/>
        Group: {product.group}<br/>
        Rating: {product.rating}<br/>
        Price: ${product.price}<br/>
        Quantity: {product.qty}</br/>
        <a href={`/products/${product._id}/edit`}>Edit This Listing</a><br/>
        <form method="POST" action={`/products/${product._id}?_method=DELETE`}>
          <input type="submit" value="DELETE"
        <nav className= "Nav">
          <a href={`/products/`}>Home</a>
      </DefaultLayout>
    )
  }
}

module.exports= Show;
